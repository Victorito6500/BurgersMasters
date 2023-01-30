/*
Se ejecuta al cargar la página
*/
function onload() {
  /****** Carga de datos de la pantalla que esté ******/
  let pantalla = $("#pantalla").val();
  let xhr = new XMLHttpRequest();
  let method = "GET";
  let url = "js/datos.json";

  switch (pantalla) {
    case "home":
      cargarHome(xhr, method, url);
      break;
    case "carta":
      cargarCarta(xhr, method, url);
      break;
    case "restaurantes":
      cargarRestaurantes(xhr, method, url);
      break;
    case "aboutus":
      cargarAboutUs(xhr, method, url);
      break;
    case "contacto":
      let btnForm = $("#btnForm");

      btnForm.click(() => {
        enviarFormulario();
      });
      break;

    default:
      break;
  }
}

/*
Carga los datos que se muestran en la pantalla home.
Petición AJAX a un JSON.
*/
function cargarHome(xhr, method, url) {
  xhr.open(method, url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let restaurantes = datos.restaurantes;

      let c = $("main");

      /****** Añade restaurantes ******/
      for (let item of restaurantes) {
        let newSection = $("<section></section>");
        let divDatos = $("<div></div>");
        let newH3 = $("<h3></h3>").text(item.direccion);
        let newP = $("<p></p>").text(item.descripcion);
        let divImgRestaurante = $("<div></div>");
        let imgRestaurante = $("<img />");

        c.append(newSection);
        newSection.append(divDatos);
        divDatos.append(newH3);
        divDatos.append(newP);
        newSection.append(divImgRestaurante);
        divImgRestaurante.append(imgRestaurante);

        divImgRestaurante.attr("class", "restaurante-img");
        imgRestaurante.attr({
          src: item.img,
          alt: "Burger's Masters Restaurant",
        });
      }
    }
  };
}

/*
Carga los datos que se muestran en la pantalla carta.
Petición AJAX a un JSON.
*/
function cargarCarta(xhr, method, url) {
  xhr.open(method, url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let carta = datos.carta;

      /****** Añade carta ******/
      let c = $("#carta");
      let newSection = $("<section></section>");
      let newH2;

      c.append(newSection);

      // Itera sobre las diferentes secciones de la carta
      for (let item of carta) {
        // Crea título de la sección
        newH2 = $("<h2></h2>").text(item.titulo);
        newSection.append(newH2);

        // Crea los productos de la sección
        for (let p of item.productos) {
          let newArticle = $("<article></article");
          let newP = $("<p></p>");
          let spanNombre = $("<span></span>").text(p.nombre);
          let spanPrecio = $("<span></span>").text(p.precio);
          let spanDescripcion = $("<span></span>").text(p.descripcion);

          newSection.append(newArticle);
          newArticle.append(newP);
          newP.append(spanNombre);
          newP.append(spanPrecio);
          newArticle.append(spanDescripcion);

          newP.attr("class", "titulo-comida");
          spanDescripcion.attr("class", "descripcion-comida");
        }
      }
    }
  };
}

/*
Carga los datos que se muestran en la pantalla restaurantes.
Petición AJAX a un JSON.
*/
function cargarRestaurantes(xhr, method, url) {
  xhr.open(method, url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let restaurantes = datos.restaurantes;

      let c = $("#restaurantes");

      /****** Añade restaurantes ******/
      for (let item of restaurantes) {
        let newSection = $("<section></section>");
        let divDatos = $("<div></div>");
        let divBtnReserva = $("<div></div>");
        let btnReserva = $("<button></button>").text("Reservar ahora");
        let divImgRestaurante = $("<div></div>");
        let imgRestaurante = $("<img />");
        let newH3 = $("<h3></h3>").text(item.direccion);
        let newP = $("<p></p>").text(item.descripcion);

        c.append(newSection);
        newSection.append(divDatos);
        divDatos.append(newH3);
        divDatos.append(newP);
        divDatos.append(divBtnReserva);
        divBtnReserva.append(btnReserva);
        newSection.append(divImgRestaurante);
        divImgRestaurante.append(imgRestaurante);

        divDatos.attr("class", "datos-restaurante");
        divBtnReserva.attr("class", "btn-reserva");
        divImgRestaurante.attr("class", "restaurante-img");
        imgRestaurante.attr({
          src: item.img,
          alt: "Burger's Masters Restaurant",
        });
      }
    }
  };
}

/*
Carga los datos que se muestran en la pantalla sobre nosotros.
Petición AJAX a un JSON.
*/
function cargarAboutUs(xhr, method, url) {
  xhr.open(method, url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let aboutus = datos.aboutus;

      /****** Añade el contenido ******/
      let c = $("#contenido-main");
      let newH2 = $("<h2></h2>").text("Sobre Burger's Masters");
      let newP1 = $("<p></p>").text(aboutus.p1);
      let newP2 = $("<p></p>").text(aboutus.p2);
      let newP3 = $("<p></p>").text(aboutus.p3);
      let newP4 = $("<p></p>").text(aboutus.p4);
      let divImg1 = $("<div></div>");
      let divImg2 = $("<div></div>");
      let img1 = $("<img />");
      let img2 = $("<img />");

      c.append(newH2);
      c.append(newP1);
      c.append(divImg1);
      c.append(newP2);
      c.append(newP3);
      c.append(divImg2);
      c.append(newP4);
      divImg1.append(img1);
      divImg2.append(img2);

      divImg1.attr("class", "about-img");
      divImg2.attr("class", "about-img");
      img1.attr({
        src: aboutus.img1,
        alt: "Burger's Masters",
      });
      img2.attr({
        src: aboutus.img2,
        alt: "Burger's Masters",
      });
    }
  };
}

/*
Comprueba los campos del formulario y muestra un alert
*/
function enviarFormulario() {
  let name = $("#name").val();
  let email = $("#email").val();
  let comment = $("#comment").val();
  let emailComprobacion = new RegExp("^[^@]+@[^@]+.[a-zA-Z]{2,}$");

  if (name == "" || email == "" || comment == "") {
    // Comprueba que todos los campos estén escritos
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, rellene todos los campos para enviar la consulta, Gracias.",
    });
  } else if (!emailComprobacion.test(email)) {
    // Comprueba que el email sea válido
    Swal.fire({
      icon: "error",
      title: "Email no válido",
      text: "Por favor, introduzca un email válido.",
    });
  } else {
    // Enviado correctamente
    Swal.fire({
      icon: "success",
      title: "Enviado correctamente",
      text: "En breves revisaremos su consulta, ¡Muchas Gracias!.",
    });

    // Despeja los campos
    $("form").trigger("reset");
  }
}

let usuarios = [
  {
    id: 1,
    cedula: "1007118795",
    nombres: "JULIAN GARCIA",
    apellidos: "CALVO DOMÍNGUEZ",
    genero: "MASCULINO",
    email: "iGARCIA1.edu.co",
    celular: "3023691487",
    direccion: "CALLE 23B 44 45",
  },
  {
    id: 2,
    cedula: "8855266221",
    nombres: "PABLO",
    apellidos: "PICASSO ",
    genero: "MASCULINO",
    email: "PAVLITO@gmail.com",
    celular: "3031487392",
    direccion: "CARRERA 41 A",
  },
  {
    id: 3,
    cedula: "1004344795",
    nombres: "MICKAEL",
    apellidos: "PERCINI",
    genero: "MASCULINO",
    email: "MICHEPERCI@gmail.com",
    celular: "3031487334",
    direccion: "GALAPA CALLE 2 CARRERA 10",
  },
  {
    id: 4,
    cedula: "10043214795",
    nombres: "MARIA FERNANDA",
    apellidos: "MENDOZA MALDONADO",
    genero: "FEMENINO",
    email: "mafemend@gmail.com",
    celular: "3031227334",
    direccion: "BARRANQUILLA CALLE 96 CARRERA 60",
  },
];

let existeModificacion = false;

const deshabilitarCargue = () => {
  const boton = document.querySelector("#cargar");
  if (existeModificacion) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
};

const obtenerIdMayor = () => {
  let ids = usuarios.map((usuario, id) => {
    return usuario.id;
  });
  ids = ids.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  return ids.at(-1);
};

const cargarUsuarios = () => {
  // Crear un DocumentFragment para agregar todas las filas y celdas de datos (Mejor renderizado)
  const fragment = document.createDocumentFragment();

  const tbody = document.querySelector("tbody");

  let filasHTML = "";

  usuarios.forEach((usuario, i) => {
    filasHTML += `
      <tr>
        <td>${usuario.id}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.nombres}</td>
        <td>${usuario.apellidos}</td>
        <td>${usuario.genero}</td>
        <td>${usuario.email}</td>
        <td>${usuario.celular}</td>
        <td>${usuario.direccion}</td>
        <td class="col-1">
          <button class="btn btn-danger col-12 mt-2" onclick="eliminarUsuario(${usuario.id})"><i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = filasHTML;
  existeModificacion = false;
  deshabilitarCargue();
};

const validarCedula = (event, id) => {
  let input = event.target.value;
  event.target.value = input.replace(/[^0-9]/g, "");

  const cedula = document.querySelector(`#${id}`);

  if (cedula.value.length > 10 || cedula.value.length < 5) {
    cedula.classList.remove("is-valid");
    cedula.classList.add("is-invalid");
  } else {
    cedula.classList.remove("is-invalid");
    cedula.classList.add("is-valid");
  }
};

const validarNombres = (event, id) => {
  let input = event.target.value.toUpperCase();
  event.target.value = input.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");

  const nombres = document.querySelector(`#${id}`);

  if (nombres.value.length < 3) {
    nombres.classList.remove("is-valid");
    nombres.classList.add("is-invalid");
  } else {
    nombres.classList.remove("is-invalid");
    nombres.classList.add("is-valid");
  }
};

const validarApellidos = (event, id) => {
  let input = event.target.value.toUpperCase();
  event.target.value = input.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");

  const apellidos = document.querySelector(`#${id}`);

  if (apellidos.value.length < 3) {
    apellidos.classList.remove("is-valid");
    apellidos.classList.add("is-invalid");
  } else {
    apellidos.classList.remove("is-invalid");
    apellidos.classList.add("is-valid");
  }
};

const onChangeGenero = (event, id) => {
  const label = document.querySelector("#validacion-check");
  label.classList.add("d-none");
};

const onChangeGenero2 = (event, id) => {
  const label = document.querySelector("#validacion-check2");
  label.classList.add("d-none");
};

const validarCorreo = (event, id) => {
  event.target.value = event.target.value.toLowerCase();
  const correo = document.querySelector(`#${id}`);
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correoRegex.test(correo.value)) {
    correo.classList.remove("is-invalid");
    correo.classList.add("is-valid");
  } else {
    correo.classList.remove("is-valid");
    correo.classList.add("is-invalid");
  }
};

const validarCelular = (event, id) => {
  let input = event.target.value;
  event.target.value = input.replace(/[^0-9]/g, "");

  const cedula = document.querySelector(`#${id}`);

  if (cedula.value.length != 10) {
    cedula.classList.remove("is-valid");
    cedula.classList.add("is-invalid");
  } else {
    cedula.classList.remove("is-invalid");
    cedula.classList.add("is-valid");
  }
};

const validarDireccion = (event, id) => {
  event.target.value = event.target.value.toUpperCase();
  const direccion = document.querySelector(`#${id}`);

  if (direccion.value) {
    direccion.classList.remove("is-invalid");
    direccion.classList.add("is-valid");
  } else {
    direccion.classList.remove("is-valid");
    direccion.classList.add("is-invalid");
  }
};

const actualizarUsuario = (usuario) => {
  let existeCedula = false;

  usuarios.forEach((elemento, i) => {
    if (elemento.cedula == usuario.cedula && elemento.id != usuario.id) {
      existeCedula = true;
    }
  });

  if (existeCedula) {
    alert("Ya existe otro con ese número de cédula");
  } else {
    usuarios = usuarios.map((elemento, i) => {
      if (elemento.id == usuario.id) {
        return usuario;
      } else {
        return elemento;
      }
    });

    document.getElementById('cerrar-2').click()

    existeModificacion = true;
    deshabilitarCargue();
    cargarUsuarios();
    alert('El usuario ha sido actualizado correctamente!')
  }
};

const agregarUsuario = (usuario) => {
  let existeId,
    existeCedula = false;

  usuarios.forEach((elemento, i) => {
    if (elemento.id == usuario.id) {
      existeId = true;
    }

    if (elemento.cedula == usuario.cedula) {
      existeCedula = true;
    }
  });

  if (existeId) {
    alert("Ya existe un usuario con ese ID");
  } else if (existeCedula) {
    alert("Ya existe un usuario con ese número de cédula");
  } else {
    usuarios = [...usuarios, usuario];
    document.getElementById("cerrar-1").click();
    existeModificacion = true;
    deshabilitarCargue();
    cargarUsuarios();
    alert('El usuario ha sido agregado correctamente!')
  }
};

const submitFormulario = () => {
  const radios = document.querySelectorAll(
    'input[type="radio"][name="genero"]'
  );

  let generoSeleccionado = false;
  let genero = "";
  let valido = true;

  radios.forEach((radio) => {
    if (radio.checked) {
      generoSeleccionado = true;
      genero = radio.value;
    }
  });

  const formInputs = document.querySelectorAll(
    "#formulario_agregar form input"
  );

  formInputs.forEach((input) => {
    if (input.value == "") {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      valido = false;
    }

    if (input.classList.contains("is-invalid") || generoSeleccionado == false) {
      valido = false;
    }
  });

  if (valido) {
    agregarUsuario({
      id: obtenerIdMayor() + 1,
      cedula: document.querySelector("#cedula").value,
      nombres: document.querySelector("#nombres").value,
      apellidos: document.querySelector("#apellidos").value,
      genero: genero,
      email: document.querySelector("#email").value,
      celular: document.querySelector("#celular").value,
      direccion: document.querySelector("#direccion").value,
    });
  }
};

const eliminarUsuario = (id) => {
  nuevosUsuarios = usuarios.filter((elemento, i) => {
    if (elemento.id == id) {
      return false;
    } else {
      return true;
    }
  });
  usuarios = nuevosUsuarios;
  cargarUsuarios();
  alert('El usuario ha sido eliminado correctamente!')
};


const modal = document.getElementById("formulario_agregar");

modal.addEventListener("show.bs.modal", function (event) {
  // Código a ejecutar cuando se muestra el modal

  const formInputs = document.querySelectorAll("form input");

  formInputs.forEach((input) => {
    if (input.type != "radio") {
      input.value = "";
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.checked = false;
    }
    document.querySelector("#validacion-check").classList.remove("d-none");
  });
});


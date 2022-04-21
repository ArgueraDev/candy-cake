<template>
  <div id="appp">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #d63384"
    >
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#/">
          <img src="candy-cake-logo.svg" alt="logo" width="50" />
          Candy Cake</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#/quienes-somos"
                >¿Quiénes Somos?</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#/market">Market</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#contactos">Contactos</a>
            </li>
          </ul>
          <form class="d-flex">
            <h3
              hidden
              class="text-white mx-2"
              title="Preguntas Frecuentes"
              v-on:click="preguntas"
            >
              <i class="bi bi-patch-question"></i>
            </h3>
            <div class="dropdown" v-if="Object.keys(usuario).length != 0">
              <h3
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                class="text-white"
                title="Opciones"
              >
                <i class="bi bi-three-dots"></i>
              </h3>

              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#/carrito"
                    ><i class="bi-cart-fill me-1"></i> Carrito</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#" v-on:click="CerrarSesion"
                    ><i class="bi bi-power"></i> Cerrar Sesión</a
                  >
                </li>
              </ul>
            </div>
            <h3
              v-else
              class="text-white"
              title="Iniciar Sesión"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              <i class="bi bi-person-circle"></i>
            </h3>
          </form>
        </div>
      </div>
    </nav>
    <router-view />

    <section id="contactos" class="py-5" style="background-color: #d63384">
      <div class="container">
        <h2 class="h1-responsive font-weight-bold text-center text-white mb-5">
          Contactos
        </h2>
        <div class="row">
          <div class="col-md-4 d-flex justify-content-center">
            <a
              href="https://www.instagram.com/candy.cake.pasteleria"
              class="text-center text-decoration-none text-white"
              title="Instagram"
            >
              <span class="btn-contact">
                <i class="bi bi-instagram"></i>
              </span>
              Instagram
            </a>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <a
              href="https://www.facebook.com/candy.cake.usu"
              class="text-center text-decoration-none text-white"
              title="Facebook"
              ><span class="btn-contact"><i class="bi bi-facebook"></i></span>
              Facebook</a
            >
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <a
              href="https://api.whatsapp.com/send?phone=+50378110980"
              class="text-center text-decoration-none text-white"
              title="Whatsapp"
            >
              <span class="btn-contact"><i class="bi bi-whatsapp"></i></span>
              Whatsapp</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Footer-->
    <footer class="py-4" style="background-color: #d63384">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Candy Cake 2021
        </p>
      </div>
    </footer>
    <div
      class="modal fade"
      id="login"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header text-light text-center"
            style="background-color: #d63384"
          >
            <h5 class="modal-title" id="staticBackdropLabel">Iniciar Sesión</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="validarLogin">
              <div class="mb-3">
                <label for="correo" class="form-label">Correo</label>
                <input
                  type="email"
                  class="form-control"
                  pattern=".+@[a-z0-9.-]+\.[a-z]{2,4}"
                  v-model.trim="login.correo"
                  placeholder="name@example.com"
                  id="correo"
                  name="correo"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    v-model.trim="login.password"
                    placeholder="******"
                    id="password"
                    name="password"
                  />
                  <button type="button" class="btn boton2">
                    <i class="far fa-eye" id="togglePassword"></i>
                  </button>
                </div>
              </div>
              <div class="mb-3 d-grid gap-2">
                <button type="submit" class="btn boton">Iniciar Sesión</button>
                <button
                  type="button"
                  class="btn boton2"
                  data-bs-target="#logout"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="logout"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header text-light text-center"
            style="background-color: #d63384"
          >
            <h5 class="modal-title" id="staticBackdropLabel">Registro</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="validarLogup">
              <div class="mb-3">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="logup.nombre"
                  placeholder="Nombre Apellido"
                  id="nombre"
                  name="nombre"
                />
              </div>
              <div class="mb-3">
                <label for="correo2">Correo</label>
                <input
                  type="email"
                  class="form-control"
                  pattern=".+@[a-z0-9.-]+\.[a-z]{2,4}"
                  v-model.trim="logup.correo"
                  placeholder="name@example.com"
                  id="correo2"
                  name="correo2"
                />
              </div>
              <div class="mb-3">
                <label for="password2" class="form-label">Contraseña</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    v-model.trim="logup.password"
                    placeholder="******"
                    id="password2"
                    name="password2"
                  />
                  <button type="button" class="btn boton2">
                    <i class="far fa-eye" id="togglePassword2"></i>
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="check"
                  name="check"
                />
                <label class="form-check-label px-1" for="check">
                  Aceptar los
                  <a href="#" v-on:click="terminos">términos y condiciones</a>
                </label>
              </div>
              <div class="mb-3 d-grid gap-2">
                <button type="submit" class="btn boton">Registrar</button>
                <button
                  type="button"
                  class="btn boton2"
                  data-bs-target="#login"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "appp",
  data() {
    return {
      socket: {},
      usuario: {},
      login: {
        correo: "",
        password: "",
      },
      logup: {
        nombre: "",
        correo: "",
        password: "",
      },
      submitted: false,
      op: null,
    };
  },
  validations: {
    login: {
      correo: { required, email },
      password: { required, minLength: minLength(6) },
    },
    logup: {
      nombre: { required, minLength: minLength(8) },
      correo: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
    this.ValidarSesion();
  },
  methods: {
    ValidarSesion() {
      if (sessionStorage.getItem("CandySession")) {
        this.socket.emit(
          "obtenerUsuario",
          sessionStorage.getItem("CandySession")
        );
      }
    },
    IniciarSesion() {
      let uss = {
        correo: this.logup.correo,
        password: this.logup.password,
      };
      this.socket.emit("validarUsuario", uss);
    },
    verificarLogin() {
      if (!this.login.correo) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese un correo",
        });
      } else if (!this.login.password) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese una contraseña",
        });
      } else if (this.login.password.length < 6) {
        this.$swal.fire({
          icon: "warning",
          text: "La contraseña debe tener minimo 6 digitos",
        });
      } else {
        this.$swal.fire({
          icon: "warning",
          text: "El correo no es valido",
        });
      }
    },
    verificarRegistro() {
      if (!this.logup.nombre) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese su nombre",
        });
      } else if (this.logup.nombre.length < 8) {
        this.$swal.fire({
          icon: "warning",
          text: "El nombre debe contener minimo 8 caracteres",
        });
      } else if (!this.logup.correo) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese un correo",
        });
      } else if (!this.logup.password) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese una contraseña",
        });
      } else if (this.logup.password.length < 6) {
        this.$swal.fire({
          icon: "warning",
          text: "La contraseña debe tener minimo 6 digitos",
        });
      } else {
        this.$swal.fire({
          icon: "warning",
          text: "El correo no es valido",
        });
      }
    },
    validarLogin() {
      this.submitted = true;
      this.op = 1;

      this.$v.$touch();
      if (this.$v.login.$invalid) {
        this.verificarLogin();
        return;
      }

      this.socket.emit("validarCorreo", this.login.correo);
    },
    validarLogup() {
      let isChecked = document.getElementById("check").checked;
      this.submitted = true;
      this.op = 0;

      this.$v.$touch();
      if (this.$v.logup.$invalid) {
        this.verificarRegistro();
        return;
      }

      if (isChecked) {
        this.socket.emit("validarCorreo", this.logup.correo);
      } else {
        this.$swal.fire({
          icon: "warning",
          text: "Debe aceptar los términos y condiciones para continuar",
        });
      }
    },
    CerrarSesion() {
      sessionStorage.removeItem("CandySession");
      location.reload();
    },
    terminos() {
      this.$swal.fire({
        title: "Términos y Condiciones de Candy Cake",
        html:
          "<p>Esta página web es propiedad y está operado por Candy Cake. Estos Términos establecen las condiciones bajo los cuales tú puedes usar nuestra Web y los servicios ofrecidos por nosotros. Esta web ofrece un catálogo y un Marketplace para la compra de nuestros productos. Al acceder o usar la web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado estar sujeto a estos Términos</p>" +
          "<p>• El Servicio y todos los materiales incluidos o transferidos, incluyendo, sin limitación, imágenes, texto, logotipos, patentes, derechos de autor, fotografías y todos los Derechos de Propiedad Intelectual relacionados con ellos, son la propiedad exclusiva de Candy Cake. Salvo que se indique explícitamente en este documento, no se considerará que nada en estos Términos crea una licencia en o bajo ninguno de dichos Derechos de Propiedad Intelectual, y tu aceptas no vender, licenciar, alquilar.</p>" +
          "<p>• Si acepta los términos está comprometido a mantener el orden y el debido respeto.</p>",
      });
    },
    preguntas() {
      location.href = "./#/preguntas";
    },
  },
  mounted() {
    this.socket.on("usurioActivo", (items) => {
      this.usuario = items;
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido " + items.nombre,
        showConfirmButton: false,
        timer: 2000,
      });
    });
    this.socket.on("notificacion", (item) => {
      if (item == "Registrado!") {
        this.IniciarSesion();
      } else {
        this.$swal.fire({
          position: "top-end",
          icon: "warning",
          title: item,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    this.socket.on("correoValidado", (item) => {
      if (this.op == 1) {
        if (item) {
          this.socket.emit("validarUsuario", this.login);
        } else {
          this.$swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Este correo no existe",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        if (!item) {
          this.socket.emit("guardarUsuario", this.logup);
        } else {
          this.$swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Este correo ya existe",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
    this.socket.on("usuarioValidado", (item) => {
      if (item) {
        sessionStorage.setItem("CandySession", item._id);
        location.reload();
      }
    });

    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye slash icon
      this.classList.toggle("fa-eye-slash");
    });
    const togglePassword2 = document.querySelector("#togglePassword2");
    const password2 = document.querySelector("#password2");
    togglePassword2.addEventListener("click", function () {
      // toggle the type attribute
      const type =
        password2.getAttribute("type") === "password" ? "text" : "password";
      password2.setAttribute("type", type);
      // toggle the eye slash icon
      this.classList.toggle("fa-eye-slash");
    });
  },
};
</script>

<style>
.btn-contact {
  height: 70px;
  width: 70px;
  font-size: 3rem;
  color: white;
  display: block;
}

.btn-contact:hover {
  color: rgba(255, 255, 255, 0.5);
}

.boton {
  background-color: #d63384;
  color: white;
}

.boton:hover {
  background-color: #b83174;
  color: white;
}

.boton2 {
  border: 1px solid #d63384;
  background-color: #ffffff00;
  color: #d63384;
}
.boton2:hover {
  border: 1px solid #b83174;
  background-color: #ffffff00;
  color: #b83174;
}

#load {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>
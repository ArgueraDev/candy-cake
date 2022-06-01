<template>
  <div id="appp">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #d291bc"
    >
      <div class="container-fluid px-5">
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
              <a class="nav-link active" href="#/market">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#/quienes-somos"
                >¿Quiénes Somos?</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#/contacto">Contacto</a>
            </li>
          </ul>
          <form class="d-flex mx-3" @submit.prevent="buscar()">
            <div class="g-search">
              <input
                id="buscador"
                placeholder="Buscar"
                type="search"
                class="input-search"
                v-model.trim="search"
                v-on:keyup.enter="buscar()"
              />
              <div class="fancy-bg"></div>
              <div class="search-icon">
                <svg
                  class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </form>
          <form class="d-flex">
            <h3
              hidden
              class="text-white mx-2"
              v-if="Object.keys(usuario).length != 0"
              v-on:click="carrito"
            >
              <i class="bi-cart-fill me-1"></i>
            </h3>
            <div class="dropdown">
              <h5
                class="text-white my-auto"
                role="button"
                id="dropOpciones"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                title="Opciónes"
              >
                <i class="bi bi-gear-fill"></i>
              </h5>
              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropOpciones"
              >
                <li>
                  <a class="dropdown-item" href="#/preguntas"
                    ><i class="bi bi-question-circle"></i> Preguntas
                    Frecuentes</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#/politicas"
                    ><i class="bi bi-exclamation-circle"></i> Políticas</a
                  >
                </li>
                <li v-if="Object.keys(usuario).length != 0">
                  <a class="dropdown-item" href="" v-on:click="CerrarSesion"
                    ><i class="bi bi-power"></i> Cerrar Sesión</a
                  >
                </li>
                <li v-else>
                  <a
                    class="dropdown-item"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    ><i class="bi bi-person-circle"></i> Iniciar Sesión</a
                  >
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <router-view />

    <!--footer-->
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 item">
              <h3>Menú</h3>
              <ul>
                <li><a href="#/">Inicio</a></li>
                <li><a href="#/market">Tienda</a></li>
                <li><a href="#/contacto">Contacto</a></li>
                <li><a href="#/quienes-somos">¿Quiénes Somos?</a></li>
              </ul>
            </div>
            <div class="col-md-4 item">
              <h3>Información</h3>
              <ul>
                <li><a href="#/politicas">Políticas</a></li>
                <li><a href="#/preguntas">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div class="col-md-4 item text">
              <h3>Contáctanos</h3>
              <p><i class="bi bi-telephone"></i> +503 7811 0980</p>
              <p><i class="bi bi-whatsapp"></i> +503 6983 3379</p>
              <p><i class="bi bi-envelope"></i> rosayasminruiz.12@gmail.com</p>
            </div>
            <div class="col item social">
              <a href="https://www.facebook.com/candy.cake.usu" title="Facebook"
                ><i class="bi bi-facebook"></i
              ></a>
              <a
                href="https://www.instagram.com/candy.cake.pasteleria"
                title="Instagram"
                ><i class="bi bi-instagram"></i
              ></a>
            </div>
          </div>
          <p class="copyright">Candy Cake © 2022</p>
        </div>
      </footer>
    </div>

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
            style="background-color: #d291bc"
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
            style="background-color: #d291bc"
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
      search: "",
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
    carrito() {
      location.href = "./#/carrito";
    },
    buscar() {
      if (this.search.length != 0) {
        location.href = "./#/market/" + this.search;
        location.reload();
      }
    },
  },
  mounted() {
    this.socket.on("usurioActivo", (items) => {
      this.usuario = items;
      /*this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido " + items.nombre,
        showConfirmButton: false,
        timer: 2000,
      });*/
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
  background-color: #d291bc;
  color: white;
}

.boton:hover {
  background-color: #b83174;
  color: white;
}

.boton2 {
  border: 1px solid #d291bc;
  background-color: #ffffff00;
  color: #d291bc;
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

/* search */
.g-search {
  --input-text-color: #fff;
  --input-bg-color: #ffffff00;
  --focus-input-bg-color: transparent;
  --text-color: #fff;
  --active-color: #fff;
  --width-of-input: 200px;
  --inline-padding-of-input: 1.2em;
  --gap: 0.9rem;
}

.g-search {
  font-size: 0.9rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  padding: 0.8em;
  padding-inline: var(--inline-padding-of-input);
  width: var(--width-of-input);
  position: relative;
  isolation: isolate;
}

.fancy-bg {
  position: absolute;
  width: 100%;
  inset: 0;
  background: var(--input-bg-color);
  border-radius: 30px;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.search-icon {
  position: absolute;
}

.search-icon {
  fill: var(--text-color);
  left: var(--inline-padding-of-input);
  width: 17px;
}

.input-search {
  color: var(--input-text-color);
  width: 100%;
  margin-inline: min(2em, calc(var(--inline-padding-of-input) + var(--gap)));
  background: transparent;
  border: none;
}

.input-search:focus {
  outline: none;
}

.input-search::placeholder {
  color: var(--text-color);
}

.input-search:focus ~ .fancy-bg {
  border: 1px solid var(--active-color);
  background: var(--focus-input-bg-color);
}

.input-search:focus ~ .search-icon {
  fill: var(--active-color);
}

.input-search:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
}

/*footer*/
.footer-dark {
  padding: 50px 0;
  color: #f0f9ff;
  background-color: #d291bc;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: white;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.8;
  font-size: 13px;
  margin-bottom: 0;
}
</style>

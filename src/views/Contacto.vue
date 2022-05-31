<template>
  <div id="contacto" class="container">
    <form class="card my-3" @submit.prevent="enviarMensaje()">
      <div class="card-header text-white" style="background-color: #d291bc">
        <h2>Contacto</h2>
        <p>
          No recibimos pedidos ni aceptamos reservas a través de este
          formulario.
        </p>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="nombreContato" class="form-label">Nombre Completo</label>
          <input
            type="text"
            class="form-control"
            id="nombreContato"
            minlength="5"
            placeholder="Candy Cake"
            v-model.trim="contacto.nombre"
            required
          />
        </div>
        <div class="mb-3">
          <label for="correoContacto" class="form-label"
            >Correo Electrónico</label
          >
          <input
            type="email"
            class="form-control"
            id="correoContacto"
            pattern=".+@[a-z0-9.-]+\.[a-z]{2,4}"
            placeholder="name@example.com"
            v-model.trim="contacto.correo"
            required
          />
        </div>
        <div class="mb-3">
          <label for="mensajeContacto" class="form-label">Mensaje</label>
          <textarea
            class="form-control"
            id="mensajeContacto"
            rows="3"
            minlength="5"
            v-model.trim="contacto.mensaje"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <button class="boton-env" type="submit">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "contacto",
  data() {
    return {
      socket: {},
      contacto: {
        nombre: "",
        correo: "",
        mensaje: "",
      },
      submitted: false,
    };
  },
  validations: {
    contacto: {
      nombre: { required, minLength: minLength(5) },
      correo: { required, email },
      mensaje: { required, minLength: minLength(5) },
    },
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
  },
  methods: {
    enviarMensaje() {
      this.socket.emit("guardarContacto", this.contacto);
      this.limpiar();
    },
    validarDatos() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.login.$invalid) {
        this.notificaciones();
        return;
      }

      this.enviarMensaje();
    },
    notificaciones() {
      if (!this.contacto.nombre) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese su nombre",
        });
      } else if (this.contacto.nombre.length < 5) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese su nombre completo",
        });
      } else if (!this.contacto.correo) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese un correo",
        });
      } else if (!this.contacto.mensaje) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese su mensaje",
        });
      } else if (this.contacto.mensaje.length < 5) {
        this.$swal.fire({
          icon: "warning",
          text: "Ingrese un mensaje con mas información",
        });
      } else {
        this.$swal.fire({
          icon: "warning",
          text: "El correo no es valido",
        });
      }
    },
    limpiar() {
      this.contacto = {
        nombre: "",
        correo: "",
        mensaje: "",
      };
    },
  },
};
</script>

<style>
/*btn enviar*/
.boton-env {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #fff;
  background-color: #d291bc;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.295);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.boton-env:hover {
  background-color: #d291bc;
  box-shadow: 0px 15px 20px #8a607c;
  color: #fff;
  transform: translateY(-7px);
}
.boton-env:active {
  transform: translateY(-1px);
}
</style>

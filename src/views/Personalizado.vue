<template>
  <div id="personalizado" class="container">
    <form @submit.prevent="cotizar()" class="card shadow my-3 mx-3 p-3">
      <div class="mb-3 text-center">
        <p class="fs-2 fw-bold">Personalizar Pastel</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="size" class="form-label fw-bold">Tamaño:</label>
            <select
              class="form-select"
              id="size"
              aria-label="Default select example"
              v-model="cotizacion.tamaño"
            >
              <option selected value="1">12 a 15 porciones</option>
              <option value="2">15 a 20 porciones</option>
              <option value="3">20 a 25 porciones</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="sabor" class="form-label fw-bold">Sabor:</label>
            <select
              class="form-select"
              id="sabor"
              aria-label="Default select example"
              v-model="cotizacion.sabor"
            >
              <option selected value="1">Vainilla</option>
              <option value="2">Chocolate</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="relleno" class="form-label fw-bold">Relleno:</label>
            <select
              class="form-select"
              id="relleno"
              aria-label="Default select example"
              v-model="cotizacion.relleno"
            >
              <option selected value="1">Crema Pastelera</option>
              <option value="2">Chocolate</option>
              <option value="3">Fruta</option>
              <option value="4">Semillas</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="cobertura" class="form-label fw-bold">Cobertura:</label>
            <select
              class="form-select"
              id="cobertura"
              aria-label="Default select example"
              v-model="cotizacion.cobertura"
            >
              <option selected value="1">Crema Pastelera</option>
              <option value="2">Chocolate</option>
              <option value="3">Frutas</option>
              <option value="4">Semillas</option>
              <option value="5">Temática</option>
            </select>
          </div>
          <div class="mb-3" v-if="cotizacion.cobertura == 5">
            <label for="tematica" class="form-label fw-bold">Temática:</label>
            <textarea
              class="form-control"
              placeholder="Temática"
              id="tematica"
              required
              v-model.trim="cotizacion.tematica"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="otros" class="form-label fw-bold">Otros:</label>
            <textarea
              class="form-control"
              placeholder="Otros"
              id="otros"
              v-model.trim="cotizacion.otros"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="mb-3 text-center">
        <p class="fs-2 fw-bold">Contacto</p>
      </div>
      <div class="mb-3">
        <label for="Nombre" class="form-label fw-bold">Nombre:</label>
        <input
          type="text"
          class="form-control"
          minlength="3"
          required
          placeholder="Nombre"
          id="Nombre"
          v-model.trim="contacto.nombre"
        />
      </div>
      <div class="mb-3">
        <label for="Telefono" class="form-label fw-bold">Teléfono:</label>
        <input
          type="text"
          pattern="[0-9]{4}[ -][0-9]{4}|[0-9]{8}"
          size="9"
          required
          class="form-control"
          placeholder="Telefono"
          id="Telefono"
          v-model.trim="contacto.telefono"
        />
      </div>
      <div class="mb-3 mx-5 d-grid gap-2">
        <button class="btn boton btn-lg" id="btnnext" type="submit">
          Cotizar <i class="bi bi-cart-check-fill"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "Personalizado",
  data() {
    return {
      socket: {},
      cotizacion: {
        tamaño: "1",
        sabor: "1",
        relleno: "1",
        cobertura: "1",
        tematica: "",
        otros: "",
      },
      contacto: {
        telefono: "",
        nombre: "",
      },
      datos: {},
    };
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
  },
  methods: {
    Limpiar() {
      this.cotizacion = {
        tamaño: "1",
        sabor: "1",
        relleno: "1",
        cobertura: "1",
        tematica: "",
        otros: "",
      };
      this.contacto = {
        telefono: "",
        nombre: "",
      };
    },
    cotizar() {
      this.arreglo();
      //console.log(this.datos);
      this.socket.emit("guardarCotizacion", this.datos);
      this.Limpiar();
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title:
          "Su orden ya fue almacenada, pronto nos comunicaremos para darle la cotización",
        showConfirmButton: false,
        timer: 5000,
      });
    },
    arreglo() {
      var tamaño, sabor, relleno, cobertura;
      switch (this.cotizacion.tamaño) {
        case "1":
          tamaño = "12 a 15 porciones";
          break;
        case "2":
          tamaño = "15 a 20 porciones";
          break;
        case "3":
          tamaño = "20 a 25 porciones";
          break;
      }

      switch (this.cotizacion.sabor) {
        case "1":
          sabor = "Vainilla";
          break;
        case "2":
          sabor = "Chocolate";
          break;
      }

      switch (this.cotizacion.relleno) {
        case "1":
          relleno = "Crema Pastelera";
          break;
        case "2":
          relleno = "Chocolate";
          break;
        case "3":
          relleno = "Fruta";
          break;
        case "4":
          relleno = "Semillas";
          break;
      }

      switch (this.cotizacion.cobertura) {
        case "1":
          cobertura = "Crema Pastelera";
          break;
        case "2":
          cobertura = "Chocolate";
          break;
        case "3":
          cobertura = "Fruta";
          break;
        case "4":
          cobertura = "Semillas";
          break;
        case "5":
          cobertura = "Temática";
          break;
      }
      this.datos = {
        tamaño: tamaño,
        sabor: sabor,
        relleno: relleno,
        cobertura: cobertura,
        tematica: this.cotizacion.tematica,
        otros: this.cotizacion.otros,
        nombre: this.contacto.nombre,
        telefono: this.contacto.telefono,
      };
    },
  },
};
</script>

<style>
.boton {
  background-color: #d291bc;
  color: #fff;
}

.boton:hover {
  color: white;
}
</style>

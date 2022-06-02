<template>
  <div
    id="Venta"
    class="container"
    style="height: 100%"
    v-if="Object.keys(producto).length != 0"
  >
    <div class="card shadow my-3">
      <form @submit.prevent="submit">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="producto.imagen"
              class="img-fluid rounded-start"
              alt="producto"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{{ producto.nombre }}</h3>
              <p class="card-text" style="white-space: pre-wrap">
                {{ producto.descripcion }}
              </p>
              <h5 class="text-muted">
                Total: ${{ producto.precio }}
                <p v-if="domicilio">+ $3 de Servicio a Domicilio</p>
              </h5>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="fecha" class="form-label">Fecha de Entrega</label>
                <input
                  type="date"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.datos.fentrega.$error,
                  }"
                  :min="minfe"
                  v-model.trim="datos.fentrega"
                  id="fecha"
                  name="fecha"
                />
                <div
                  v-if="submitted && !$v.datos.fentrega.required"
                  class="invalid-feedback"
                >
                  Agregue una fecha de entrega
                </div>
              </div>
              <div class="mb-3">
                <label for="texto" class="form-label">Teléfono</label>
                <div
                  class="input-group mb-3"
                  name="texto"
                  :class="{
                    'is-invalid': submitted && $v.datos.telefono.$error,
                  }"
                >
                  <span class="input-group-text" id="basic-addon3">+503</span>
                  <input
                    type="tel"
                    class="form-control"
                    pattern="[0-9]{4}[ -][0-9]{4}|[0-9]{8}"
                    size="9"
                    v-model.trim="datos.telefono"
                    placeholder="0000-0000"
                    id="texto"
                    :class="{
                      'is-invalid': submitted && $v.datos.telefono.$error,
                    }"
                  />
                </div>
                <div
                  v-if="submitted && $v.datos.telefono.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.datos.telefono.required"
                    >Ingrese un numero de Teléfono</span
                  >
                  <span v-if="!$v.datos.telefono.minLength"
                    >El Teléfono debe tener minimo 8 digitos</span
                  >
                </div>
              </div>
              <div class="mb-3">
                <label for="texto" class="form-label">Dedicatoria</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="datos.texto"
                  id="texto"
                  name="texto"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <form class="mb-3">
                    <label class="form-label">Tipo de Pago</label>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="pago1"
                        @change="checkPago"
                        checked
                      />
                      <label class="form-check-label" for="pago1">
                        Pago en Efectivo
                      </label>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="pago2"
                        @change="checkPago"
                      />
                      <label class="form-check-label" for="pago2">
                        Pago con Tarjeta
                      </label>
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <form class="mb-3">
                    <label class="form-label">Servicio a domicilio</label>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="dom1"
                        @change="checkDomicilio"
                        checked
                      />
                      <label class="form-check-label" for="dom1"> Si </label>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="dom2"
                        @change="checkDomicilio"
                      />
                      <label class="form-check-label" for="dom2"> No </label>
                    </div>
                  </form>
                </div>
              </div>
              <div id="pagoTarjeta" hidden>
                <div class="row">
                  <div class="col-md-6">
                    <form class="mb-3">
                      <label class="form-label">Porcentaje a Pagar</label>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="can1"
                          @change="checkDomicilio"
                          checked
                        />
                        <label class="form-check-label" for="can1">
                          100%
                        </label>
                      </div>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="can2"
                          @change="checkDomicilio"
                        />
                        <label class="form-check-label" for="can2"> 50% </label>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="texto" class="form-label"
                        >Total a Pagar</label
                      >
                      <h5 class="text-muted">${{ total }}</h5>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="tajeta" class="form-label">Tarjeta</label>
                  <stripe-element-card
                    ref="elementRef"
                    :pk="pulishableKey"
                    hidePostalCode
                    @token="tokenCreated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 mx-5 d-grid gap-2">
          <button class="btn boton btn-lg" id="btnnext">
            {{ btn }} <i class="bi bi-cart-check-fill"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div id="load" v-else>
    <div class="spinner-border" style="color: #d291bc" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { StripeElementCard } from "@vue-stripe/vue-stripe";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Venta",
  components: {
    StripeElementCard,
  },
  data() {
    return {
      socket: {},
      producto: {},
      datos: {
        fentrega: "",
        texto: "",
        telefono: "",
      },
      submitted: false,
      orden: {},
      usuario: {},
      pulishableKey:
        "pk_test_51JmIBAE0BnyulodxWMWRc9ZiEugDOkxpXYrjGbEQy0jzks6KQjc0Fc3WWd3kbTubvyJRwZ9NRieOk5YFLgabomNl00C1i8vS1s",
      token: null,
      pago: {},
      minfe: "",
      domicilio: true,
      btn: "Reservar",
      total: 0,
    };
  },
  props: {
    id: {
      required: true,
    },
  },
  validations: {
    datos: {
      fentrega: { required },
      telefono: { required, minLength: minLength(8) },
    },
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
    this.socket.emit("mostrarProductos");
    this.ValidarSesion();
    this.fechaMin();
  },
  methods: {
    submit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.datos.$invalid) {
        return;
      }

      if (
        document.getElementById("pago1").checked == true &&
        document.getElementById("pago2").checked == false
      ) {
        this.Enviar("Pendiente de Pago");
        console.log("hola");
      } else if (
        document.getElementById("pago1").checked == false &&
        document.getElementById("pago2").checked == true
      ) {
        this.$refs.elementRef.submit();
      }
    },
    tokenCreated(token) {
      this.$swal({
        title: "Realizando el pago",
        allowOutsideClick: false,
      });
      this.$swal.showLoading();
      this.pago = {
        amount: this.total * 100,
        id: token.id,
        correo: this.usuario.correo,
        nombre: this.usuario.nombre,
        descripcion: this.producto.nombre,
      };

      this.socket.emit("Pagar", this.pago);
    },
    ValidarSesion() {
      if (sessionStorage.getItem("CandySession")) {
        this.socket.emit(
          "obtenerUsuario",
          sessionStorage.getItem("CandySession")
        );
      } else {
        this.$swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Debe registrarse para continuar",
          showConfirmButton: false,
          timer: 2000,
        });
        location.href = "./#/market";
      }
    },
    Enviar(idPago) {
      let informacion =
        this.producto.nombre + "\n\n" + this.producto.descripcion;
      if (this.datos.texto != "") {
        informacion =
          informacion + "\n\n" + "Texto a agregar: " + this.datos.texto;
      }
      let precioT;
      if (
        document.getElementById("dom1").checked == true &&
        document.getElementById("dom2").checked == false
      ) {
        precioT = Number(this.producto.precio) + 3;
      } else {
        precioT = Number(this.producto.precio);
      }

      this.orden = {
        nombre: this.usuario.nombre,
        idus: this.usuario._id,
        imagen: this.producto.imagen,
        descripcion: informacion,
        precio: precioT,
        fentrega: this.datos.fentrega,
        estado: "encargado",
        anticipo: idPago,
      };

      this.socket.emit("guardarCompra", this.orden);
    },
    fechaMin() {
      Date.prototype.addDays = function (noOfDays) {
        let tmpDate = new Date(this.valueOf());
        tmpDate.setDate(tmpDate.getDate() + noOfDays);
        return tmpDate;
      };
      let today = new Date();
      let min = today.addDays(2);
      this.minfe =
        min.getFullYear() + "-" + (min.getMonth() + 1) + "-" + min.getDate();
    },
    checkPago() {
      if (
        document.getElementById("pago1").checked == true &&
        document.getElementById("pago2").checked == false
      ) {
        document.getElementById("pagoTarjeta").hidden = true;
        this.btn = "Reservar";
      } else if (
        document.getElementById("pago1").checked == false &&
        document.getElementById("pago2").checked == true
      ) {
        document.getElementById("pagoTarjeta").hidden = false;
        this.btn = "Comprar";
      }
    },
    checkDomicilio() {
      if (
        document.getElementById("dom1").checked == true &&
        document.getElementById("dom2").checked == false
      ) {
        this.domicilio = true;
        if (
          document.getElementById("can1").checked == true &&
          document.getElementById("can2").checked == false
        ) {
          this.total = Number(this.producto.precio) + 3;
        } else if (
          document.getElementById("can1").checked == false &&
          document.getElementById("can2").checked == true
        ) {
          this.total = (Number(this.producto.precio) + 3) * 0.5;
        }
      } else if (
        document.getElementById("dom1").checked == false &&
        document.getElementById("dom2").checked == true
      ) {
        this.domicilio = false;
        if (
          document.getElementById("can1").checked == true &&
          document.getElementById("can2").checked == false
        ) {
          this.total = Number(this.producto.precio);
        } else if (
          document.getElementById("can1").checked == false &&
          document.getElementById("can2").checked == true
        ) {
          this.total = Number(this.producto.precio) * 0.5;
        }
      }
    },
  },
  mounted() {
    this.socket.on("notificacion", (item) => {
      if (item == "Compra Realizada!") {
        this.$swal.close();
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: item,
          showConfirmButton: false,
          timer: 2000,
        });
        location.href = "./#/market";
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
    this.socket.on("recibirProductos", (items) => {
      items.forEach((element) => {
        if (element._id == this.id) {
          this.producto = element;
        }
      });
      this.total = Number(this.producto.precio) + 3;
    });
    this.socket.on("usurioActivo", (items) => {
      this.usuario = items;
    });
    this.socket.on("Resultado", (items) => {
      if (items.status == "succeeded") {
        this.Enviar(items.id);
      } else {
        this.$swal.close();
        console.log(items.status);
      }
    });
  },
};
</script>

<style>
.boton {
  background-color: #ffffff00;
  border: 1px solid #d291bc;
  color: #d291bc;
}

.boton:hover {
  background-color: #d291bc;
  color: white;
}

#load {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>

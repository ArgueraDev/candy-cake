<template>
  <div v-if="Object.keys(productos).length != 0">
    <!-- Header-->
    <div class="position-relative">
      <img src="banner1.png" class="d-block w-100" alt="banner" />
      <a
        href="#/market"
        class="position-absolute top-100 start-50 translate-middle btn-more"
        >Ver Más</a
      >
    </div>

    <!--Productos-->
    <section class="pb-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="text-center">
          <h3 class="fst-italic">Ultimos Productos Agregados</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div class="col" v-for="item in productos" :key="item._id">
            <div
              class="card h-100 shadow"
              data-bs-toggle="modal"
              data-bs-target="#mostrador"
              v-on:click="mostrar(item)"
            >
              <img :src="item.imagen" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">{{ item.nombre }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- info-->
    <section class="container">
      <div class="w-100 my-5 px-3 py-5">
        <div class="row">
          <div class="col-md-6">
            <div class="text-center mt-3">
              <h1 class="fst-italic">Servicio a Domicilio</h1>
            </div>
            <div class="row py-5 align-middle">
              <div class="col-md-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </div>
              <div class="col-md-6 text-center">
                <p class="fs-5">
                  Puedes contar con nuestro servicio a domicilio si te
                  encuentras en la zona céntrica de Usulután y alrededores, si
                  quieres una entrega mucho más lejos tendrá un costo mayor.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center mt-3">
              <h1 class="fst-italic">Tipo de Pago</h1>
            </div>
            <div class="row p-5">
              <div class="col-md-6 text-center">
                <h3 class="fst-italic">Tarjeta</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-credit-card"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                  />
                  <path
                    d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                  />
                </svg>
              </div>
              <div class="col-md-6 text-center">
                <h3 class="fst-italic">Efectivo</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-cash-coin"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                  />
                  <path
                    d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
                  />
                  <path
                    d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
                  />
                  <path
                    d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
                  />
                </svg>
              </div>
              <div class="text-center mt-5">
                <p>
                  Para llevar a cabo tu pedido es necesario dar un porcentaje
                  del costo por adelantado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal fade"
      id="mostrador"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-header text-light"
            style="background-color: #d291bc"
          >
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ producto.nombre }}
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img :src="producto.imagen" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text" style="white-space: pre-wrap">
                {{ producto.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: "Inicio",
  data() {
    return {
      socket: {},
      productos: {},
      producto: "",
    };
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
    this.socket.emit("mostrarProductos");
  },
  mounted() {
    this.socket.on("recibirProductos", (items) => {
      this.productos = items.slice(0, 9);
    });
  },
  methods: {
    recibir() {
      this.socket.emit("mostrarDatos", this.valor);
    },
    mostrar(dato) {
      this.producto = dato;
    },
  },
};
</script>

<style>
.btn-more {
  font-size: 17px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: #fff;
  background-color: #d291bc;
}

.btn-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.btn-more:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-more::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-more::after {
  background-color: #d291bc;
}

.btn-more:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
</style>

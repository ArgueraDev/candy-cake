<template>
  <div v-if="Object.keys(productos).length != 0">
    <!-- Header-->
    <div class="bg-light">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/candy-cake-cfe93.appspot.com/o/portada1.png?alt=media&token=a676d978-e858-4b89-aa77-80c7b90b94ad"
              class="d-block w-100"
              alt="pastel"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style="background-color: #16161670"
            >
              <h3>Candy Cake</h3>
              <p>Acompañándote en Momentos únicos</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/candy-cake-cfe93.appspot.com/o/portada2.png?alt=media&token=fdd375ac-39d5-4950-994b-72f1ee6ef167"
              class="d-block w-100"
              alt="pastel"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style="background-color: #16161670"
            >
              <h3>Candy Cake</h3>
              <p>
                Celebra en grande sin miedo al éxito, atrévete a ser diferente
                conoce nuestros sabores y diseños.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/candy-cake-cfe93.appspot.com/o/portada3.png?alt=media&token=e0b7f2fa-6084-4051-8d37-ba620f0195f5"
              class="d-block w-100"
              alt="pastel"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style="background-color: #16161670"
            >
              <h3>Candy Cake</h3>
              <p>Acompañándote en Momentos únicos</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- info-->
    <section>
      <div
        class="w-100 my-5 shadow px-3 py-5"
        style="background-color: #d291bc"
      >
        <div class="row">
          <div class="col-md-6">
            <div class="text-center mt-3">
              <h1 class="fst-italic text-white">Servicio a Domicilio</h1>
            </div>
            <div class="row py-5 align-middle">
              <div class="col-md-6 text-white text-center">
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
                <p class="text-white fs-5">
                  Puedes contar con nuestro servicio a domicilio si te
                  encuentras en la zona céntrica de Usulután y alrededores, si
                  quieres una entrega mucho más lejos tendrá un costo mayor.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center mt-3">
              <h1 class="fst-italic text-white">Tipo de Pago</h1>
            </div>
            <div class="row p-5">
              <div class="col-md-6 text-center text-white text-center">
                <h3 class="fst-italic text-white">Tarjeta</h3>
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
              <div class="col-md-6 text-center text-white">
                <h3 class="fst-italic text-white">Efectivo</h3>
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
                <p class="text-white">
                  Para llevar a cabo tu pedido es necesario dar un porcentaje
                  del costo por adelantado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section-->
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
      this.productos = items.slice(0, 6);
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

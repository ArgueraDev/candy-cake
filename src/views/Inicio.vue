<template>
  <div class="container" v-if="Object.keys(productos).length != 0">
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
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
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
      this.productos = items;
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

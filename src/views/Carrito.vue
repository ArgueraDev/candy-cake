<template>
  <div id="carrito" class="container" v-if="Object.keys(productos).length != 0">
    <div class="text-center p-2 mb-3"><h1>Carrito</h1></div>
    <div class="card mb-3" v-for="item in productos" :key="item._id">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="item.imagen" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text" style="white-space: pre-wrap">
              {{ item.descripcion }}
            </p>
            <p class="card-text">
              <small class="text-muted">Estado: {{ item.estado }}</small>
              <br />
              <small class="text-muted"
                >Fecha de Entrega: {{ item.fentrega }}</small
              >
              <br />
              <small class="text-muted">Precio: ${{ item.precio }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="load" v-else>
    <div class="spinner-border" style="color: #d63384" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h3>No a realizado ninguna compra</h3>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "Carrito",
  data() {
    return {
      socket: {},
      productos: {},
    };
  },
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
    this.ValidarSesion();
    this.socket.emit("mostrarCompras");
  },
  mounted() {
    this.socket.on("recibirCompras", (items) => {
      let datos = [];
      items.forEach((element) => {
        if (element.idus == sessionStorage.getItem("CandySession")) {
          datos.push(element);
        }
      });

      this.productos = datos;
    });
  },
  methods: {
    ValidarSesion() {
      if (!sessionStorage.getItem("CandySession")) {
        location.href = "./#/";
      }
    },
  },
};
</script>
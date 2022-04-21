<template>
  <div id="market" class="container">
    <div class="row py-5">
      <div class="col-sm-3">
        <div class="card-body shadow" style="background-color: #d63384">
          <h5 class="card-title text-center text-light">
            Categorias de Productos
          </h5>
          <br />
          <ul class="list-group list-group-flush">
            <li
              class="btn list-group-item color"
              v-on:click="categoria('todo')"
            >
              Todos los Productos
            </li>
            <li
              class="btn list-group-item color"
              v-on:click="categoria('Chocolate')"
            >
              Chocolate
            </li>
            <li
              class="btn list-group-item color"
              v-on:click="categoria('Fresa')"
            >
              Fresas
            </li>
            <li
              class="btn list-group-item color"
              v-on:click="categoria('Imagen')"
            >
              Imagen Personalizada
            </li>
            <li
              class="btn list-group-item color"
              v-on:click="categoria('Semilla')"
            >
              Semillas
            </li>
            <li
              class="btn list-group-item color"
              v-on:click="categoria('Postre')"
            >
              Postres
            </li>
            <li class="btn list-group-item color">
              <a
                class="nav-link text-white"
                aria-current="page"
                href="#/personalizado"
                >Personalizar</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-9">
        <div
          class="row row-cols-1 row-cols-md-3 g-4 justify-content-center"
          v-if="Object.keys(productos).length != 0"
        >
          <div class="col" v-for="item in productos" :key="item._id">
            <div class="card h-100 shadow">
              <img :src="item.imagen" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">{{ item.nombre }}</h5>
                <p class="card-text">${{ item.precio }}</p>
                <a v-bind:href="'#/compra/' + item._id" class="btn boton"
                  >Comprar</a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="load" v-else>
          <div class="spinner-border" style="color: #d63384" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "market",
  data() {
    return {
      socket: {},
      productos: {},
      datos: {},
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
      this.datos = items;
      this.productos = items;
    });
  },
  methods: {
    recibir() {
      this.socket.emit("mostrarDatos", this.valor);
    },
    categoria(item) {
      this.productos = {};
      if (item != "todo") {
        var data = [];
        this.datos.forEach((element) => {
          if (element.categoria.includes(item)) {
            data.push(element);
          }
        });
        this.productos = data;
      } else {
        this.productos = this.datos;
      }
    },
  },
};
</script>

<style>
.color {
  background-color: #d63384;
  color: white;
}

.color:hover {
  background-color: #b83174;
  color: white;
}

.boton {
  background-color: #ffffff00;
  border: 1px solid #d63384;
  color: #d63384;
}

.boton:hover {
  background-color: #d63384;
  color: white;
}
</style>
<template>
  <div id="market" class="container">
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
      style="background-color: #d291bc"
    >
      <div class="offcanvas-header">
        <h5
          class="offcanvas-title"
          style="color: #fff"
          id="offcanvasWithBackdropLabel"
        >
          Categorias
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <!--menu0-->
        <button class="acordeon" type="button" v-on:click="categoria('todo')">
          Todos los Productos
        </button>
        <!--menu1-->
        <button class="acordeon" type="button" v-on:click="categoria('Pastel')">
          Pasteles
        </button>
        <div class="paneles">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item transp"
              role="button"
              v-on:click="categoria('Chocolate')"
            >
              Chocolate
            </li>
            <li
              class="list-group-item transp"
              role="button"
              v-on:click="categoria('Fresa')"
            >
              Fresa
            </li>
            <li
              class="list-group-item transp"
              role="button"
              v-on:click="categoria('Semilla')"
            >
              Semillas
            </li>
            <li
              class="list-group-item transp"
              role="button"
              v-on:click="categoria('Imagen')"
            >
              Imagen Personalizada
            </li>
          </ul>
        </div>
        <!--menu2-->
        <button class="acordeon" type="button" v-on:click="categoria('Postre')">
          Postres
        </button>
        <!--menu3-->
        <button
          hidden
          class="acordeon"
          type="button"
          v-on:click="personalizar()"
        >
          Personalizar
        </button>
      </div>
    </div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-2"
    >
      <button
        class="btn-menu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop"
      >
        <span class="icono">
          <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          </svg>
        </span>
        <span class="text">MENU</span>
      </button>
    </div>
    <div
      class="row row-cols-1 row-cols-md-3 g-4 pb-3 justify-content-center"
      v-if="Object.keys(productos).length != 0"
    >
      <div class="col" v-for="item in productos" :key="item._id">
        <div class="card h-100 shadow">
          <img :src="item.imagen" class="card-img-top" alt="..." />
          <div class="card-body text-center pb-5">
            <h5 class="card-title">{{ item.nombre }}</h5>
            <p class="card-text">${{ item.precio }}</p>
            <button class="botonc" v-on:click="comprar(item._id)">
              Comprar
            </button>
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
      searchProd: "",
    };
  },
  props: ["search"],
  created() {
    this.socket = io("https://shrouded-dawn-37164.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
    });
    this.socket.emit("mostrarProductos");
    this.verUrl();
  },
  mounted() {
    this.socket.on("recibirProductos", (items) => {
      this.datos = items;
      if (this.searchProd.length != 0) {
        this.buscadorProd();
      } else {
        this.productos = items;
      }
    });

    //acordeon
    let acc = document.getElementsByClassName("acordeon");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        if (this.nextElementSibling.className === "paneles") {
          this.classList.toggle("activado");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        }
      });
    }
  },
  methods: {
    recibir() {
      this.socket.emit("mostrarDatos", this.valor);
    },
    categoria(item) {
      this.productos = {};
      if (item != "todo") {
        var data = [];
        if (item != "Pastel") {
          this.datos.forEach((element) => {
            if (element.categoria.includes(item)) {
              data.push(element);
            }
          });
          this.productos = data;
        } else {
          this.datos.forEach((element) => {
            if (element.nombre.includes("Pastel")) {
              data.push(element);
            }
          });
          this.productos = data;
        }
      } else {
        this.productos = this.datos;
      }
    },
    comprar(id) {
      location.href = "./#/compra/" + id;
    },
    personalizar() {
      location.href = "./#/personalizado";
    },
    buscadorProd() {
      this.productos = {};
      let elementos = [];
      this.datos.forEach((element) => {
        if (
          element.nombre.toLowerCase().indexOf(this.searchProd.toLowerCase()) !=
            -1 ||
          element.descripcion
            .toLowerCase()
            .indexOf(this.searchProd.toLowerCase()) != -1
        ) {
          elementos.push(element);
        }
      });
      this.productos = elementos;
    },
    verUrl() {
      var url = window.location.hash;
      var resp = url.slice(url.lastIndexOf("/") + 1);
      if (resp != "market") {
        this.searchProd = resp;
      }
    },
  },
};
</script>

<style>
.color {
  color: white;
}

.color:hover {
  color: white;
}

/*btn compra*/
.botonc {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.295);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.botonc:hover {
  background-color: #d291bc;
  box-shadow: 0px 15px 20px #8a607c;
  color: #fff;
  transform: translateY(-7px);
}
.botonc:active {
  transform: translateY(-1px);
}

/*btn abrir menu*/
.btn-menu {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  background: #d291bc;
  color: #f5f5f5;
}

.btn-menu:hover {
  box-shadow: 0 0 20px 0px #2e2e2e3a;
}

.btn-menu .icono {
  position: absolute;
  height: 40px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}

.btn-menu .text {
  transform: translateX(55px);
}

.btn-menu:hover .icono {
  width: 175px;
}

.btn-menu:hover .text {
  transition: all 0.5s;
  opacity: 0;
}

.btn-menu:focus {
  outline: none;
}

.btn-menu:active .icono {
  transform: scale(0.85);
}

/* acordeon */
.acordeon {
  background-color: #d291bc;
  color: #fff;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.activado,
.acordeon:hover {
  background-color: #0808082d;
}

.paneles {
  padding: 0 18px;
  display: none;
  background-color: #d291bc;
  overflow: hidden;
}

.transp {
  background-color: rgba(0, 0, 0, 0.123);
  color: #fff;
}
</style>

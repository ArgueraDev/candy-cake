import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Inicio",
  component: () =>
    import("../views/Inicio.vue"),
}, {
  path: "/quienes-somos",
  name: "About",
  component: () =>
    import("../views/About.vue"),
}, {
  path: "/market",
  name: "Market",
  component: () =>
    import("../views/Tienda.vue"),
}, {
  path: "/market/:search",
  name: "Market",
  component: () =>
    import("../views/Tienda.vue"),
  props: true,
}, {
  path: "/compra/:id",
  name: "Compra",
  component: () =>
    import("../views/Venta.vue"),
  props: true,
}, {
  path: "/personalizado",
  name: "Personalizado",
  component: () =>
    import("../views/Personalizado.vue"),
}, {
  path: "/carrito",
  name: "Carrito",
  component: () =>
    import("../views/Carrito.vue"),
}, {
  path: "/preguntas",
  name: "Preguntas",
  component: () =>
    import("../views/Preguntas.vue"),
}, {
  path: "/contacto",
  name: "Contacto",
  component: () =>
    import("../views/Contacto.vue"),
},];

const router = new VueRouter({
  routes,
});

export default router;
<template>
  <main class="container">
    <div
      class="p-4 p-md-5 mb-4 text-white row"
      style="background-color: #d291bc"
    >
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic texto">¿Como Nace Candy Cake?</h1>
        <p class="lead my-3 texto">
          En el año 2021 se abren las ventas al público de pasteles, esto tras
          recibir un taller de pastelería el cual se llevó a cabo en el año 2020
          este fue dado en el mes de noviembre y parte de diciembre es ahí donde
          nace la idea de emprender con el rubro de pastelería y actualmente nos
          encontramos realizando pedidos en líneas y a domicilio.
        </p>
      </div>
      <div class="col-md-6">
        <img
          src="candy-cake-logo.svg"
          class="rounded mx-auto d-block altura"
          alt="logo"
        />
      </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div
        class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
        style="background-color: #d291bc"
      >
        <div class="my-3 py-3">
          <h2 class="display-5 texto">Misión</h2>
        </div>
        <div
          class="bg-white shadow-sm mx-auto text-dark"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
        >
          <p class="lead py-5 mx-3">
            Somos una empresa enfocada en el área de pasteles, brindando a todos
            nuestros clientes un producto de calidad enfocados en complacer el
            paladar e ideas de niños, jóvenes y adultos.
          </p>
        </div>
      </div>
      <div
        class="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">Visión</h2>
        </div>
        <div
          class="shadow-sm mx-auto text-white"
          style="
            width: 80%;
            height: 300px;
            border-radius: 21px 21px 0 0;
            background-color: #d291bc;
          "
        >
          <p class="lead py-5 mx-3 texto">
            Ser una empresa líder en el área de pastelería en la zona oriental
            del El Salvador, destacándonos por ofrecer calidad y sabor en cada
            uno de nuestros productos.
          </p>
        </div>
      </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div
        class="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">Principios</h2>
        </div>
        <div
          class="shadow-sm mx-auto h-100 text-white"
          style="
            width: 80%;
            border-radius: 21px 21px 0 0;
            background-color: #d291bc;
          "
        >
          <p class="lead py-5 mx-3 texto">
            Trasmitimos la visión de ser lideres en los sectores de repostería
            que trabajamos Unimos nuestras fuerzas coordinadas hacia el logro de
            los objetivos. Hacemos nuestras tareas en armonía, comprometidos y
            valorando el aporte y esfuerzo de cada miembro de Candy Cake, con lo
            cual somos mutuamente responsables por los resultados.
          </p>
        </div>
      </div>
      <div
        class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
        style="background-color: #d291bc"
      >
        <div class="my-3 py-3">
          <h2 class="display-5 texto">Valores</h2>
        </div>
        <div
          class="bg-white shadow-sm mx-auto h-100 text-dark"
          style="width: 80%; border-radius: 21px 21px 0 0"
        >
          <p class="lead py-5 mx-3">
            • Compromiso <br />
            • Diciplina <br />
            • Responsabilidad<br />
            • Respeto <br />
            • Trasparencia
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.texto {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.274), 0 0 1em rgba(34, 34, 34, 0.342),
    0 0 0.2em rgba(34, 34, 34, 0.342);
}

.altura {
  max-height: 300px;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}

.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}
</style>

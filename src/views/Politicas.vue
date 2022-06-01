<template>
  <div id="Preguntas" class="container">
    <div class="banner-contenedor">
      <img src="banner2.jpg" class="card-img d-block w-100" alt="..." />
      <div class="texto-centrado-banner">
        <h1 class="card-title text-white">Términos y Condiciones</h1>
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordion2">
      <div class="accordion-item">
        <h2 class="accordion-header" id="politica1">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pol1"
            aria-expanded="true"
            aria-controls="pol1"
          >
            <h5><strong>Política de entrega de pedido.</strong></h5>
          </button>
        </h2>
        <div
          id="pol1"
          class="accordion-collapse collapse show"
          aria-labelledby="politica1"
          data-bs-parent="#accordion2"
        >
          <div class="accordion-body">
            • Los pedidos se entregarán a la persona indicada en el tiempo
            señalado por la empresa Candy Cake.
            <br />
            • Un pedido se considera entregado, una vez que el cliente ha pagado
            y tomado el producto.
            <br />
            • Los pedidos deben entregarse en el período de tiempo señalado por
            la empresa Candy Cake.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="politica2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pol2"
            aria-expanded="false"
            aria-controls="pol2"
          >
            <h5>
              <strong>Política de cancelación.</strong>
            </h5>
          </button>
        </h2>
        <div
          id="pol2"
          class="accordion-collapse collapse"
          aria-labelledby="politica2"
          data-bs-parent="#accordion2"
        >
          <div class="accordion-body">
            • El plazo máximo para cancelar un pedido es de 24 horas antes de la
            fecha de entrega.
            <br />
            • La cancelación del producto solo se realizará por medio de
            WhatsApp al número +503 6983 3379.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner-contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}

.texto-centrado-banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 3px #000;
}
</style>

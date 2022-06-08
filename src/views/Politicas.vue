<template>
  <div id="Preguntas" class="container">
    <div class="card border-0">
      <img src="baner.jpg" class="card-img" alt="..." />
      <div class="card-img-overlay bg-img-banner">
        <div class="texto-banner">
          <div class="texto-b">
            <h1 class="fst-italic">Políticas, Términos y Condiciones</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion accordion-flush" id="accordion2">
      <div class="accordion-item">
        <h2 class="accordion-header" id="politica0">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pol0"
            aria-expanded="true"
            aria-controls="pol0"
          >
            <h5><strong>Términos y Condiciones.</strong></h5>
          </button>
        </h2>
        <div
          id="pol0"
          class="accordion-collapse collapse show"
          aria-labelledby="politica0"
          data-bs-parent="#accordion2"
        >
          <div class="accordion-body">
            <p>
              Esta página web es propiedad y está operado por Candy Cake. Estos
              Términos establecen las condiciones bajo los cuales tú puedes usar
              nuestra Web y los servicios ofrecidos por nosotros. Esta web
              ofrece un catálogo y un Marketplace para la compra de nuestros
              productos. Al acceder o usar la web de nuestro servicio, usted
              aprueba que haya leído, entendido y aceptado estar sujeto a estos
              Términos
            </p>
            <p>
              • El Servicio y todos los materiales incluidos o transferidos,
              incluyendo, sin limitación, imágenes, texto, logotipos, patentes,
              derechos de autor, fotografías y todos los Derechos de Propiedad
              Intelectual relacionados con ellos, son la propiedad exclusiva de
              Candy Cake. Salvo que se indique explícitamente en este documento.
            </p>
            <p>
              • Si acepta los términos está comprometido a mantener el orden y
              el debido respeto.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="politica1">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pol1"
            aria-expanded="false"
            aria-controls="pol1"
          >
            <h5><strong>Política de entrega de pedido.</strong></h5>
          </button>
        </h2>
        <div
          id="pol1"
          class="accordion-collapse collapse"
          aria-labelledby="politica1"
          data-bs-parent="#accordion2"
        >
          <div class="accordion-body">
            <p>
              • Los pedidos se entregarán a la persona indicada en el tiempo
              señalado por la empresa Candy Cake.
            </p>
            <p>
              • Un pedido se considera entregado, una vez que el cliente ha
              pagado y tomado el producto.
            </p>
            <p>
              • Los pedidos deben entregarse en el período de tiempo señalado
              por la empresa Candy Cake.
            </p>
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
            <p>
              • El plazo máximo para cancelar un pedido es de 24 horas antes de
              la fecha de entrega.
            </p>
            <p>
              • La cancelación del producto solo se realizará por medio de
              WhatsApp al número +503 6983 3379.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.texto-banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.texto-b {
  color: white;
  text-shadow: 0 0 5px #000;
}

.bg-img-banner {
  background-color: #d291bcb0;
}
</style>

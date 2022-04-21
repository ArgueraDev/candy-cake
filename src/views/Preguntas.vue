<template>
  <div id="Preguntas" class="container" v-if="!true">
    <div class="row my-3">
      <div class="col-md-7">
        <h3>Preguntas Frecuentes</h3>
      </div>
      <div class="col-md-5">
        <div class="card shadow m-3 text-center">
          <h5>Realizar Consulta</h5>
        </div>
      </div>
    </div>
  </div>
  <div id="load" v-else>
    <div class="spinner-border" style="color: #d63384" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h3>Fuera de servicio</h3>
  </div>
</template>
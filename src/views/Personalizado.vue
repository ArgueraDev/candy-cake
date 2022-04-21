<template>
  <div id="personalizado" class="row">
    <div class="col-md-7">
      <model-viewer
        id="viewer"
        class="mx-auto h-100"
        camera-controls
        alt="A 3D model of a sphere"
        src="pastel.glb"
      ></model-viewer>
    </div>
    <div class="col-md-5">
      <div class="card shadow my-3 mx-3 p-3">
        <div class="mb-3 text-center">
          <p class="fs-2 fw-bold">Personalizar Pastel</p>
        </div>
        <div class="mb-3">
          <label for="pisos" class="form-label fw-bold">Pisos:</label>
          <select
            class="form-select"
            id="pisos"
            aria-label="Default select example"
          >
            <option selected value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="size" class="form-label fw-bold">Tamaño:</label>
          <select
            class="form-select"
            id="size"
            aria-label="Default select example"
          >
            <option selected value="1">12 a 15 porciones</option>
            <option value="2">15 a 20 porciones</option>
            <option value="3">20 a 25 porciones</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="sabor" class="form-label fw-bold">Sabor:</label>
          <select
            class="form-select"
            id="sabor"
            aria-label="Default select example"
          >
            <option selected value="1">Vainilla</option>
            <option value="2">Chocolate</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="relleno" class="form-label fw-bold">Relleno:</label>
          <select
            class="form-select"
            id="relleno"
            aria-label="Default select example"
          >
            <option selected value="1">Crema Pastelera</option>
            <option value="2">Chocolate</option>
            <option value="3">Fruta</option>
            <option value="4">Semillas</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="cobertura" class="form-label fw-bold">Cobertura:</label>
          <select
            class="form-select"
            id="cobertura"
            aria-label="Default select example"
          >
            <option selected value="1">Crema Pastelera</option>
            <option value="2">Chocolate</option>
            <option value="3">Frutas</option>
            <option value="4">Semillas</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="otros" class="form-label fw-bold">Otros:</label>
          <textarea
            class="form-control"
            placeholder="Otros"
            id="otros"
          ></textarea>
        </div>
        <div class="mb-3 mx-5 d-grid gap-2">
          <button class="btn boton btn-lg" id="btnnext">
            Realizar Pedido <i class="bi bi-cart-check-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import("@google/model-viewer");
export default {};
</script>

<style>
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
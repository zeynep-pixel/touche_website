<template>
  <div class="row justify-content-center">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-image-container">
            <img src="https://toucheprive.com/cdn/shop/files/23F1XD83_103_23F_01_01_e307566e-9422-4094-af70-92ccee3d9153_720x.jpg?v=1732872843" class="d-block w-100" alt="...">
            <div class="size-box">
              <p>S   M   L</p>
            </div>
          </div>
          <div class="product-info">
            <p style="font-family: Open Sans Condensed, sans-serif; font-size: 13px; font-weight: 700; padding-top: 10px;">DİK YAKA BASİC TRİKO KAZAK</p>
            <p style="font-family: Open Sans Condensed, sans-serif; font-size: 13px; font-weight: 700;">1.299 TL</p>
          </div>
        </div>
        
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#carouselExampleInterval {
  width: 300px;
  position: relative;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.carousel-image-container {
  position: relative;
}

.size-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 10px;
  display: none;
}

.carousel-item:hover .size-box {
  display: block;
}

.size-box p {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 13px;
  font-weight: 700;
  margin: 0;
}

.product-info {
  text-align: left;
  padding: 10px 0;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease, visibility 0.3s;
  opacity: 0;
  border-radius: 8%;
  visibility: hidden;
}

.carousel:hover .carousel-control-prev,
.carousel:hover .carousel-control-next {
  opacity: 1;
  visibility: visible;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: none;
  color: white;
  width: 20px;
  height: 20px;
  background-color: transparent;
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  color: white;
}
</style>

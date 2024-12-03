<template>
    <div class="container product-detail">
      <div class="row">
      
        <div class="col-12">
          <h6 class="text-uppercase">ÇOK SATANLAR</h6>
          <h2 class="product-title">DİK YAKA BASIC TRİKO KAZAK</h2>
          <h3 class="product-price">1.299 TL</h3>
          <p class="product-description">
            Dik yaka. Düşük omuz. Uzun kol. Elastik manşet. Yandan yırtmaçlı. Yumuşak dokulu.
          </p>
          <p class="product-discount"><span class="text-danger">SEPETTE 909 TL</span></p>
          
        </div>
      </div>
  
      <div class="row align-items-center">
      
        <div class="col-6">
          <p><strong>Bordo</strong> | 23F1XD83</p>
          <div class="color-options">
            <span class="color-circle bg-bordo"></span>
            <span class="color-circle bg-black"></span>
            <span class="color-circle bg-beige"></span>
          </div>
        </div>
        <div class="col-6 text-end">
          <a href="#" class="size-table-link">ÖLÇÜ TABLOSU</a>
        </div>
      </div>
  
      <div class="row">
       
        <div class="col-12 size-options">
          <button class="btn btn-outline-dark">S</button>
          <button class="btn btn-outline-dark">M</button>
          <button class="btn btn-outline-dark">L</button>
        </div>
      </div>
  
      <div class="row mt-3">
        
        <div class="col-12">
          <p class="installment-info">
            <i class="bi bi-credit-card"></i> VADE FARKSIZ PEŞİN FİYATINA 3 TAKSİT FIRSATI!!
          </p>
        </div>
      </div>
  
      <div class="row mt-4">
       
        <div class="col-12">
          <button class="btn btn-dark w-100">SEPETE EKLE</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .product-detail {
    margin-top: 20px;
    width: 500px;
  }
  
  .product-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .product-price {
    font-size: 22px;
    font-weight: bold;
    color: black;
  }
  
  .product-discount {
    font-size: 16px;
    margin-top: -5px;
  }
  
  .product-description {
    font-size: 14px;
    color: black;
    font-weight: bold;
  }
  
  .color-options {
    display: flex;
    gap: 10px;
  }
  
  .color-circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .bg-bordo {
    background-color: #800020;
  }
  
  .bg-black {
    background-color: black;
  }
  
  .bg-beige {
    background-color: #f5f5dc;
  }
  
  .size-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  
  .size-options .btn {
    width: 50px;
  }
  
  .size-table-link {
    font-size: 12px;
    color: #555;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .installment-info {
    font-size: 13px;
    color: #555;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  </style>
  
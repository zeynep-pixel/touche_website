<template>
    <div class="accordion-container">
      <div class="accordion">
        <!-- Tahmini Teslimat -->
        <div class="accordion-item">
          <div class="accordion-header">
           
              <span class="accordion-title">Tahmini Teslimat: 06 Aralık - 09 Aralık</span>
             
          </div>
          
        </div>
  
        <!-- Ürün Açıklaması -->
        <div class="accordion-item">
          <div class="accordion-header">
            <button
              class="accordion-toggle"
              type="button"
              @click="toggleSection('description')"
            >
              <span class="accordion-title">Ürün Açıklaması</span>
              <i :class="openSection === 'description' ? 'bi bi-dash' : 'bi bi-plus'"></i>
            </button>
          </div>
          <div
            v-show="openSection === 'description'"
            class="accordion-body"
          >
            <ul>
              <li>Model Boyu: 177 cm</li>
              <li>Model Bedeni: S</li>
              <li>
                Kumaş İçeriği:
                <ul>
                  <li>%100 Akrilik</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Teslimat -->
        <div class="accordion-item">
          <div class="accordion-header">
            <button
              class="accordion-toggle"
              type="button"
              @click="toggleSection('shipping')"
            >
              <span class="accordion-title">Teslimat</span>
              <i :class="openSection === 'shipping' ? 'bi bi-dash' : 'bi bi-plus'"></i>
            </button>
          </div>
          <div
            v-show="openSection === 'shipping'"
            class="accordion-body"
          >
          2000₺ ve üzeri siparişlerde kargo ücretsizdir. 2000₺ altındaki siparişlerde 75₺ kargo ücreti toplam sipariş tutarına eklenir.
             <br>
             <div>
            <br>
          </div>
Tüm siparişleri 1-3 iş günü içinde kargoya teslim ediyoruz. Kargonun teslim süresi kargo firmasına ve adrese bağlı olarak değişiklik gösterebilir.
             <br>
             <div>
            <br>
          </div>
Kampanya ve indirim dönemlerinde siparişin kargoya verilme süreci uzayabileceği için teslimat süresi de buna bağlı olarak değişebilmektedir. 
          </div>
        </div>
  
        <!-- İade -->
        <div class="accordion-item">
          <div class="accordion-header">
            <button
              class="accordion-toggle"
              type="button"
              @click="toggleSection('return')"
            >
              <span class="accordion-title">İade</span>
              <i :class="openSection === 'return' ? 'bi bi-dash' : 'bi bi-plus'"></i>
            </button>
          </div>
          <div
            v-show="openSection === 'return'"
            class="accordion-body"
          >
          Satın aldığın ürünleri evinde deneyip, memnun kalmazsan 30 gün içerisinde iade edebilirsin.
Ürünlerin ambalajı bozulmamış, kullanılmamış, etiketi koparılmamış ve hijyenik özelliğini kaybetmemiş olmasına dikkat etmelisin. 
          <br>
          <div>
            <br>
          </div>
Satın aldığın ürünleri iade etmek için <a href="#">İade Formu’nu </a>eksiksiz doldurmalısın.
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const openSection = ref(null);
  
  const toggleSection = (section) => {
    openSection.value = openSection.value === section ? null : section;
  };
  </script>
  
  <style scoped>
  /* Sayfanın ortasında yerleşim */
  .accordion-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Sayfa yüksekliği boyunca ortalama */
  }
  
  /* Accordion genişlik ayarı */
  .accordion {
    width: 500px;
    font-family: Arial, sans-serif;
  }
  
  /* Her bir item */
  .accordion-item {
    border: none;
    margin: 0;
    padding: 0;
  }
  
  /* Header */
  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
  }
  
  .accordion-toggle {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    padding: 0;
  }
  
  .accordion-title {
    flex: 1; 
    padding: 10px 0;
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    font-weight: bold;/* Başlık sola hizalanır */
  }
  
  .accordion-toggle i {
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  .accordion-toggle:hover {
    color: #555;
  }
  .accordion-body-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease; /* Geçiş süresi ve yumuşatma */
}

.accordion-body-wrapper.open {
  max-height: 200px; /* Açıldığında maksimum yükseklik */
}

  
  /* Body */
  .accordion-body {
    padding: 10px 0;
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }
  
  .accordion-body ul {
    margin: 0;
    padding-left: 15px;
  }
  
  .accordion-body a {
    color: #007bff;
    text-decoration: none;
  }
  
  .accordion-body a:hover {
    text-decoration: underline;
  }
  </style>
  
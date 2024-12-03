<template>
    <div class="page-container">
      <div class="filter-container">
        <!-- Filtreleme başlığı -->
        <button
          class="btn filter-button w-100 mb-3 d-flex justify-content-between align-items-center"
          @click="toggleFilter"
        >
          <span class="material-symbols-outlined">
tune
</span>
          <span :class="isFilterOpen ? 'rotate-icon' : ''">
            <i class="bi" :class="isFilterOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </span>
        </button>
  
        <div v-show="isFilterOpen" class="p-3">
          <!-- Ürün Türü -->
          <div>
            <h5 @click="toggleSection('urunTuru')" class="filter-title">
              Ürün Türü
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </h5>
            <div v-show="isUrunTuruOpen" class="grid-layout">
              <div v-for="tur in urunTurleri" :key="tur" class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :id="tur"
                  v-model="selectedUrunTurleri"
                  :value="tur"
                />
                <label class="form-check-label" :for="tur">{{ tur }}</label>
              </div>
            </div>
          </div>
  
          <hr />
  
          <!-- Beden -->
          <div>
            <h5 @click="toggleSection('beden')" class="filter-title">
              Beden
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </h5>
            <div v-show="isBedenOpen" class="grid-layout">
              <div v-for="beden in bedenler" :key="beden" class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :id="beden"
                  v-model="selectedBedenler"
                  :value="beden"
                />
                <label class="form-check-label" :for="beden">{{ beden }}</label>
              </div>
            </div>
          </div>
  
          <hr />
  
          <!-- Renk -->
          <div>
            <h5 @click="toggleSection('renk')" class="filter-title">
              Renk
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </h5>
            <div v-show="isRenkOpen" class="grid-layout">
              <div v-for="renk in renkler" :key="renk.name" class="form-check d-flex align-items-center" >
                <button type="button" class="btn" style="border: 1px solid #ddd;">  <label class="form-check-label d-flex align-items-center" :for="renk.name">
                  <span
                    class="d-inline-block me-2"
                    :style="{ backgroundColor: renk.hex, width: '20px', height: '20px', borderRadius: '50%' }"
                  ></span>
                  {{ renk.name }}
                </label></button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFilterOpen: true,
        isUrunTuruOpen: true,
        isBedenOpen: true,
        isRenkOpen: true,
  
        urunTurleri: ["Bluz", "Elbise", "Gömlek", "İçlik", "Mont", "Takım", "Ceket", "Etek", "Hırka", "Kazak", "Pantolon", "Tunik"],
        selectedUrunTurleri: [],
  
        bedenler: ["XS", "S", "M", "L", "XL", "XXL", "Standart"],
        selectedBedenler: [],
  
        renkler: [
          { name: "Bej", hex: "#f5f5dc" },
          { name: "Yeşil", hex: "#90EE90" },
          { name: "Bordo", hex: "#800020" },
         
        ],
        selectedRenkler: [],
      };
    },
    methods: {
      toggleFilter() {
        this.isFilterOpen = !this.isFilterOpen;
      },
      toggleSection(section) {
        if (section === "urunTuru") this.isUrunTuruOpen = !this.isUrunTuruOpen;
        if (section === "beden") this.isBedenOpen = !this.isBedenOpen;
        if (section === "renk") this.isRenkOpen = !this.isRenkOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Sayfa kapsayıcısı: Hem dikey hem yatay ortalama */
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
  
  /* Filtreleme alanı */
  .filter-container {
    width: 200px;
    text-align: center;
  }
  
  /* Filtre butonu stili */
  .filter-button {
    background-color: white;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 8px 12px;
  }
  
  /* Hover işlemi etkisiz */
  .filter-button:hover {
    background-color: white;
    box-shadow: none;
  }
  
  /* İkon animasyonu */
  .rotate-icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
  
  /* Çizgiler */
  hr {
    margin: 0.5rem 0;
    border: none;
    border-top: 1px solid #ddd;
  }
  
  /* Başlıklar */
  .filter-title {
    cursor: pointer;
    font-size: 18px;
    color: black;
   
  }
  
  /* Grid düzeni */
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
  </style>
  
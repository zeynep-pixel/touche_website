<template>
    <div class="store-list-container">
      <h2 class="text-center mb-4 " style="padding-bottom: 50px; padding-top: 30px; font-size: 25px; font-weight: bold;">MAĞAZALARIMIZ</h2>
      <ul class="list-unstyled">
        
        <li v-for="store in stores" :key="store.id" class="store-item mb-4">
          <div class="row">
            <i class="bi bi-geo-alt-fill me-3" style="font-size: 1.5rem; color: #000;"></i>
            <div >
               <div class="column"> <span class="material-symbols-outlined">location_on</span></div>
             <div class="column"><h5 class="mb-1 fw-bold">{{ store.name }}</h5>
              <p class="mb-1">{{ store.address }}</p>
              <p class="mb-0">{{ store.phone }}</p></div>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
<script setup>
const stores = [
  {
    id: 1,
    name: "TOUCHÉ ZEYTİNBURNU",
    address: "Kazlıçeşme Asım Kazancıgil Cd. NO:38 (ZERUJ PORT AVM) Zeytinburnu/İstanbul",
    phone: "0212 558 4458",
  },
  {
    id: 2,
    name: "TOUCHÉ ADANA",
    address: "Mafesığmaz Mahallesi Turgut Özal Bulvarı 79154 Sokak No:2 Genç Osman Apt. Çukurova/Adana",
    phone: "0501 140 48 68",
  },
  {
    id: 3,
    name: "TOUCHÉ ATLASPARK AVM",
    address: "Abdurrahmangazi, Fatih Blv. No:67, 34920 Sultanbeyli/İstanbul",
    phone: "0216 398 78 88",
  },
  {
    id: 4,
    name: "TOUCHÉ ARMONİ PARK AVM",
    address: "Tevfik Bey Mah. Halkalı Cd. No:12 D:45a, 1. Kat Küçükçekmece/İstanbul",
    phone: "0212 558 4458",
  },
];
</script>
<style scoped>
.store-list-container {
   
  max-width: 700px;
  margin: 0 auto;
}

.store-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
  
}

.store-item:last-child {
  border-bottom: none;
}


</style>
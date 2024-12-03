<template>
  <div class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      @click="handleCardClick(card.link)"
    >
      <img :src="card.imgSrc" alt="Card Image" class="card-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { imgSrc: "https://toucheprive.com/cdn/shop/files/onlinesub_triko_cyber_900x.png?v=1733211762", link: "https://toucheprive.com/cdn/shop/files/onlinesub_triko_cyber_900x.png?v=1733211762" },
        { imgSrc: "https://toucheprive.com/cdn/shop/files/onlinesub_disgiyim_cyber_900x.png?v=1733211761", link: "https://example.com/2" },
        { imgSrc: "https://toucheprive.com/cdn/shop/files/onlinesub_sweat_cyber_900x.png?v=1733211762", link: "https://example.com/3" },
        { imgSrc: "https://toucheprive.com/cdn/shop/files/onlinesub_takim_cyber_900x.png?v=1733211761", link: "https://example.com/4" },
      ],
    };
  },
  methods: {
    handleCardClick(link) {
      window.open(link, "_blank"); // Yeni sekmede linki aç
    },
  },
};
</script>

<style scoped>
/* Kart kapsayıcısı */
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 sütun düzeni */
  gap: 30px; /* Kartlar arası mesafe */
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px; /* Maksimum genişlik */
  margin: 0 auto; /* Ortalamak için */
}

/* Kart stili */
.card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 0; /* Sivri köşeler için */
}

/* Kart içindeki img */
.card-image {
  width: 100%;
  height: auto;
  border-radius: 0; /* Sivri köşeler için */
}
</style>

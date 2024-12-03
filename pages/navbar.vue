<template>
  <div class="page-container">
    <nav class="navbar">
  
      <div class="navbar-left">
   
        <button class="icon-button">
          <span class="material-icons" >menu</span>
        </button>
   
        <button class="text-icon-button">
          <span class="material-icons">search</span>
          <span><div>Ara</div></span>
        </button>
      </div>
      

      <div class="navbar-center">
        <img src="//toucheprive.com/cdn/shop/files/520x200_logo_260x.png?v=1674131476" alt="Logo" class="logo" />
      </div>
     

      <div class="navbar-right">
        
        <button class="icon-button">
          <span  style="  font-family: Open Sans Condensed, sans-serif;
    font-weight: 700;
    font-style: bold;
    font-size: 13px;"><div>Hesap</div></span>
        </button>
 
        <button class="icon-button">
          <span  style=" padding-right: 5px; font-family: Open Sans Condensed, sans-serif;
    font-weight: 700;
    font-style: bold;
    font-size: 13px;">Sepet</span>
          <span class="material-symbols-outlined">
shopping_bag
</span>
        </button>
    
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>

body{
  font-family: Open Sans Condensed, sans-serif;
    font-weight: 700;
    font-style: bold;
    
}

/* Arkaplan */
.page-container {
  background-color: #f5f5f5; /* Kirli beyaz */
  height: 100vh; /* Tüm ekran yüksekliği */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Navbar üstte olacak */
}

/* Navbar */
.navbar {
  background-color: #ffffff; /* Beyaz renk */
  width: 100%; /* Tam genişlik */
  height: 90px; /* Navbar yüksekliği */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Yatay boşluk */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  position: fixed; /* Sayfa boyunca sabit */
  top: 0;
}

/* Sol Butonlar */
.navbar-left {
  padding-left: 30px;
  display: flex;
  align-items: center;
  gap: 3px; /* Butonlar arasında boşluk */

}

.icon-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 24px; /* İkon boyutunu artırdık */
}

/* Material Icons özelleştirme */
.material-icons {
  font-variation-settings: 

  'FILL' 0,
  'wght' 100,
  'GRAD' -25,
  'opsz' 24

}

/* Text + Icon Butonları */
.text-icon-button {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-family: Open Sans Condensed, sans-serif;
    font-weight: 700;
    font-style: bold;
    font-size: 10px;
}
.navbar-center {
  flex-grow: 1; /* Ortada boşluk bırakmak için */
  display: flex;
  justify-content: center;
}

.logo {
  height: 50px; /* Logo boyutunu ayarladık */
  object-fit: contain;
}

/* Sağ Butonlar */
.navbar-right {
  padding-right: 30px;
  display: flex;
  align-items: center;
  gap: 3px;

}
</style>

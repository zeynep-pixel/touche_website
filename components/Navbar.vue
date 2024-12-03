<template>
    <nav class="navbar">
      <div class="navbar-left">
        <button class="icon-button">
          <span class="material-icons">menu</span>
        </button>
        <button class="text-icon-button">
          <span class="material-icons">search</span>
          <span><div>Ara</div></span>
        </button>
      </div>
  
      <div class="navbar-center">
        <img
          src="//toucheprive.com/cdn/shop/files/520x200_logo_260x.png?v=1674131476"
          alt="Logo"
          class="logo"
        />
      </div>
  
      <div class="navbar-right">
        <button class="icon-button">
          <span
            style="
              font-family: Open Sans Condensed, sans-serif;
              font-weight: 700;
              font-style: bold;
              font-size: 13px;
            "
          >
            <div>Hesap</div>
          </span>
        </button>
  
        <button class="icon-button">
          <span
            style="
              padding-right: 5px;
              font-family: Open Sans Condensed, sans-serif;
              font-weight: 700;
              font-style: bold;
              font-size: 13px;
            "
          >
            Sepet
          </span>
          <span class="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Navbar stilleri aynı şekilde kalacak */
  .navbar {
    background-color: #ffffff;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
  }
  
  .navbar-left {
    padding-left: 30px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  
  .icon-button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    font-size: 24px;
  }
  
  .material-icons {
    font-variation-settings: 'FILL' 0, 'wght' 100, 'GRAD' -25, 'opsz' 24;
  }
  
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
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  
  .logo {
    height: 50px;
    object-fit: contain;
  }
  
  .navbar-right {
    padding-right: 30px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  </style>
  
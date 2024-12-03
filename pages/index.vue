<template>
  <div class="sidebar">
    <button @click="navigateToNavbarbutton1" class="sidebar-button">
      Navbar
    </button>
    <button @click="navigateToNavbarbutton2" class="sidebar-button">
      Card1
    </button>
    <button @click="navigateToNavbarbutton3" class="sidebar-button">
      Card2
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToNavbarbutton1 = () => {
  router.push('/navbar');
};

const navigateToNavbarbutton2 = () => {
  router.push('/card1');
};

const navigateToNavbarbutton3 = () => {
  router.push('/card2');
};


</script>

<style scoped>
.sidebar {
  width: 100px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-button {
  width: 80px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}

.sidebar-button:hover {
  background-color: #0056b3;
}
</style>

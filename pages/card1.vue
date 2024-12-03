<template>
    <div>
      <Nuxt /> <!-- Renders the current page component -->
      <Card1 /> <!-- Renders the Card1 component -->
    </div>
  </template>
  
  <script setup>
  // If you're using Nuxt 3, you can import components like this
  import Card1 from '~/components/Card1.vue';
  </script>
  
  <style scoped>
  /* Custom styles for your layout */
  </style>
  
  
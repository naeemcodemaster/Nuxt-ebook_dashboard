<!-- components/Navbar.vue -->
<template>
  <div class="flex justify-between items-center">
    <h1 class="text-xl font-bold">Ebook Library Dashboard</h1>
    <div>
      <button @click="$emit('toggle-sidebar')" class="bg-gray-800 text-white p-2 rounded md:hidden">
        <span v-if="!isSidebarVisible">☰</span> <!-- Hamburger icon -->
        <span v-else>✖</span> <!-- Close icon -->
      </button>
      <button class="bg-gray-800 text-white p-2 rounded hidden md:block">Profile</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['isSidebarVisible']);
</script>

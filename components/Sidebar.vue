<!-- components/Sidebar.vue -->
<template>
  <nav class="flex flex-col h-full p-4 space-y-4">
    <NuxtLink @click="$emit('toggle-sidebar')" to="/dashboard" class="hover:bg-gray-700 hover:text-white p-2 rounded">Dashboard</NuxtLink>
    <NuxtLink @click="$emit('toggle-sidebar')" to="/dashboard/books" class="hover:bg-gray-700 hover:text-white p-2 rounded">Books</NuxtLink>
    <!-- Add other links as needed -->
  </nav>
</template>

<script setup>
// No props needed for now, just a simple sidebar.
</script>

<style scoped>
/* No need for additional styles that hide the sidebar */
</style>

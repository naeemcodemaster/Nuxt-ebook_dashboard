<template>
  <div class="flex justify-between items-center">
    <h1 class="text-xl font-bold">Ebook Library Dashboard</h1>
    <div>
      <button @click="$emit('toggle-sidebar')" class="bg-gray-800 text-white p-2 rounded md:hidden">
        <span v-if="!isSidebarVisible">☰</span> <!-- Hamburger icon -->
        <span v-else>✖</span> <!-- Close icon -->
      </button>
      <button @click="logout" class="bg-gray-800 text-white p-2 rounded hidden md:block">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Import useRouter for navigation
import { ref } from 'vue'; // Import ref for reactive variables

const props = defineProps(['isSidebarVisible']);
const router = useRouter(); // Get the router instance

// Logout method to clear token and replace URL with login page
const logout = async () => {
  localStorage.removeItem('token'); // Remove the token from localStorage
  console.log("Logging out...");

  // Use router.replace to change the current URL
  await router.replace('/'); // Redirect to the login page without adding to history
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>

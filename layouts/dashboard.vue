<template>
  <div class="flex h-screen bg-slate-100">
    <!-- Sidebar for mobile -->
    <Sidebar 
      v-if="isSidebarVisible" @toggle-sidebar="toggleSidebar"
      class="bg-white text-black fixed w-64 h-full transition-transform duration-300 ease-in-out transform"
      :class="isSidebarVisible ? 'translate-x-0' : '-translate-x-full'"
    />

    <!-- Sidebar for desktop -->
    <div class="hidden md:block">
      <Sidebar class="bg-white text-black fixed w-64 h-full" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col md:pl-64"> <!-- Padding for sidebar -->
      <!-- Navbar -->
      <Navbar :isSidebarVisible="isSidebarVisible" @toggle-sidebar="toggleSidebar" class="bg-white text-black p-4" />

      <!-- Page Content -->
      <main class="p-6 flex-1 overflow-y-auto">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';

const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

// Watch for sidebar visibility changes to close it when it is open
watch(isSidebarVisible, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden'); // Prevent body scrolling
    console.log("overflow if")
  } else {
    document.body.classList.remove('overflow-hidden'); // Allow body scrolling
    console.log("overflow else")
  }
});
</script>

<style scoped>
/* Additional mobile styles */
.md\\:hidden {
  display: none; /* Ensure hidden on mobile */
}
</style>

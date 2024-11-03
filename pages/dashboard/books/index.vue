<template>
  <div class="p-0">
    <h2 class="text-2xl font-bold mb-4">Elib Books</h2>

    <!-- Loader -->
    <div v-if="loading" class="flex justify-center items-center h-32">
      <div class="loader"></div>
    </div>

    <!-- Scrollable Book Table -->
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 border">Cover</th>
            <th class="px-4 py-2 border">Title</th>
            <th class="px-4 py-2 border">Author</th>
            <th class="hidden md:table-cell px-4 py-2 border">Genre</th>
            <th class="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book._id" class="hover:bg-gray-100">
            <td class="px-4 py-2 border">
              <img :src="book.coverImage" alt="Book Cover" class="w-16 h-24 object-cover">
            </td>
            <td class="px-4 py-2 border">{{ book.title }}</td>
            <td class="px-4 py-2 border">{{ book.author.name }}</td>
            <td class="hidden md:table-cell px-4 py-2 border">{{ book.genre }}</td>
            <td class="px-4 py-2 border">
              <button @click="editBook(book._id)" class="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button @click="deleteBook(book._id)" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
  ssr: false
})

import { ref } from 'vue';
import { useFetch } from '#app'; // Use Nuxt 3 built-in fetch

const books = ref([]);
const loading = ref(true); // Loading state

// Fetch data with useFetch
// Fetch data with useFetch and enable ISR
const { data, error } = await useFetch('https://node-type-scriptebook.vercel.app/api/books', {
  // This can be a static function in your pages folder to fetch data
  initialCache: true, // Cache data on the first request
  staleTime: 5 * 60 * 1000, 
});

// Handle the loading state
if (error.value) {
  console.error('Error fetching books:', error.value);
  loading.value = false; // Set loading to false even if there's an error
} else {
  books.value = data.value.books;
  loading.value = false; // Set loading to false after fetching data
}

// Methods to handle edit and delete actions
const editBook = (id) => {
  console.log('Editing book with id:', id);
};

const deleteBook = (id) => {
  console.log('Deleting book with id:', id);
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* Custom styles for scrollable table */
.overflow-x-auto {
  overflow-x: auto;
  /* Enable horizontal scrolling */
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
const message = ref("");
const isSubmitted = ref(false);

const handleSubmit = () => {
  if (name.value.trim() && message.value.trim()) {
    // Simulate sending the wish (replace with actual API call if needed)
    console.log("Wish sent:", { name: name.value, message: message.value });
    isSubmitted.value = true;

    // Clear input fields after submission
    name.value = "";
    message.value = "";
  } else {
    alert("Please fill in both fields before sending your wish.");
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center px-8">
    <div v-if="!isSubmitted" class="bg-white/30 shadow-md rounded-lg p-6 max-w-md w-full">
      <h1 class="text-xl font-bold text-center mb-4">Kirim Ucapan dan Doa</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block font-bold mb-2">Nama</label>
          <input id="name" v-model="name" type="text" class="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950" placeholder="Masukkan nama anda di sini" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block font-bold mb-2">Ucapan</label>
          <textarea id="message" v-model="message" rows="5" class="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950" placeholder="Tulis ucapan dan doa anda di sini  " required></textarea>
        </div>
        <button type="submit" class="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors">Kirim Ucapan</button>
      </form>
    </div>
    <div v-else class="text-center">
      <h2 class="text-2xl font-bold text-gray-50">Terima Kasih!</h2>
      <p class="text-gray-500 mt-2">Ucapan dan Doa anda sudah terkirim.</p>
      <button @click="isSubmitted = false" class="mt-4 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Kirim Ucapan Lain</button>
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles if necessary */
</style>

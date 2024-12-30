<script setup lang="ts">
import { defineProps } from "vue";

const event = defineProps({
  name: String,
  eventDate: {
    type: Object,
    required: true,
    default: () => ({
      day: "",
      date: "",
    }),
  },
  time: String,
  location: String,
  mapsLink: String,
});
</script>

<template>
  <div class="card bg-white/30 backdrop-blur-sm shadow-lg p-3 rounded-lg my-3">
    <div class="poppins-regular flex flex-col">
      <h1 class="text-black text-xl font-bold">{{ event.name }}</h1>
      <div class="flex gap-5 my-3 justify-center">
        <div>
          <p class="text-sm font-light">{{ event.eventDate.day }},</p>
          <p class="font-medium">{{ event.eventDate.date }}</p>
        </div>
        <div class="h-12 w-px bg-gray-300/20"></div>
        <p class="self-center">{{ event.time }}</p>
      </div>
      <p class="text-sm font-light">📍{{ event.location }}</p>
      <a class="inline-block mt-3 px-2 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-opacity-75" :href="event.mapsLink" target="_blank">Lihat Lokasi</a>
    </div>
  </div>
</template>

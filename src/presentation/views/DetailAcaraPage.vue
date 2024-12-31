<script setup lang="ts">
import Event from "../../components/Event.vue";
import { akad } from "../../data/static/Akad";
import { resepsi } from "../../data/static/Resepsi";
</script>

<template>
  <div class="min-h-screen poppins-regular flex flex-col justify-center content-center px-8">
    <div class="mb-3">
      <p class="text-sm">Our Special</p>
      <p class="font-bold text-2xl">Wedding Event</p>
    </div>
    <div class="flex flex-col">
      <Event v-bind="akad" />
      <Event v-bind="resepsi" />
    </div>
    <div class="bg-white/30 self-center rounded-lg shadow-lg my-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.9077478472746!2d110.83501213482167!3d-7.566838915088077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16f590715991%3A0x58b7c397e9ce48f1!2sGedung%20PMS%20(Perkumpulan%20Masyarakat%20Surakarta)!5e0!3m2!1sen!2sid!4v1735659224508!5m2!1sen!2sid"
        height="256"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="p-4"
      ></iframe>
    </div>
  </div>
</template>

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
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1632856874567!2d110.80641937460867!3d-7.557168274623466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a169d6e8d8ed5%3A0x52601de5e80d2188!2sWomen&#39;s%20Building%20Sasana%20Krida%20Kusuma!5e0!3m2!1sen!2sid!4v1732709695199!5m2!1sen!2sid"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="self-center rounded-lg shadow-lg my-3"
    ></iframe>
  </div>
</template>

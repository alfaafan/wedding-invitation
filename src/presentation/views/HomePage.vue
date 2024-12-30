<script lang="ts" setup>
import { computed, ref } from "vue";
import { WeddingDetails } from "../../core/domain/models/weddingDetails";
import { weddingDetails as weddingDetailsData } from "../../data/static/weddingDetails";
import { useRoute } from "vue-router";

const weddingDetails = ref<WeddingDetails>(weddingDetailsData);

const route = useRoute();

const guestName = computed(() => route.query.guest?.toString().trim() || "Guest");
</script>

<template>
  <div class="h-svh d-flex flex-col justify-center content-center px-8">
    <div class="pacifico-regular mb-5">
      <h6 class="text-lg">The Wedding of</h6>
      <h1 class="text-5xl my-3 mb-5">{{ weddingDetails.coupleNamesShort }}</h1>
      <p>{{ weddingDetails.date }}</p>
    </div>
    <div class="card bg-white/30 backdrop-blur-sm shadow-lg p-3 rounded-lg poppins-regular">
      <p class="text-black text-xs">Kepada Yth: Bapak/Ibu/Saudara/i</p>
      <h3 class="text-black text-xl font-bold poppins-bold my-2">{{ guestName }}</h3>
      <p class="text-black text-xs">*) Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
    </div>
    <button @click="$emit('scroll-to-target')" class="btn btn-primary mt-5 bg-white/30 backdrop-blur-sm shadow-lg text-gray-300 text-sm">Buka Undangan</button>
  </div>
</template>

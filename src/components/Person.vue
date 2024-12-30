<script setup lang="ts">
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  fatherName: String,
  motherName: String,
  address: String,
  gender: String,
});

const genderGreet = computed(() => {
  if (props.gender === "Male") return "Putra";
  if (props.gender == "Female") return "Putri";
});
</script>

<template>
  <div class="poppins-medium">
    <h1 class="pacifico-regular mb-5 leading-relaxed text-4xl">{{ props.name }}</h1>
    <p class="font-light text-sm">{{ genderGreet }} dari Bapak {{ props.fatherName }} dan Ibu {{ props.motherName }}</p>
  </div>
</template>

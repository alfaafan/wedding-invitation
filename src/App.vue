<script setup lang="ts">
import HomePage from "./presentation/views/HomePage.vue";
import InfoPage from "./presentation/views/InfoPage.vue";

function scrollToTarget() {
  const targetElement = document.getElementById("info");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <HomePage @scroll-to-target="scrollToTarget" />
  <InfoPage id="info" />
</template>

<style scoped></style>

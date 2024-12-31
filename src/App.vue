<script setup lang="ts">
import DetailAcaraPage from "./presentation/views/DetailAcaraPage.vue";
import HomePage from "./presentation/views/HomePage.vue";
import InfoPage from "./presentation/views/InfoPage.vue";
import Footer from "./presentation/components/Footer.vue";
import LoveStoryPage from "./presentation/views/LoveStoryPage.vue";
import UcapanPage from "./presentation/views/UcapanPage.vue";
import { ref } from "vue";

const audioSrc = "/audio/audio.mp3"; // Path to the MP3 file
const bgAudio = ref<HTMLAudioElement | null>(null);

const isPlaying = ref(false);
const isScrollLocked = ref(true);

// Play or pause the audio
const toggleAudio = () => {
  if (bgAudio.value) {
    if (isPlaying.value) {
      bgAudio.value.pause();
    } else {
      bgAudio.value.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
    isPlaying.value = !isPlaying.value;
  }
};

function scrollToTarget() {
  isScrollLocked.value = false;
  // make the hidden class of the details div to visible
  const details = document.getElementById("details");
  if (!isScrollLocked.value && details) {
    details.classList.remove("hidden");
  }
  const targetElement = document.getElementById("info");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  // Play the audio
  if (bgAudio.value && !isPlaying.value) {
    bgAudio.value.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
    isPlaying.value = true;
  }
}
</script>

<template>
  <div class="min-h-svh d-flex flex-col content-center" id="home">
    <!-- <audio ref="bgAudio" :src="audioSrc" preload="auto" loop></audio> -->
    <button @click="toggleAudio" class="fixed top-4 right-4 bg-transparent text-black rounded-full shadow-md p-3">
      <span v-if="isPlaying">⏸</span>
      <span v-else>▶️</span>
    </button>
    <HomePage @scroll-to-target="scrollToTarget" />
    <div class="hidden" id="details">
      <InfoPage id="info" />
      <LoveStoryPage />
      <DetailAcaraPage />
      <UcapanPage />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Initial scroll lock on body */
#home {
  overflow: hidden; /* Lock scroll initially */
}
</style>

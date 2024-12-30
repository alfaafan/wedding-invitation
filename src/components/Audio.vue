<template>
  <div class="wedding-invitation">
    <audio ref="bgAudio" :src="audioSrc" preload="auto" loop></audio>
    <button @click="toggleAudio">
      {{ isPlaying ? "Pause Music" : "Play Music" }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const audioSrc = "/audio/audio.mp3"; // Path to the MP3 file
    const isPlaying = ref(true); // Tracks whether the audio is playing
    const bgAudio = ref(null); // Ref to the audio element

    // Toggle play/pause
    const toggleAudio = () => {
      if (bgAudio.value) {
        if (bgAudio.value.paused) {
          bgAudio.value.play();
          isPlaying.value = true;
        } else {
          bgAudio.value.pause();
          isPlaying.value = false;
        }
      }
    };

    // Automatically play audio when the component is mounted
    onMounted(() => {
      if (bgAudio.value) {
        bgAudio.value.play().catch(() => {
          // Handle autoplay block (e.g., show play button if needed)
          isPlaying.value = false;
        });
      }
    });

    return {
      audioSrc,
      isPlaying,
      bgAudio,
      toggleAudio,
    };
  },
};
</script>

<style>
.wedding-invitation {
  text-align: center;
  padding: 20px;
  font-family: "Arial, sans-serif";
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffb6c1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}
button:hover {
  background-color: #ff69b4;
}
</style>

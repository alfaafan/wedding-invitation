<script lang="ts" setup>
import Person from "../../components/Person.vue";
import { bride } from "../../data/static/Bride";
import { groom } from "../../data/static/Groom";
</script>

<template>
  <div class="poppins-regular d-flex flex-col justify-center content-center px-8 my-48">
    <p class="mb-1 text-lg">Salam Sejahtera</p>
    <p class="text-xs poppins-light mb-10">Dengan segala kerendahan hati dan rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam hari bahagia kami:</p>
    <Person v-bind="bride" />
    <hr class="border-t border-gray-100 opacity-5 my-5" />
    <Person v-bind="groom" />
  </div>
</template>

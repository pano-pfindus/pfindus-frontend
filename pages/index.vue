<template>
  <div class="flex bg-primaryLight">
    <div class="bg-primaryLight text-white p-8 self-center">
      <h1 class="text-2xl lg:text-3xl font-semibold">
        Pfindus? - Ja, Pfadi verbindet uns!
      </h1>
      <h2 class="text-xl mt-2">Aber was macht Pfindus?</h2>
      <p class="">
        Pfindus bietet eine Plattform, aufwelcher sich Abteilung finden können,
        um gemeinsamen Lager zu gestalten. Egal auf welcher Stufe, egal wo.
        Beginne indem du dein Lager ausschreibst oder entdecke andere
        Ausschreibungen! Wir wünschen dir Viel Spass!
      </p>
    </div>
    <div class="hidden md:block">
      <img src="~/assets/img/zeltplatz.jpg" class="grow" alt="" srcset="" />
    </div>
  </div>

  <div class="m-8">
    <h1 class="text-3xl text-title font-semibold mb-4">Lagerausschreibungen</h1>
    <hr class="text-primaryLight mt-2" />
    <CampOverview v-for="camp in camps" :key="camp.id" :camp="camp" />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

let camps = ref();

try {
  const response = await axios.get(`http://192.168.1.122:8080/camp`);
  camps.value = response.data;
} catch (error) {
  console.error(error);
}
</script>

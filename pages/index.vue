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

  <!-- Lager -->
  <div class="m-8">
    <h1 class="text-3xl text-title font-semibold mb-4">Lagerausschreibungen</h1>
    <hr class="text-primaryLight mt-2 mx-4" />
    <div v-for="camp in camps" :key="camp.id" class="m-4">
      <NuxtLink :to="`/camp/${camp.id}`">
        <h1 class="text-2xl text-title font-semibold">{{ camp?.groupName }}</h1>
        <span class="flex">
          <Icon name="mdi:home-outline" class="size-6" color="black" />

          <span class="ml-2 self-center font-bold"
            >{{ camp?.groupCanton }}, {{ camp?.groupPlace }}</span
          >
        </span>
        <span class="flex">
          <Icon name="mdi:stairs" class="size-6" color="black" />
          <span class="ml-2 self-center font-bold">{{
            camp?.groupLevel.join(", ")
          }}</span>
        </span>
        <span class="flex">
          <Icon name="mdi:calendar-clock" class="size-6" color="black" />
          <span class="ml-2 self-center font-bold">
            {{ new Date(camp?.earliestPossibleDate).toLocaleDateString() }} -
            {{ new Date(camp?.lastPossibleDate).toLocaleDateString() }}</span
          >
        </span>
      </NuxtLink>
      <hr class="text-primaryLight mt-2" />
    </div>
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

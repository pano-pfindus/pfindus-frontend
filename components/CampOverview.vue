<template>
  <NuxtLink :to="`/camp/${camp?.id}`">
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
</template>

<script lang="ts" setup>
defineProps({
  camp: Object,
});
</script>

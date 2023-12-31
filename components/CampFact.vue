<template>
  <span class="flex">
    {{ props.name }}:
    <span class="ml-2 self-center font-bold"
      >{{ fact || "Ladet..." }}
      <span v-if="props.additional">- {{ props.additional }}</span>
      {{ props.suffix }}
    </span>
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  fact: {
    type: null,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  additional: {
    type: null,
    required: false,
  },
  suffix: {
    type: String,
    required: false,
  },
});
let fact = props.fact;

if (typeof props.fact === "object") {
  fact = fact.join(", ");
}
</script>

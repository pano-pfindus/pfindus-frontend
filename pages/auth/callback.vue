<template>
  <div>
    <h1>PFINDUS</h1>
    <p>Was machsch du scho da?</p>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

import { useRoute } from "vue-router";

const route = useRoute();

// Make a POST request
axios
  .post("http://192.168.1.122:8080/login", {
    code: route.query.code,
  })
  .then((response) => {
    // Handle response
  })
  .catch((error) => {
    // Handle error
  });
</script>

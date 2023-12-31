<template>
  <div>
    <h1>PFINDUS</h1>
    <p>Was machsch du scho da?</p>
  </div>
</template>

<script lang="ts" setup>
// file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useAuth();

await signOut(); // Sign in the user
</script>

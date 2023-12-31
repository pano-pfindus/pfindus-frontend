<template>
  <div>
    <h1>PFINDUS</h1>
    <p>Was machsch du scho da?</p>
  </div>
</template>

<script lang="ts" setup>
// file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useAuth();

status.value; // Session status: `unauthenticated`, `loading`, `authenticated`
data.value; // Session data, e.g., expiration, user.email, ...

await signIn("GitHub"); // Sign in the user
</script>

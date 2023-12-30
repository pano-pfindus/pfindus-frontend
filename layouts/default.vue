<template>
  <div>
    <header class="bg-primaryDark text-white p-2">
      <nav class="flex justify-between">
        <NuxtLink class="m-2 flex gap-4 align-middle">
          <img class="w-10 rounded-lg" src="~/assets/img/logo.jpg" alt="" />
          <h1 class="text-white text-2xl font-bold">Pfindus</h1>
        </NuxtLink>
        <NuxtLink class="m-2"> Anmelden </NuxtLink>
        <!-- Switch between SignIn Button and "Hello, Username!" -->
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="h-screen">
      <!-- Your footer content here -->
    </footer>
  </div>
</template>

<script lang="ts"></script>

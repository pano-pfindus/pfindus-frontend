<template>
  <div>
    <header class="bg-primaryDark text-white">
      <nav>
        <NuxtLink class="m-2">
          <img class="" src="" alt="" />
          <h1 class="text-white">Pfindus</h1>
        </NuxtLink>
        <NuxtLink> Anmelden </NuxtLink>
        <!-- Switch between SignIn Button and "Hello, Username!" -->
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <!-- Your footer content here -->
    </footer>
  </div>
</template>

<script lang="ts"></script>

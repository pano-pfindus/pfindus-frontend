<template>
  <Nuxt keep-alive :keep-alive-props="{ exclude: ['camp/find/[id].vue'] }" />
  <div>
    <header class="bg-primaryDark text-white p-2 drop-shadow-lg">
      <nav class="flex justify-between">
        <NuxtLink class="m-2 flex gap-4" to="/">
          <img class="w-16 rounded-lg" src="~/assets/img/logo.jpg" alt="" />
          <h1 class="text-white text-4xl font-bold self-center">Pfindus</h1>
        </NuxtLink>
        <NuxtLink
          to="/camp"
          class="m-2 text-lg self-center hover:font-semibold cursor-pointer"
        >
          Meine Lager
        </NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-primaryLight text-white">
      <img src="~/assets/img/footer.jpg" alt="" />
      <div class="p-8">
        <img
          src="~/assets/img/panologo.png"
          class="w-32 h-32 float-right"
          alt=""
        />
        <h1 class="text-xl font-semibold mb-4">Wie ist Pfindus entstanden?</h1>
        <p class="text-sm">
          Im Rahmen eines Pano-Projektes im Winterpano 23 der Pfadi Züri haben
          <span class="font-bold"> Sprudel, Hulk, Kizzi und Tijo </span> ein
          Tool entwickelt, um die Suche von anderen Pfadiabteilungen für ein
          gemeinsames Lager zu vereinfachen. Im Moment wird vor allem über
          Vitamin B eine andere Abteilung gesucht. Dies kann entweder zu
          repetitiven oder, je nach Verbundenheit der Pfadiabteilung, zu einem
          fehlenden Lagerpartner führen (was evtl. zu fehlenden Anerkennungen
          führt).
          <br />
          Gerne wollen wir mit diesem Tool eine Möglichkeit geben diese
          Repetition oder fehlende Anerkennungen zu überbrücken. Somit entstehen
          neue soziale Kontakte mit mehr Abteilungen und man macht gemeinsam
          unvergessliche Erinnerungen.
        </p>
        <p class="h-12"></p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts"></script>

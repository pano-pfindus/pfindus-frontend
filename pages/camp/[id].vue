<template>
  <div class="m-8">
    <NuxtLink class="text-sm cursor-pointer" to="/"> &lt; Zurück </NuxtLink>
    <h1 class="text-3xl text-title mb-6">
      Erlebnissausschreibung der
      <span class="font-bold">{{ camp?.groupName || "Ladet..." }}</span>
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <span class="">
        <h2 class="text-xl text-title">Über uns</h2>
        <span class="flex">
          Einzugsgebiet:
          <span class="ml-2 self-center font-bold">{{
            camp?.groupPlace || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Kantonalverband:
          <span class="ml-2 self-center font-bold">{{
            camp?.groupCanton || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Stufe(n):
          <span class="ml-2 self-center font-bold">{{
            camp?.groupLevel.join(", ") || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Aktive Mitglieder:
          <span class="ml-2 self-center font-bold">
            zwischen {{ camp?.minParticipantsInGroup || "Ladet..." }} -
            {{ camp?.maxParticipantsInGroup }}</span
          >
        </span>
      </span>

      <span class="">
        <h2 class="text-xl text-title">Lagerinfos</h2>
        <span>
          Zeitfenster des Lagers:
          <span class="ml-2 self-center font-bold"
            >{{
              new Date(camp?.earliestPossibleDate).toLocaleDateString() ||
              "Ladet..."
            }}
            - {{ new Date(camp?.lastPossibleDate).toLocaleDateString() }}</span
          >
        </span>
        <span class="flex">
          Dauer des Lagers:
          <span class="ml-2 self-center font-bold"
            >{{ camp?.durationInDays || "Ladet..." }} Tage</span
          >
        </span>
        <span class="flex">
          Lagerart:
          <span class="ml-2 self-center font-bold"
            >{{ camp?.campType || "Ladet..." }}
          </span>
        </span>
        <span class="flex">
          Maximale Teilnehmerzahl:
          <span class="ml-2 self-center font-bold">{{
            camp?.maxParticipantsInCamp || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Bereits organisiert:
          <span class="ml-2 self-center font-bold">
            {{ camp?.organised.join(", ") || "Ladet..." }}</span
          >
        </span>
      </span>

      <span class="">
        <h2 class="text-xl text-title">Ressourcen</h2>
        <span>
          Aktive Leitende:
          <span class="ml-2 self-center font-bold"
            >{{ camp?.minLeadersInGroup || "Ladet..." }} -
            {{ camp?.maxLeadersInGroup }}</span
          >
        </span>
        <span class="flex">
          Maximale Anzahl Leitende im Lager:
          <span class="ml-2 self-center font-bold">{{
            camp?.maxLeadersInCamp || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Leitende mit Basis Kindersport:
          <span class="ml-2 self-center font-bold"
            >{{ camp?.leaderBasisKids || "Ladet..." }}
          </span>
        </span>
        <span class="flex">
          Leitende mit Basis Jugendsport:
          <span class="ml-2 self-center font-bold">{{
            camp?.leaderBasisTeens || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Aufbau vorhanden:
          <span class="ml-2 self-center font-bold">{{
            camp?.aufbauExisting ? "Ja" : "Nein" || "Ladet..."
          }}</span>
        </span>
        <span class="flex">
          Weitere Qualifikationen:
          <span class="ml-2 self-center font-bold">
            {{ camp?.additionalQualifications || "Ladet..." }}</span
          >
        </span>
      </span>

      <span>
        <h2 class="text-xl text-title">Weitere Informationen</h2>
        <span class="flex">
          {{ camp?.additionalInfo || "Ladet..." }}
        </span>
      </span>
    </div>
    <p class="text-center text-title text-lg mt-8">
      Interessiert? Dann kontaktiere uns unter: <br />
      <span class="font-bold">{{
        camp?.contactEmail || "test(ät)example.com"
      }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
let camp = ref();

async function fetchData() {
  try {
    const response = await axios.get(
      `http://192.168.1.122:8080/camp/${route.params.id}`
    );
    camp.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
</script>

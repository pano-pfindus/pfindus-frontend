<template>
  <div class="m-8">
    <NuxtLink class="text-sm cursor-pointer" href="/"> &lt; Zurück </NuxtLink>
    <h1 class="text-3xl text-title mb-6">
      Erlebnissausschreibung der
      <span class="font-bold">{{ camp?.groupName || "Ladet..." }}</span>
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <span class="">
        <h2 class="text-xl text-title">Über uns</h2>
        <CampFact name="Einzugsgebiet" :fact="camp?.groupPlace" />
        <CampFact name="Kantonalverband" :fact="camp?.groupCanton" />
        <CampFact name="Stufe(n)" :fact="camp?.groupLevel" />
        <CampFact
          name="Aktive Mitglieder"
          :fact="camp?.minParticipantsInGroup"
          :additional="camp?.maxParticipantsInGroup"
        />
      </span>

      <span class="">
        <h2 class="text-xl text-title">Lagerinfos</h2>
        <CampFact
          name="Zeitfenster des Lagers"
          :fact="new Date(camp?.earliestPossibleDate).toLocaleDateString()"
          :additional="new Date(camp?.lastPossibleDate).toLocaleDateString()"
        />
        <CampFact
          name="Dauer des Lagers"
          :fact="camp?.durationInDays"
          suffix="Tage"
        />
        <CampFact name="Lagerart" :fact="camp?.campType" />
        <CampFact
          name="Maximale Teilenmendenanzahl"
          :fact="camp?.maxParticipantsInCamp"
        />
        <CampFact name="Bereits organisiert" :fact="camp?.organised" />
      </span>

      <span class="">
        <h2 class="text-xl text-title">Ressourcen</h2>
        <CampFact
          name="Aktive Leitende"
          :fact="camp?.minLeadersInGroup"
          :additional="camp?.maxLeadersInGroup"
        />
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
import { useRoute } from "vue-router";

const route = useRoute();

const { data, pending, error, refresh } = await useAsyncData("camp", () =>
  $fetch(`http://192.168.1.122:8080/camp/${route.params.id}`)
);

const camp: any = ref(data.value);
</script>

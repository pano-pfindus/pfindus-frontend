<template>
  <div class="flex justify-center mt-2">
    <div class="mt-4 w-3/4">
      <h1 class="text-title my-4 text-3xl font-bold">Lager erstellen</h1>
      <v-form>
        <v-stepper :items="['Abteilung', 'Rahmen', 'Ressourcen']">
          <template v-slot:item.1>
            <h1 class="text-lg text-center mt-6">Erzählt etwas über euch!</h1>
            <v-text-field
              v-model="groupName"
              label="Abteilung"
              class="my-4"
              required
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="groupPlace"
              label="Einzugsgebiet"
              class="my-4"
              required
              hide-details
            ></v-text-field>
            <v-select
              label="Kantonalverband"
              v-model="groupCanton"
              class="my-4"
              :items="['Pfadi Züri', 'Pfadi Kanton Bern']"
            ></v-select>
          </template>

          <template v-slot:item.2>
            <h1 class="text-lg text-center mt-6">
              In welchem Rahmen findet das Lager statt?
            </h1>

            <v-select
              label="Lagerart"
              v-model="campType"
              class="my-4"
              :items="['Hauslager', 'Zeltlager', 'Beides', 'Egal']"
            ></v-select>
            <v-text-field
              v-model="earliestPossibleDate"
              label="frühster Lagerbeginn"
              type="date"
              class="mt-4"
              required
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="lastPossibleDate"
              label="spätester Lagerschluss"
              type="date"
              class="mb-4 mt-2"
              required
              hide-details
            ></v-text-field>

            <v-slider
              v-model="durationInDays"
              max="21"
              class="mt-4"
              step="1"
              thumb-label="always"
              label="Lagerdauer in Tagen"
              track-color="#8C3C4F"
              color="#8C3C4F"
            ></v-slider>
            <v-select
              clearable
              chips
              label="Stufe(n)"
              :items="['Wolfsstufe', 'Pfadistufe', 'Piostufe', 'Roverstufe']"
              multiple
              v-model="groupLevel"
            ></v-select>
            <v-range-slider
              v-model="ParticipantsInGroup"
              step="1"
              thumb-label="always"
              label="Anzahl Teilnehmende in eurer Gruppe"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-range-slider>
            <v-slider
              v-model="MaxParticipantsInCamp"
              step="1"
              thumb-label="always"
              label="max TNs im Lager"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-slider>
          </template>

          <template v-slot:item.3>
            <h1 class="text-lg text-center mt-6">
              Welche Ressourcen bringt iht mit?
            </h1>
            <v-range-slider
              v-model="LeadersInGroup"
              step="1"
              max="50"
              thumb-label="always"
              label="Anzahl Leitende in eurer Gruppe"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-range-slider>
            <v-slider
              v-model="MaxLeadersInCamp"
              step="1"
              max="50"
              thumb-label="always"
              label="max Leitende im Lager"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-slider>
            <v-slider
              v-model="LeaderBasisKids"
              step="1"
              max="20"
              thumb-label="always"
              label="Leitende mit J+S Kindersport"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-slider>
            <v-slider
              v-model="LeaderBasisTeens"
              step="1"
              max="20"
              thumb-label="always"
              label="Leitende mit J+S Jugendsport"
              track-color="#8C3C4F"
              color="#8C3C4F"
              class="mt-4"
            ></v-slider>
            <v-text-field
              v-model="additionalQualifications"
              label="Zusatzausbildungen"
              class="mb-4 mt-2"
              required
              hide-details
            ></v-text-field>
<v-select
              clearable
              chips
              label="Was wurde bereits organisiert?"
              :items="['Lagerhaus', 'Zeltplatz', 'Küchenteam']"
              multiple
              v-model="organised"
            ></v-select>

          </template>
        </v-stepper>
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
let groupName = ref("");
let groupPlace = ref("");
let groupCanton = ref();
let campType = ref();
let earliestPossibleDate = ref();
let lastPossibleDate = ref();
let durationInDays = ref();
let groupLevel = ref();
let ParticipantsInGroup = ref();
let MaxParticipantsInCamp = ref();
let LeadersInGroup = ref();
let MaxLeadersInCamp = ref();
let LeaderBasisKids = ref();
let LeaderBasisTeens = ref();
let additionalQualifications = ref("");
let organised = ref("");
</script>

<style scoped></style>

<template>
  <div class="flex justify-center mt-2">
    <div class="mt-4 w-3/4 mb-4">
      <h1 class="text-title my-4 text-3xl font-bold">Lager bearbeiten</h1>
      <v-form @submit.prevent="submit">
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
              :items="[
                'Pfadi Aargau',
                'Pfadi Region Basel',
                'Pfadi Kanton Bern',
                'Scouts Freiburg / Pfadi Freiburg',
                'Scouts Genève',
                'Pfadi Glarus',
                'Association du scoutisme jurassien / Pfadi Jura',
                'Pfadi Luzern',
                'Scoutisme Neuchatelois / Pfadi Neuenburg',
                'Pfadi St. Gallen-Appenzell',
                'Pfadi Kantornalverband Schaffausen',
                'Pfadi Schwyz',
                'Pfadi Kanton Solothurn',
                'Scoutismo Ticino / Pfadi Tessin',
                'Pfadi Thurgau',
                'Pfadi Uri',
                'Pfadi Undärwalden (Ob-und Nidwalden)',
                'Association du scoutisme valaisan / Verband Pfadi Wallis',
                'Association du scoutisme vaudois / Pfadi Waadt',
                'Pfadi Kanton Zug',
                'Pfadi Züri',
                'Battasendas / Pfadi Graubünden',
              ]"
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
            <v-text-field
              v-model="additionalInfo"
              label="Weiteres"
              class="mb-4 mt-2"
              required
              hide-details
            ></v-text-field>
            <v-btn type="submit" block class="mt-2" color="success"
              >Abenteuer aktualisieren!</v-btn
            >
          </template>
        </v-stepper>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const { data, pending, error, refresh } = await useAsyncData("camp", () =>
  $fetch(`http://192.168.1.122:8080/camp/${route.params.id}`)
);

const groupName = ref(data.value.groupName);
const groupPlace = ref(data.value.groupPlace);
const groupCanton = ref(data.value.groupCanton);
const campType = ref(data.value.campType);
const earliestPossibleDate = ref(
  new Date(data.value.earliestPossibleDate).toISOString().split("T")[0]
);
const lastPossibleDate = ref(
  new Date(data.value.lastPossibleDate).toISOString().split("T")[0]
);
const durationInDays = ref(data.value.durationInDays);
const groupLevel = ref(data.value.groupLevel);
const ParticipantsInGroup = ref(data.value.ParticipantsInGroup);
const MaxParticipantsInCamp = ref(data.value.MaxParticipantsInCamp);
const LeadersInGroup = ref(data.value.LeadersInGroup);
const MaxLeadersInCamp = ref(data.value.MaxLeadersInCamp);
const LeaderBasisKids = ref(data.value.LeaderBasisKids);
const LeaderBasisTeens = ref(data.value.LeaderBasisTeens);
const additionalQualifications = ref(data.value.additionalQualifications);
const organised = ref(data.value.organised);
const additionalInfo = ref(data.value.additionalInfo);

function submit() {
  const dataNew = {
    groupName: groupName.value,
    groupPlace: groupPlace.value,
    groupCanton: groupCanton.value,
    campType: campType.value,
    earliestPossibleDate: earliestPossibleDate.value,
    lastPossibleDate: lastPossibleDate.value,
    durationInDays: durationInDays.value,
    groupLevel: groupLevel.value,
    minParticipantsInGroup: ParticipantsInGroup.value[0],
    maxParticipantsInGroup: ParticipantsInGroup.value[1],
    maxParticipantsInCamp: MaxParticipantsInCamp.value,
    minLeadersInGroup: LeadersInGroup.value[0],
    maxLeadersInGroup: LeadersInGroup.value[1],
    maxLeadersInCamp: MaxLeadersInCamp.value,
    leaderBasisKids: LeaderBasisKids.value,
    leaderBasisTeens: LeaderBasisTeens.value,
    additionalQualifications: additionalQualifications.value,
    organised: organised.value,
    additionalInfo: additionalInfo.value,
  };

  axios
    .put(`http://192.168.1.122:8080/camp/${route.params.id}`, dataNew)
    .then((response) => {
      return navigateTo(`/camp/${route.params.id}`);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
}
</script>

<style scoped></style>

<template>
  <v-card>
    <v-card-title class="justify-center text-center">
      <span>Game Form</span>
    </v-card-title>
    <v-card-text>
      <v-form class="d-flex flex-column justify-center align-center">
        <v-text-field
          v-model="sizeX"
          @blur="v$.sizeX.$touch()"
          :class="{ error: v$.sizeX.$error }"
          style="width: 400px"
          label="sizeX"
          required
        ></v-text-field>
        <p v-if="v$.sizeX.$error" style="color: red">
          {{ v$.sizeX.$errors[0].$message }}
        </p>
        <v-text-field
          v-model="sizeY"
          :class="{ error: v$.sizeY.$error }"
          style="width: 400px"
          @blur="v$.sizeY.$touch()"
          label="sizeY"
          type="text"
          required
        ></v-text-field>
        <p v-if="v$.sizeY.$error" style="color: red">
          {{ v$.sizeY.$errors[0].$message }}
        </p>
      </v-form>
    </v-card-text>
  </v-card>
  <div class="container d-flex flex-column flex-gap justify-center align-center pa-4">
    <div class="rowBoxes d-flex flex-gap" v-for="(row, index) in numSizeY" :key="index">
      <TheSquare v-for="(box, index) in numSizeX" :key="index" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, numeric } from '@vuelidate/validators';
import TheSquare from '@/components/TheSquare.vue';

const sizeX = ref(null);
const sizeY = ref(null);

const rules = {
  sizeX: { required, numeric },
  sizeY: { required, numeric },
};

const v$ = useVuelidate(rules, { sizeX, sizeY });

const numSizeX = computed(() => {
  return sizeX.value ? +sizeX.value : 0;
});

const numSizeY = computed(() => {
  return sizeY.value ? +sizeY.value : 0;
});
</script>

<style scoped>
.flex-gap {
  gap: 10px;
}
</style>

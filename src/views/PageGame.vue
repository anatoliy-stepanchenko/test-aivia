<template>
  <v-card>
    <v-card-title class="justify-center">
      <span>Game Form</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="sizeX"
          @blur="v$.sizeX.$touch()"
          :class="{ error: v$.sizeX.$error }"
          label="sizeX"
          required
        ></v-text-field>
        <p v-if="v$.sizeX.$error" style="color: red">
          {{ v$.sizeX.$errors[0].$message }}
        </p>
        <v-text-field
          v-model="sizeY"
          :class="{ error: v$.sizeY.$error }"
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
  <div class="container d-flex flex-column flex-gap">
    <div class="rowBoxes d-flex flex-gap" v-for="(row, index) in numSizeY" :key="index">
      <div
        class="box"
        v-for="(box, index) in numSizeX"
        @mouseover.stop="handleHover"
        :class="{ hoverBlue: isBoxHover }"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useVuelidate } from '@vuelidate/core';
import { required, numeric } from '@vuelidate/validators';

const sizeX = ref(null);
const sizeY = ref(null);

const isBoxHover = ref(false);

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

const handleHover = () => {
  isBoxHover.value = !isBoxHover.value;
};
</script>

<style scoped>
.box {
  width: 36px;
  height: 36px;
  background-color: #fff;
}

.flex-gap {
  gap: 10px;
}

.hoverBlue {
  background-color: blue;
}
</style>

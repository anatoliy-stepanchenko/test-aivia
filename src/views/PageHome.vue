<template>
  <v-container class="fill-height" style="height: 100vh !important" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="justify-center">
            <span>Login Form</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitLogin(!v$.emailFild.$invalid && !v$.passwordFild.$invalid)">
              <v-text-field
                v-model="emailFild"
                :class="{ error: v$.emailFild.$error }"
                label="Email"
                required
              ></v-text-field>
              <p v-if="v$.emailFild.$invalid && isSubmited" style="color: red">
                {{ v$.emailFild.$silentErrors[0].$message }}
              </p>
              <v-text-field
                v-model="passwordFild"
                :class="{ error: v$.passwordFild.$error }"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <p v-if="v$.passwordFild.$invalid && isSubmited" style="color: red">
                {{ v$.passwordFild.$silentErrors[0].$message }}
              </p>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const router = useRouter();
const emailFild = ref('');
const passwordFild = ref('');
const requiredPasswordLength = ref(6);
const isSubmited = ref(false);

const rules = computed(() => ({
  emailFild: { required, email },
  passwordFild: { required, minLength: minLength(requiredPasswordLength.value) },
}));

const v$ = useVuelidate(rules, { emailFild, passwordFild });

const submitLogin = (isFormValid) => {
  isSubmited.value = true;
  if (!isFormValid) return;

  router.push({
    name: 'game',
  });
  isSubmited.value = false;
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-container class="fill-height" style="height: 100vh !important" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <TheLoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TheLoginForm from '@/components/TheLoginForm.vue';
</script>

<style lang="scss" scoped></style>

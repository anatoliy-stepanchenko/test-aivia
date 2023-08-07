<template>
  <div class="box" @mouseover.stop="handleHover" :class="{ hoverBlue: isBoxHover }"></div>
</template>

<script setup>
import { ref } from 'vue';

const isBoxHover = ref(false);

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
.hoverBlue {
  background-color: blue;
}
</style>

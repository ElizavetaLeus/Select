<template>
  <div :class="$style.root">
    <AppSelect
      :class="$style.select"
      :options="options"
      @changeOption="console.log($event)"
    />
  </div>
</template>

<script setup lang="ts">
import AppSelect from '@/components/ui/AppSelect.vue';
const options = [
  { id: 1, name: 'Кристофер Бан Чан' },
  { id: 2, name: 'Ли Мин Хо' },
  { id: 3, name: 'Со Чан Бин' },
  { id: 4, name: 'Хван Хен Джин' },
  { id: 5, name: 'Хан Джи Сон' },
  { id: 6, name: 'Ли Ен Бок' },
  { id: 7, name: 'Ким Сын Мин' },
  { id: 8, name: 'Ян Чон Ин' },
];
</script>
<style module>
.root {
  background-image: url("@/assets/images/background-image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flow-root;
}
.select {
  max-width: 400px;
  margin-top: 40px;
  margin-inline-start: 30px;
}
</style>

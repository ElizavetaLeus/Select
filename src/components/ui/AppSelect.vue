<template>
  <div :class="$style.root" v-click-outside="closeSelect">
    <div :class="$style.selected" @click="isShown = !isShown">
      {{ selectedOption || placeholder }}
      <AppIcon name="arrow" :class="[$style.icon, isShown && $style.iconActive]"/>
    </div>

    <ul v-if="isShown" :class="$style.optionList">
      <li
        v-for="option in options"
        :key="option.id"
        :class="$style.option"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue';
import { ref } from 'vue';

interface Option {
  id: number;
  name: string;
}
interface Props {
  options: Option[];
}
interface Emits {
  (event: 'changeOption', value: number): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

const placeholder = ref('Выбери своего Чо Ко Пая');
const selectedOption = ref('');
const isShown = ref(false);

const selectOption = (option: Option) => {
  selectedOption.value = option.name;
  isShown.value = false;
  emits('changeOption', option.id);
};
const closeSelect = () => {
  isShown.value = false;
};
</script>

<style module>
.root {
  border-radius: 10px;
  background-image: var(--gradient);
}
.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--color-gray);
  user-select: none;
  cursor: pointer;
}
.icon {
  transition: 0.3s;
  filter: brightness(0);
}
.iconActive {
  transform: rotate(180deg);
}
.optionList {
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}
.option {
  padding: 5px 10px;
  cursor: pointer;
  color: var(--color-black);
  border-top: 1px solid var(--color-gray);
}
.option:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>

<template>
  <div v-if="message" :class="['flash-message', type]">{{ message }}</div>
</template>

<script setup lang="ts">
import { useFlashStore } from "~/store";

const flashStore = useFlashStore();
const message = ref(flashStore.message);
const type = ref(flashStore.type);

watch(
  [() => flashStore.message, () => flashStore.type],
  ([newMessage, newType]) => {
    message.value = newMessage;
    type.value = newType;
  },
);
</script>

<style scoped lang="scss">
.flash-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;

  &.success {
    background: #f0fdf4;
    border: 1px solid #368149;
    color: #368149;
  }
  &.error {
    background: #fef2f2;
    border: 1px solid #991b1b;
    color: #991b1b;
  }
}
</style>

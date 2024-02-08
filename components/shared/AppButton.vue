<template>
  <button class="btn" :class="buttonStyle">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const { text, color } = defineProps<{
  text: string;
  color: string;
}>();

const buttonStyle = computed(() => ({
  "btn--primary": color === "primary",
  "btn--secondary": color === "secondary",
  "btn--outlined": color === "outlined",
}));
</script>

<style scoped lang="scss">
.btn {
  border: 0;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  font-weight: 600;
  font-size: 13.33px;

  &:hover {
    opacity: 0.9;
  }
  &--primary {
    background: $base-color;
    color: #ffffff;
  }
  &--secondary {
    background: #ffffff;
  }
  &--outlined {
    background: none;
    border: 1px solid #ffffff;
    color: #ffffff;
    transition: background 0.3s ease-in;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
@media screen and (min-width: $breakpoint-desktop) {
  .btn {
    padding: 12px 24px;
    font-size: 16px;
  }
}
</style>

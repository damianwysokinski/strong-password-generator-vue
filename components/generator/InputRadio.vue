<template>
  <div class="radio-input">
    <label class="radio-input__label">
      <input class="radio-input__input" type="radio" />
      {{ text }}
      <span class="radio-input__checkmark"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style scoped lang="scss">
.radio-input {
  &__label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 40px;
    height: 32px;
    margin-bottom: 16px;
    margin-left: 8px;
    cursor: pointer;
    user-select: none;

    &:hover {
      .radio-input__checkmark {
        background-color: #ccc;
      }
    }
  }
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + .radio-input__checkmark {
      background-color: #eff4f6;

      &::after {
        display: block;
      }
    }
  }
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-color: #eff4f6;
    border-radius: 50%;
    border: 2px solid #c1cfd3;

    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 5px;
      left: 5px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: $brand-pink-color;
    }
  }
}
</style>

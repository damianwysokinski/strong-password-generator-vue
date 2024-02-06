<template>
  <div class="checkbox-input">
    <label class="checkbox-input__label">
      <input
        class="checkbox-input__input"
        type="checkbox"
        :checked="modelValue"
      />
      {{ text }}
      <span class="checkbox-input__checkmark"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  modelValue: boolean;
}>();
</script>

<style scoped lang="scss">
.checkbox-input {
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
      .checkbox-input__checkmark {
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

    &:checked + .checkbox-input__checkmark {
      background-color: $brand-pink-color;
      border: 0;

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
    background-color: #eee;
    border-radius: 8px;
    border: 2px solid #c1cfd3;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 12px;
      top: 8px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
}
</style>

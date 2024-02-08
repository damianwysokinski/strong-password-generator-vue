<template>
  <div class="faq-panel" :class="{ active: isPanelOpen }">
    <div class="faq-panel__header" @click="togglePanel">
      <h3 class="faq-panel__title">
        <slot name="title"></slot>
      </h3>
    </div>
    <p class="faq-panel__description">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isPanelOpen = ref(false);

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
</script>

<style scoped lang="scss">
.faq-panel {
  padding: 24px 40px;
  border-radius: 24px;
  background: #b6dfea;
  margin-bottom: 20px;

  &__header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
      content: "+";
      display: grid;
      place-content: center;
      font-size: 40px;
      border-radius: 100%;
      background: #ffffff;
      min-width: 50px;
      height: 43px;
      padding-bottom: 6px;
    }
  }
  &__title {
    padding-right: 20px;
  }
  &__description {
    margin-top: 24px;
  }
  &:not(&.active) &__description {
    display: none;
  }
}
@media screen and (min-width: $breakpoint-desktop) {
  .faq-panel {
    &__title {
      font-size: 24px;
      padding-right: 40px;
    }
  }
}
</style>

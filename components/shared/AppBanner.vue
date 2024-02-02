<template>
  <div class="banner" :class="{ 'banner--centered': centered }">
    <div class="banner__title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  centered?: boolean;
  title: string;
}>();
</script>

<style scoped lang="scss">
.banner {
  color: #ffffff;
  background: url("~/assets/images/banner-1-bg.svg"),
    linear-gradient(91.86deg, #177286 14.58%, #1d8a9e 63.02%, #149ab8 97.92%);
  padding: 40px;
  border-radius: 24px;

  &--centered {
    text-align: center;
    background: url("~/assets/images/banner-2-bg.svg"),
      linear-gradient(91.86deg, #177286 14.58%, #1d8a9e 63.02%, #149ab8 97.92%);
  }

  &__title {
    font-size: 24px;
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  :deep(.banner__buttons) {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  // & :deep(.btn):not(:first-of-type) {
  //     margin-left: 20px;
  // }
}
</style>

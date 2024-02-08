<template>
  <component :is="tag" :class="[titleStyle, { centered: centered }]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
const { tag, centered } = defineProps<{
  tag: string;
  centered?: boolean;
}>();

const titleStyle = computed(() => ({
  title: tag === "h1",
  subtitle: tag === "h2",
}));
</script>

<style scoped lang="scss">
.title {
  font-size: 2.5rem;
  font-weight: 600;
}
.subtitle {
  color: #111111;
  font-size: 1.5rem;
  margin-bottom: 16px;
  font-weight: 600;
}
.centered {
  text-align: center;
}
@media screen and (min-width: $breakpoint-desktop) {
  .title {
    font-size: 4rem;
  }
  .subtitle {
    font-size: 3rem;
    line-height: 56px;
    margin-bottom: 24px;
  }
}
</style>

<template>
  <div class="card" :class="cardStyle">
    <img
      v-if="icon"
      src="~/assets/icons/shield-tick.svg"
      alt=""
      width=""
      height=""
      class="card__icon"
    />
    <h3 class="card__title">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { icon, title, color } = defineProps<{
  icon?: string;
  title: string;
  color?: string;
}>();

const cardStyle = computed(() => ({
  "card--gray": color === "gray",
  "card--red": color === "red",
}));
</script>

<style scoped lang="scss">
.card {
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0px 4px 32px rgba(29, 70, 75, 0.08);
  background: #ffffff;

  &__icon {
    width: 80px;
    height: 80px;
    background: $base-color;
    border-radius: 24px;
    display: flex;
    margin-bottom: 32px;
    padding: 16px;
  }
  &__title {
    margin-bottom: 16px;
    font-size: 20px;
  }
  & :deep(ul) {
    list-style: none;
    li {
      padding: 2px 10px 10px 30px;
    }
    span {
      color: $brand-pink-color;
    }
  }
  &--gray {
    background: #eff4f6;

    & :deep(ul li) {
      background: url("~/assets/icons/tick-circle.svg") no-repeat left top;
    }
  }
  &--red {
    background: #f6eded;

    & :deep(ul li) {
      background: url("~/assets/icons/close-circle.svg") no-repeat left top;
    }
  }
}
@media screen and (min-width: $breakpoint-desktop) {
  .card {
    padding: 40px;
  }
}
</style>

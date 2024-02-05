<template>
    <li class="footer__item">
        <NuxtLink :to="link" class="footer__link">
        {{ name }}
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  name: string;
}>();
</script>

<style lang="scss" scoped>
.footer {
    &__link {
        color: #ffffff;
        text-decoration: none;
    }
}
</style>
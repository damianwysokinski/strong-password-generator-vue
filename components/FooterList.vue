<template>
    <ul class="footer__list">
        <li class="footer__item">{{ list.title }}</li>
        <FooterListItem v-for="({ link, name }, index) in list.items" :key="index" :link="link" :name="name" />
    </ul>
</template>

<script setup lang="ts">
import FooterListItem from '~/components/FooterListItem.vue';

defineProps(['list']);
</script>

<style lang="scss" scoped>
.footer {
    &__list {
        list-style: none;
    }
    &__item {
        color: #ffffff;
        margin-bottom: 10px;

        &:first-child {
            color: $brand-pink-color;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 20px;
        }
    }
}
</style>
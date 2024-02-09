<template>
  <div>
    <app-navbar />
    <slot />
    <app-footer />
    <flash-message />
  </div>
</template>
<script setup lang="ts">
import AppNavbar from "~/components/AppNavbar.vue";
import AppFooter from "~/components/AppFooter.vue";
import FlashMessage from "~/components/FlashMessage.vue";
</script>

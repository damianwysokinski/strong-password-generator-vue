<template>
  <div>
    <app-navbar />
    <slot />
    <app-footer />
    <app-flash-message />
  </div>
</template>
<script setup lang="ts">
import AppNavbar from "~/components/AppNavbar.vue";
import AppFooter from "~/components/AppFooter.vue";
import AppFlashMessage from "~/components/shared/AppFlashMessage.vue";
</script>

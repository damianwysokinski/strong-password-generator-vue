<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <img
          src="~/assets/images/logo.svg"
          alt="password generator logo"
          class="navbar__logo"
          width="333"
          height="48"
        />
        <app-button text="Get Dashlane free" color="primary" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AppButton from "~/components/shared/AppButton.vue";
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  width: calc(100% - 40px);
  max-width: 1200px;
  background: #ffffff;
  padding: 16px 0;
  border-radius: 24px;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 220px;
  }
}
</style>

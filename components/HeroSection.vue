<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div>
          <div class="hero__subtitle">Password Generator Tool</div>
          <app-title tag="h1" class="hero__title">
            Generate a Unique, Secure password
          </app-title>
          <p class="hero__caption">
            Use our online password generator to instantly create a secure,
            random password.
          </p>
          <div class="hero__buttons">
            <app-button text="Get Dashlane free" color="secondary" />
            <app-button text="Explore more" color="outlined" />
          </div>
        </div>
        <img
          src="~/assets/images/access-control-system.svg"
          alt="access-control-system"
          class="hero__img"
          width="442"
          height="517"
        />
      </div>

      <generator-wrapper />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from "~/components/shared/AppButton.vue";
import AppTitle from "~/components/shared/AppTitle.vue";
</script>

<style scoped lang="scss">
.hero {
  background: var(--base-bg-color);
  padding: 60px 0;

  &__subtitle {
    color: var(--brand-pink-color);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  &__title {
    color: #ffffff;
    margin-bottom: 20px;
  }
  &__caption {
    color: #a6babf;
    margin-bottom: 32px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  &__img {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .hero {
    padding-top: 140px;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 440px;
    }
    &__img {
      display: block;
    }
  }
}
</style>

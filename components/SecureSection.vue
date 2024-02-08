<template>
  <section class="secure">
    <div class="container">
      <div class="secure__wrapper">
        <div>
          <app-title tag="h2" class="secure__title">
            Secure all your online accounts
          </app-title>
          <p class="secure__caption">
            Don’t become the next victim of hacking, secure your passwords with
            a password manager today.
          </p>
          <app-button text="Try it now" color="primary" />
        </div>
        <img
          src="~/assets/images/secure-accounts.svg"
          alt="secure-accounts"
          class="secure__img"
          width="664"
          height="400"
        />
      </div>
      <app-banner title="Try Dashlane for Free" centered>
        <div class="banner__buttons">
          <app-button text="Get Dashlane" color="secondary" />
          <app-button text="Download Dashlane extension" color="outlined" />
        </div>
      </app-banner>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from "~/components/shared/AppTitle.vue";
import AppButton from "~/components/shared/AppButton.vue";
import AppBanner from "~/components/shared/AppBanner.vue";
</script>

<style scoped lang="scss">
.secure {
  padding: 40px 0;

  &__wrapper {
    display: grid;
    gap: 60px;
    padding-bottom: 40px;
  }
  &__img {
    margin: 0 auto;
  }
}

@media screen and (min-width: $breakpoint-desktop) {
  .secure {
    padding: 100px 0;

    &__wrapper {
      grid-template-columns: repeat(2, 1fr);
      padding-bottom: 100px;
    }
  }
}
</style>

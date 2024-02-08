<template>
  <section class="how-to">
    <div class="container">
      <app-title tag="h2" class="how-to__title" centered>
        How to make a good strong password
      </app-title>

      <div class="how-to__cards">
        <app-card title="A strong password has:" color="gray">
          <ul class="card__list">
            <li>At least <b>15 characters</b></li>
            <li><b>Uppercase letters</b></li>
            <li><b>Lowercase letters</b></li>
            <li><b>Numbers</b></li>
            <li>
              <b>Symbols,</b> such as
              <span>`!”?$?%^&amp;*()_–+={[}]:;@‘~#|&lt;,&gt;.?/</span>
            </li>
          </ul>
        </app-card>

        <app-card title="A strong password is:" color="red">
          <ul class="card__list">
            <li>Not your <b>username</b></li>
            <li>
              Not your <b>name</b>, your <b>friend’s name</b>, your
              <b>family member’s name</b>, or a <b>common name</b>
            </li>
            <li>Not your <b>date of birth</b></li>
            <li>Not a dictionary <b>word</b></li>
            <li>Not like your <b>previous passwords</b></li>
            <li>
              Not a <b>keyboard pattern</b>, such as
              <span>qwerty, asdfghjkl, or 12345678</span>
            </li>
          </ul>
        </app-card>
      </div>

      <app-banner title="Ready to protect your passwords?">
        <app-button text="Get Dashlane free" color="secondary" />
      </app-banner>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from "~/components/shared/AppTitle.vue";
import AppBanner from "~/components/shared/AppBanner.vue";
import AppButton from "~/components/shared/AppButton.vue";
import AppCard from "~/components/shared/AppCard.vue";
</script>

<style scoped lang="scss">
.how-to {
  padding: 40px 0;

  &__title {
    margin-bottom: 80px;
  }
  &__cards {
    display: grid;
    gap: 20px;
    margin-bottom: 40px;
  }
}
@media screen and (min-width: $breakpoint-desktop) {
  .how-to {
    padding: 100px 0;

    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
  }
}
</style>

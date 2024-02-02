<template>
  <section class="benefits">
    <div class="container">
      <app-title tag="h2" class="benefits__title" centered>
        Benefits of using a password generator
      </app-title>
      <p class="benefits__caption">
        There are plenty of benefits when you use a password generator, let’s
        check it out. All benefits below.
      </p>
      <div class="benefits__cards">
        <app-card icon="shield-tick" title="Safeguard your data">
          <p>
            One way to gain access to your important personal information is by
            figuring out your password. By using a password generator, your data
            will stay secured with a strong password for each account you
            choose.
          </p>
        </app-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from "~/components/shared/AppTitle.vue";
import AppCard from "~/components/shared/AppCard.vue";
</script>

<style scoped lang="scss">
.benefits {
  background: #f5fbfc;
  padding: 40px 0;

  &__caption {
    text-align: center;
  }
}

@media screen and (min-width: 1200px) {
  .benefits {
    padding: 100px 0;
  }
}
</style>

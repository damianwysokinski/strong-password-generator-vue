<template>
  <section class="faq">
    <div class="container">
      <div class="faq__wrapper">
        <div>
          <app-title tag="h2" class="faq__title">
            Save and secure all your passwords with a password manager tool
          </app-title>
          <p class="faq__caption">
            Save all your passwords so you will never forget them again, with
            this password generator tool that will also produce the best
            passwords for you.
          </p>
          <app-button text="Get yours now" color="primary" />
          <img
            src="~/assets/images/save-secure.svg"
            alt="save-secure"
            class="faq__img"
            width="580"
            height="457"
          />
        </div>
        <div>
          <faq-panel
            v-for="({ title, description }, index) in faqPanelsData"
            :key="index"
          >
            <template #title>
              {{ title }}
            </template>
            <template #description>
              {{ description }}
            </template>
          </faq-panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from "~/components/shared/AppTitle.vue";
import AppButton from "~/components/shared/AppButton.vue";

const faqPanelsData = [
  {
    title: "Let’s start with the facts",
    description:
      "As more people are shopping online while trying to avoid crowded stores, they are easier prey for hackers and scammers. A Google study conducted in 2019 found that 52% of individuals use one password on many sites and 13% admit they use one password for everything. Also, more than 2.5 billion accounts were estimated to have been hacked in 2018, which amounts to around 6.85 million accounts being hacked each day, or roughly 158 every second. Every 2 out of 5 individuals have been a victim of identity theft, had their passwords compromised, or their sensitive information breached due to having outdated or duplicate passwords. And finally, poor password security is the cause of more than 80% of data breaches.",
  },
  {
    title: "How hackers invade your accounts and devices",
    description:
      "As more people are shopping online while trying to avoid crowded stores, they are easier prey for hackers and scammers. A Google study conducted in 2019 found that 52% of individuals use one password on many sites and 13% admit they use one password for everything. Also, more than 2.5 billion accounts were estimated to have been hacked in 2018, which amounts to around 6.85 million accounts being hacked each day, or roughly 158 every second. Every 2 out of 5 individuals have been a victim of identity theft, had their passwords compromised, or their sensitive information breached due to having outdated or duplicate passwords. And finally, poor password security is the cause of more than 80% of data breaches.",
  },
  {
    title: "Secure your information",
    description:
      "As more people are shopping online while trying to avoid crowded stores, they are easier prey for hackers and scammers. A Google study conducted in 2019 found that 52% of individuals use one password on many sites and 13% admit they use one password for everything. Also, more than 2.5 billion accounts were estimated to have been hacked in 2018, which amounts to around 6.85 million accounts being hacked each day, or roughly 158 every second. Every 2 out of 5 individuals have been a victim of identity theft, had their passwords compromised, or their sensitive information breached due to having outdated or duplicate passwords. And finally, poor password security is the cause of more than 80% of data breaches.",
  },
  {
    title: "What are password generators?",
    description:
      "As more people are shopping online while trying to avoid crowded stores, they are easier prey for hackers and scammers. A Google study conducted in 2019 found that 52% of individuals use one password on many sites and 13% admit they use one password for everything. Also, more than 2.5 billion accounts were estimated to have been hacked in 2018, which amounts to around 6.85 million accounts being hacked each day, or roughly 158 every second. Every 2 out of 5 individuals have been a victim of identity theft, had their passwords compromised, or their sensitive information breached due to having outdated or duplicate passwords. And finally, poor password security is the cause of more than 80% of data breaches.",
  },
];
</script>

<style scoped lang="scss">
.faq {
  background: #f5fbfc;
  padding: 40px 0;

  &__wrapper {
    display: grid;
    gap: 90px;
  }
  &__img {
    margin-top: 20px;
  }
}
@media screen and (min-width: 1200px) {
  .faq {
    padding: 100px 0;

    &__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>

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
    </div>
    <div
      ref="benefitsCardsContainer"
      class="benefits__cards"
      @mousedown="startDragging"
      @mouseleave="endDragging"
      @mouseup="endDragging"
      @mousemove="dragging"
    >
      <app-card
        v-for="({ icon, title, text }, index) in benefitsData"
        :key="index"
        :icon-src="`/icons/${icon}.svg`"
        :title="title"
      >
        <p>{{ text }}</p>
      </app-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from "~/components/shared/AppTitle.vue";
import AppCard from "~/components/shared/AppCard.vue";

const benefitsData = [
  {
    icon: "shield-tick",
    title: "Safeguard your data",
    text: "One way to gain access to your important personal information is by figuring out your password. By using a password generator, your data will stay secured with a strong password for each account you choose.",
  },
  {
    icon: "password-check",
    title: "Creates unique passwords",
    text: "The password-generating tool combines numbers, letters, and special characters to create complex, hard-to-guess passwords so you won’t have to try to think something up yourself.",
  },
  {
    icon: "element-3",
    title: "Manage all your passwords in one place",
    text: "The beauty of a password generator program is that not only do they generate a password for you, but these password tools save all your passwords too. This means you won’t have to try to remember them all in your head or risk someone seeing your passwords by writing them down.",
  },
  {
    icon: "emoji-happy",
    title: "Easy to use",
    text: "Password creation tools are generally very basic and user-friendly. You don’t have to read a long, drawn-out instruction manual or take a special class to learn how to use one.",
  },
  {
    icon: "security-user",
    title: "Keeps you organized",
    text: "A password generation tool can help you stay neat and organized with all your passwords kept secured in one place. Without one, you may find yourself writing your passwords down everywhere.",
  },
  {
    icon: "login",
    title: "They login for you",
    text: "It can be a big hassle to have to log in with your user name and password at every site you visit. With a password generator in place, you will no longer waste any time logging in to your account since it does it all for you.",
  },
  {
    icon: "shield-search",
    title: "Some keep track of more than just your password",
    text: "These tools may also keep track of other important information, such as first and last name, address, phone number, email, and more. You type this information into the password generator one time and save it for use later when it is needed to fill out another online form.",
  },
  {
    icon: "task",
    title: "It automatically fills in required information",
    text: "Whether you are visiting an unrecognized new website or a site you visit often, the password generator will pop up anytime it can help and add information for you.",
  },
  {
    icon: "timer",
    title: "Saves you lots of time",
    text: "You probably already know how time-consuming it can be to fill out an online form, especially when trying to compare quotes. It can literally take hours to fill in the same information multiple times on each website you visit. The Password generator saves you a lot of time by filling in all the information for you.",
  },
  {
    icon: "money-4",
    title: "Saves you money",
    text: "Password generating tools are probably the best investment for anyone, especially if you are a business owner or someone who spends a lot of time online. They are affordably priced and can save you a lot of money by not allowing hackers to steal and use your important information.",
  },
];

const benefitsCardsContainer = ref<HTMLElement | null>(null);
let isDown = false;
let startX = 0;
let scrollLeft = 0;

const startDragging = (event: MouseEvent) => {
  if (!benefitsCardsContainer.value) return;
  isDown = true;
  startX = event.pageX - (benefitsCardsContainer.value.offsetLeft ?? 0);
  scrollLeft = benefitsCardsContainer.value.scrollLeft;
};

const dragging = (event: MouseEvent) => {
  event.preventDefault();
  if (!benefitsCardsContainer.value || !isDown) return;
  const x = event.pageX - (benefitsCardsContainer.value.offsetLeft ?? 0);
  const walk = (x - startX) * 1;
  benefitsCardsContainer.value.scrollLeft = scrollLeft - walk;
};

const endDragging = () => {
  isDown = false;
};
</script>

<style scoped lang="scss">
.benefits {
  background: #f5fbfc;
  padding: 40px 0;

  &__caption {
    text-align: center;
    margin-bottom: 80px;
  }
  &__cards {
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(10, 481px);
    gap: 32px;
    cursor: grabbing;
    padding: 0 20px;
    margin-top: 40px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media screen and (min-width: $breakpoint-desktop) {
  .benefits {
    padding: 100px 0;

    &__cards {
      grid-template-columns: repeat(5, 481px);
    }
  }
}
</style>

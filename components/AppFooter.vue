<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <NuxtLink to="/">
          <img
            src="~/assets/images/logo-white.svg"
            alt="password generator logo"
            class="footer__logo"
            width="308"
            height="111"
          />
        </NuxtLink>
        <FooterList
          v-for="(list, index) in footerListData"
          :key="index"
          :list="list"
        />
      </div>
      <p class="footer__copyright">
        Copyright © {{ currentYear }} password-generator. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerListData = [
  {
    title: "Company",
    items: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Work with us",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Work with us",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Work with us",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Work with us",
        link: "",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 40px;
  background: $base-bg-color;
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__logo {
    max-width: 220px;
  }
  &__copyright {
    padding: 40px 0;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 40px;
    margin-bottom: 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
}
@media screen and (min-width: 1200px) {
  .footer {
    padding-top: 80px;
    &__wrapper {
      justify-content: space-between;
      flex-direction: row;
      gap: 100px;
    }
    &__copyright {
      margin-top: 80px;
    }
  }
}
</style>

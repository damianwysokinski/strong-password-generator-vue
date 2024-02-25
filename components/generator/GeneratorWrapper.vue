<template>
  <div class="generator">
    <div class="generator__content">
      <input
        v-model="generatedPassword"
        class="generator__password-input"
        type="text"
        readonly
      />
      <button class="generator__copy-button" @click="copyPassword">
        <img src="/icons/copy.svg" alt="copy-icon" width="48" height="48" />
      </button>
      <button class="generator__refresh-button" @click="generatePassword">
        <img
          src="/icons/refresh.svg"
          alt="refresh-icon"
          width="48"
          height="48"
        />
      </button>
    </div>

    <div class="generator__options">
      <div class="generator__section">
        <h3 class="generator__title">Customize your password</h3>
        <div>
          <label class="generator__label">Password Length</label>
          <div class="generator__input-container">
            <input
              v-model="passwordLength"
              class="generator__range-input"
              :style="`background-size: ${fillWidth}% 100%;`"
              type="range"
              min="1"
              max="50"
            />
            <input
              v-model="passwordLength"
              class="generator__number-input"
              type="number"
              min="1"
              max="50"
              @input="checkPasswordLength"
            />
          </div>
        </div>
        <app-button
          text="Copy password"
          color="primary"
          @click="copyPassword"
        />
      </div>
      <div class="generator__section">
        <input-radio
          v-model="characterType"
          text="Easy to say"
          value="easyToSay"
        />
        <input-radio
          v-model="characterType"
          text="Easy to read"
          value="easyToRead"
        />
        <input-radio
          v-model="characterType"
          text="All characters"
          value="allCharacters"
        />
      </div>
      <div class="generator__section">
        <input-checkbox v-model="includeUppercase" text="Uppercase" />
        <input-checkbox v-model="includeLowercase" text="Lowercase" />
        <input-checkbox
          v-model="includeNumbers"
          text="Numbers"
          :character-type="characterType"
        />
        <input-checkbox
          v-model="includeSymbols"
          text="Symbols"
          :character-type="characterType"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlashStore } from "~/store";

import AppButton from "~/components/shared/AppButton.vue";
import InputRadio from "~/components/generator/InputRadio.vue";
import InputCheckbox from "~/components/generator/InputCheckbox.vue";

const passwordLength = ref(12);
const characterType = ref("allCharacters");
const includeUppercase = ref(true);
const includeLowercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref("");

const flashStore = useFlashStore();

const generatePassword = () => {
  const charset = getSelectedCharset();
  const passwordArray = Array.from(
    { length: passwordLength.value },
    () => charset[Math.floor(Math.random() * charset.length)],
  );
  generatedPassword.value = passwordArray.join("");
};

const copyPassword = () => {
  navigator.clipboard.writeText(generatedPassword.value);
  flashStore.showSuccessMessage("Password copied successfully!");
};

const checkPasswordLength = () => {
  if (passwordLength.value < 1) passwordLength.value = 1;
  if (passwordLength.value > 50) passwordLength.value = 50;
};

const getSelectedCharset = () => {
  let charset = "";

  if (includeUppercase.value) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase.value) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers.value) charset += "0123456789";
  if (includeSymbols.value) charset += "!@#$%^&*()_-+=<>?/";
  if (characterType.value === "easyToRead")
    charset = charset.replace(/[I1O0]/gi, "");

  return charset;
};

onMounted(() => {
  generatePassword();
});

const fillWidth = computed(() => {
  return passwordLength.value * 2;
});

watch(
  [
    passwordLength,
    characterType,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ],
  () => {
    generatePassword();
  },
);
</script>

<style scoped lang="scss">
.generator {
  background: #ffffff;
  padding: 20px;
  border-radius: 28px;
  margin-top: 40px;

  &__options {
    background: #eff4f6;
    border-radius: 24px;
    padding: 20px;
    display: grid;
    gap: 20px;
  }
  &__title {
    margin-bottom: 32px;
    font-size: 24px;
  }
  &__content {
    background: #eff4f6;
    border-radius: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
  &__password-input {
    outline: none;
    border: 0;
    background: none;
    padding: 20px;
    width: 100%;
  }
  &__input-container {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  &__range-input {
    appearance: none;
    height: 7px;
    background: #dde3e5;
    border-radius: 5px;
    background-image: linear-gradient($brand-pink-color, $brand-pink-color);
    background-repeat: no-repeat;
    width: 100%;

    &::-webkit-slider-thumb {
      appearance: none;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background: $brand-pink-color;
      cursor: ew-resize;
      transition: background 0.3s ease-in-out;
      border: 4px solid #fbbbc4;
    }
    &::-webkit-slider-runnable-track {
      appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  }
  &__number-input {
    font-size: 20px;
    font-weight: 500;
    background: none;
    border: 2px solid #c1cfd3;
    border-radius: 8px;
    height: 40px;
    width: 54px;
    padding-left: 12.5px;
  }
  &__copy-button,
  &__refresh-button {
    background: none;
    border: 0;
    cursor: pointer;
  }
}
@media screen and (min-width: 1200px) {
  .generator {
    outline: 26px solid rgba(255, 255, 255, 0.1);
    margin-top: 0;

    &__options {
      padding: 40px;
      grid-template-columns: 1fr 178px 178px;
      gap: 80px;
    }
    &__title {
      font-size: 32px;
    }
    &__password-input {
      padding: 30px;
      font-size: 28px;
      font-weight: 400;
    }
  }
}
</style>

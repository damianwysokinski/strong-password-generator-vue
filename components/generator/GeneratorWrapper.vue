<template>
  <div class="generator">
    <div class="generator__content">
      <input
        v-model="generatedPassword"
        class="generator__password-input"
        type="text"
        readonly
      />
      <button @click="copyPassword" class="generator__copy-button">
        <img
          src="~/assets/icons/copy.svg"
          alt="copy-icon"
          width="48"
          height="48"
        />
      </button>
      <button @click="generatePassword" class="generator__refresh-button">
        <img
          src="~/assets/icons/refresh.svg"
          alt="refresh-icon"
          width="48"
          height="48"
        />
      </button>
    </div>

    <div class="generator__options">
      <div>
        <h3 class="generator__title">Customize your password</h3>
        <div>
          <label>Password Length</label>
          <div>
            <input v-model="passwordLength" type="range" min="1" max="50" />
            <input v-model="passwordLength" type="number" min="1" max="50" />
          </div>
        </div>
        <app-button
          text="Copy password"
          color="primary"
          @click="copyPassword"
        />
      </div>
      <div>
        <input-radio v-model="characterType" text="Easy to say" />
        <input-radio v-model="characterType" text="Easy to read" />
        <input-radio v-model="characterType" text="All characters" />
      </div>
      <div>
        <input-checkbox v-model="includeUppercase" text="Uppercase" />
        <input-checkbox v-model="includeLowercase" text="Lowercase" />
        <input-checkbox v-model="includeNumbers" text="Numbers" />
        <input-checkbox v-model="includeSymbols" text="Symbols" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
};

const getSelectedCharset = () => {
  let charset = "";

  if (includeUppercase.value) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase.value) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers.value) charset += "0123456789";
  if (includeSymbols.value) charset += "!@#$%^&*()_-+=<>?/";

  return charset;
};

onMounted(() => {
  generatePassword();
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

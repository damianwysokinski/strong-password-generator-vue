import { defineStore } from "pinia";

export const useFlashStore = defineStore("flash", {
  state: () => ({
    message: "" as string | null,
    type: "" as "success" | "error" | null,
  }),
  actions: {
    showSuccessMessage(message: string) {
      this.message = message;
      this.type = "success";
      this.clearFlashMessage();
    },
    showErrorMessage(message: string) {
      this.message = message;
      this.type = "error";
      this.clearFlashMessage();
    },
    clearFlashMessage() {
      setTimeout(() => {
        this.message = null;
        this.type = null;
      }, 3000);
    },
  },
});

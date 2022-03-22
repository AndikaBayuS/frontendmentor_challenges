<template>
  <div class="flex h-screen items-center justify-center p-5">
    <div
      class="max-h-screen-sm relative max-w-screen-sm rounded-2xl bg-dark-grayish text-center"
    >
      <div class="py-10 px-7">
        <div class="">
          <p class="text-neon-green">Advice #{{ advices.id }}</p>
          <p
            class="my-5 text-[28px] font-extrabold text-light-cyan duration-300 ease-in-out"
          >
            "{{ advices.advice }}"
          </p>
        </div>
        <img
          src="../images/pattern-divider-desktop.svg"
          alt="divider"
          class="mx-auto pb-5"
        />
      </div>
      <div class="absolute -bottom-6 z-50 flex w-full justify-center">
        <button class="rounded-full bg-neon-green p-4" v-if="loading">
          <svg
            class="h-5 w-5 animate-spin text-dark-blue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
        <button
          class="rounded-full bg-neon-green p-4 duration-300 ease-in-out hover:shadow-btn-dice hover:shadow-neon-green"
          @click="getAdvice()"
          v-else
        >
          <img src="../images/icon-dice.svg" alt="dice" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let advices = ref({});
    let loading = ref(false);

    return {
      advices,
      loading,
    };
  },
  mounted() {
    this.getAdvice();
  },
  methods: {
    getAdvice() {
      this.axios.get("https://api.adviceslip.com/advice").then((response) => {
        this.advices = response.data.slip;
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
      });
    },
  },
};
</script>

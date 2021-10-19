<template>
  <q-page class="flex flex-center">
    <q-input v-model="username" dense rounded clearable label="Filled" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data: () => {
    return {
      username: "",
    };
  },
});
</script>

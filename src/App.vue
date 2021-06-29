<template>
  <div>
    <label for="">Quantidade</label>
    <br />
    {{ getQuantidade }}
    <button @click="decrementAction()">-</button>
    <button @click="incrementAction()">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["incrementAction", "decrementAction"]),
  },
  computed: {
    ...mapGetters(["getQuantidade"]),
  },
};
</script>

<style>
</style>

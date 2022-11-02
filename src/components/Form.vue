<template>
  <div class="form">
    <div class="form__inputs">
      <input
        v-for="input in inputs"
        :key="input.label"
        v-model="input.value"
        :placeholder="input.label"
        type="number"
        class="form__input"
        @input="changeForm(input.label, input.value)"
      />
      <button @click="send">Отправить</button>
    </div>
    <br>
    <div class="form__labels">
      <span
        v-for="input in inputs"
        :key="input.label"
        class="form__label"
      >
        {{ `${input.label}: ${input.value}` }}
      </span>
      <br>
      <br>
      <div
        class="form__label"
      >
        {{ `localStorage: ${allStorage}` }}
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "debounce";

export default {
  name: "Form",
  props: {
    inputs: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    allStorage: []
  }),
  methods: {
    updateStorage() {
      this.allStorage = Object.keys(localStorage).map(key => localStorage.getItem(key))
    },
    changeForm: debounce(function (label, value) {
      const sumInput = this.inputs.find(item => item.label === "Сумма"),
        priceInput = this.inputs.find(item => item.label === "Цена"),
        countInput = this.inputs.find(item => item.label === "Кол-во")
      switch (label) {
        case "Цена":
          sumInput.value = value * (countInput.value)
          break;
        case "Кол-во":
          sumInput.value = value * (priceInput.value)
          break;
        case "Сумма":
          priceInput.value = value / (countInput.value)
          break;
      }
      this.$emit("input", `Изменен инпут: "${label}", со значением: ${value}`)
    }, 300),
    async send() {
      await this.$emit('send', this.inputs)
      this.updateStorage()
    }
  },
  mounted() {
    this.updateStorage()
  }
}
</script>

<style scoped>

.form__label {
  margin: 0 70px;
}

</style>
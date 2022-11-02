<template>
  <div>
    <h2>C Vuex</h2>
    <Form
      ref="form"
      :inputs="inputs"
      @send="send"
      @input="$store.commit('addEvent', $event)"
    />
    <br>
    <h3>События</h3>
    <Events :events="events" />
  </div>
</template>

<script>
import Form from './Form.vue'
import Events from './Events.vue'

export default {
  name: "WithoutVuex",
  components: { Form, Events },
  data: () => ({
    inputs: [
      { label: "Цена", value: null },
      { label: "Кол-во", value: null },
      { label: "Сумма", value: null },
    ]
  }),
  computed: {
    sendedData() {
      return this.$store.state.data
    },
    events() {
      return this.$store.state.events
    },
  },
  watch: {
    sendedData() {
    this.$refs.form.updateStorage()
    }
  },
  methods: {
    send(inputs) {
      this.$store.dispatch('sendData', inputs)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
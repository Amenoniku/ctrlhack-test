<template>
  <div>
    <h2>Без Vuex</h2>
    <Form
      ref="form"
      :inputs="inputs"
      @send="send"
      @input="addEvent"
    />
    <br>
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
    ],
    events: []
  }),
  methods: {
    send(inputs) {
      const keys = Object.keys(localStorage)
      const sendedDataKeys = keys.reduce((filtered, key) => {
        if (key.match(/#+\d+/g)) filtered.push(+key.split('#')[1])
        return filtered
      }, [])
      const dataNumber = Math.max(...(sendedDataKeys.length ? sendedDataKeys : [0])) + 1
      const obj = JSON.stringify({price: inputs[0].value, qty: inputs[1].value, amount: inputs[2].value, nonce: dataNumber})
      this.addEvent(`Данные готовы к отправке: ${obj}. Текущий LocalStorage: ${JSON.stringify(keys.map(key => localStorage.getItem(key)))}`)
      setTimeout(() => {
        if (Math.round(Math.random() * 1) === 1) {
        localStorage.setItem(`sended#${dataNumber}`, obj)
        this.addEvent(`Данные успешно сохранены. Data: ${obj}`)
        this.$refs.form.updateStorage()
      } else {
        this.addEvent('Ошибка сервера.')
        alert("Упс, не повезло. Сервер отвалился")
      }
      }, 1000);
    },
    addEvent(str) {
      this.events.unshift({text: str, id: Math.random()})
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
<template>
  <div class="events">
    <div v-for="event in events" :key="event.id">{{event.text}}</div>
  </div>
</template>

<script>
  export default {
    name: "Events",
    props: {
      events: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
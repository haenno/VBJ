<script >
import axios from 'axios'

export default {
  name: 'CatFactsView',

  data() {
    return {
      facts: []
    }
  },
  methods: {
    getFact() {
      axios
        .get('https://catfact.ninja/fact')
        .then((response) => {
          this.facts.unshift(response.data.fact)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <div>
    <h1>Cat facts from an API </h1>
    <button @click="getFact" class="btn btn-primary mb-2">Get a cat fact</button>

    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action" v-for="fact in facts" :key="fact.id">
      {{ fact }}</button>
    </div>

  </div>
</template>

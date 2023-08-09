<script setup>

// example of using a store: increment a counter
import { useCounterStore } from '@/store/counter.js'
const counter = useCounterStore()
counter.increment()

</script>


<template>
  <div>Current count from pinia store: {{ counter.count }}</div>
  <div>
    <h1>This is an home page</h1>
  </div>
  <!-- Access the state directly from the store -->
</template>


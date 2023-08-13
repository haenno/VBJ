<script setup>
import { jwtAuthStore } from "@/store/jwtAuthStore.js";
const authStore = jwtAuthStore();
console.log(authStore);

import jwtLogin from "@/js/jwt-http-helper.js";

function login() {
  jwtLogin.jwtLogin("admin", "admin");
}
</script>

<template>
  <div>
    <h1>Login</h1>

    <button @click="login" class="btn btn-primary">Login</button>

    <p>{{ authStore.userRefreshToken }}</p>
    <p>{{ authStore.userAuthToken }}</p>
  </div>
</template>

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const jwtAuthStore = defineStore("jwtAuthStore", () => {
  const userIsLoggedIn = ref(false);
  const userId = ref(0);
  const userRefreshToken = ref("");
  const userAccessToken = ref("");

  function logout() {
    userIsLoggedIn = false;
    userRefreshToken = "";
    userAccessToken = "";

  }

  function isLoggedIn() {
    return userIsLoggedIn;
  }

  function setAccessToken(token) {
    userAccessToken = token;
  }
  function setRefreshToken(token) {
    userRefreshToken = token;
  }

  return { userIsLoggedIn, userId, userRefreshToken, userAccessToken, isLoggedIn, logout, setAccessToken, setRefreshToken };
});

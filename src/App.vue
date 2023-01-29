<template>
  <Header></Header>
  <main class="main">
    <router-view></router-view>
  </main>
  <!-- <Main :tabActive="tabActive"></Main> -->
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/main/Header.vue";
// import Main from "@/components/main/Main.vue";
import Footer from "@/components/main/Footer.vue";
import { ref } from "vue";

/* Api Key */
window.key = "b7266791";
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252525;
  background: #fff;
  min-height: 100vh;
}

h1 {
  margin-bottom: 30px;
}
</style>

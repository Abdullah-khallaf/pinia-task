<template>
  <body>

    <nav-bar></nav-bar>
    <router-view></router-view>

  </body>
</template>

<script setup>
import NavBar from "./components/NavBar.vue"

</script>

<style>
  body{
    display: flex;
    flex-direction: row;
  }
</style>
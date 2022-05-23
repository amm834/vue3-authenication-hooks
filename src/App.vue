<script setup>
import Navbar from "./components/Navbar.vue";
import SignUp from "./components/SignUp.vue";
</script>

<template>
  <Navbar/>
  <main>
    <section class="my-3 container">
     <router-view></router-view>
    </section>
  </main>
</template>

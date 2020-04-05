<template>
  <div class="container-fluid nav-bar bg-transparent fixed-top">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo-container">
        <router-link to="/">
          <h1 class="logo-b">B<span class="bot">.</span>
            </h1>
        </router-link>
      </div>  
      <div :class=" isActive ? 'links-container' : 'menu'">
        <ul class="nav-links">
          <li class="mx-5 nav item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link to="/portfolio">Portofolio</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
        <button
        :class="[ isActive && 'is-active' ]"
        class="hamburger hamburger--spring"
        @click="isActive=!isActive"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>
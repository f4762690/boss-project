<template>
  <div class="footer-wrapper">
    <router-link to="job">
      <i class="icon-bussiness-man"></i>
      <span>职位</span>
    </router-link>
    <router-link to="company">
      <i class="icon-office"></i>
      <span class="text">公司</span>
    </router-link>
    <router-link to="message">
      <i class="icon-code"></i>
      <span>消息</span>
    </router-link>
    <router-link to="mine">
      <i class="icon-addressbook_fill"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      @import "bsNav.css";
</style>

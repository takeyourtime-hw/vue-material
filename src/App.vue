<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->

    <!-- <a href="/">首页</a>
    <a href="/hw">菜鸟</a>
    <a href="/hu">菜鸟一号</a>-->
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/hw" active-class="pp">菜鸟</router-link>
    <router-link to="/hu">菜鸟一号</router-link> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.pp {
  color: yellow;
}
.qj {
  color: green;
}
.el-scrollbar__wrap {
    overflow-x: hidden;
}
</style>

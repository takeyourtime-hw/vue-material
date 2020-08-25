<template>
  <div>
    <el-button @click="jian()" type="success">减法</el-button>
    <span>{{num}}</span>
    <el-button @click="jia()" type="success">加法</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // num:this.$store.state.num
    };
  },
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
  methods: {
    jian() {
      this.$store.commit("mncrement");
    },
    jia() {
      // this.$store.commit('increment');
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>
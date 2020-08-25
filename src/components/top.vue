<template>
  <div>
    <div class="header">
      <ul class="ul">
        <li class="tt" v-for="(item,index) in dataList" :key="index">
          <div @click="change(item.name)">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      step:0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/ip/w/website/findGoodsTypeList").then((res) => {
        this.dataList = res.data.data;
      });
    },
    change(name) {
      this.$emit("seta", name);
    },
  },
};
</script>
<style scoped lang="scss">
.ul {
  padding: 0px;
  margin: 0px;
  .tt {
    list-style: none;
    float: left;
    padding: 10px 19px;
  }
  .tt:hover {
    background: red;
    color: white;
  }
  .active{
    background: red;
    color: white;
  }
}
.img {
  float: left;
}
.nav {
  width: 20%;
  height: 100px;
  float: left;
}
.ti {
  float: left;
  color: red;
}
</style>
<template>
  <div>
    <div class="head">
      <el-input style="width:100%;margin:auto" placeholder="请输入内容" v-model="datalist">
      <template slot="append">
        <el-button @click="getdaa()" slot="append" icon="el-icon-search"></el-button>
      </template>
    </el-input>
    </div>
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img class="img" :src="item.img" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <top class="top" @seta="getda($event)"></top>
    <div class="bottom">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in listData" :key="index">
          <div class="grid-content bg-purple">
            <img class="img" :src="item.pict_url" alt />
            <div class="tp">
              <span>
                <font color="red">¥{{item.reserve_price}}</font>
              </span>
              <span>
                <font color="red">{{item.coupon_info}}</font>
              </span>
              <p>{{item.title}}</p>
              <div class="dp">
                <router-link class="a" to>{{item.nick}}</router-link>
                <a class="a" :href="item.item_url">详情</a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import top from "./top";
export default {
  data() {
    return {
      datalist: "",
      list: [],
      listData: [],
    };
  },
  components: {
    top,
  },
  mounted() {
    this.setdata();
    this.getData();
  },
  methods: {
    setdata() {
      this.$http.get("/ip/w/website/bannerList").then((res) => {
        // console.log(res);
        this.list = res.data.data;
      });
    },
    getData() {
      this.$http
        .get("/ip/w/website/findGoodsList", {
          params: {
            info: this.datalist || "配饰",
            pageNo: 1,
          },
        })
        .then((res) => {
          this.listData =
            res.data.data.tbk_dg_material_optional_response.result_list.map_data;
        });
    },
    getda(el) {
      console.log(el);
      this.datalist = el;
      this.getData();
    },
    getdaa() {
      if (this.datalist) {
        this.getData();
      }
    },
  },
};
</script>
<style scoped lang="scss">
.head{
  width: 80%;
  margin: auto;
}
.top {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 20px;
}
.banner {
  width: 80%;
  height: 300px;
  margin: 20px auto;
  //   background: #f99;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.bottom {
  width: 80%;
  margin: 20px auto;
}
.img {
  width: 100%;
  height: 234px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  padding: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #e7e9eb;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 300px;
  .tp {
    padding: 10px;
    box-sizing: border-box;
    span {
      font-size: 20px;
      padding-right: 5px;
    }
    p {
      margin: 0px;
      font-size: 14px;
      width: 216px;
      display: block;
      overflow: hidden;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .dp {
      padding-top: 5px;
      display: flex;
      justify-content: space-between;
      .a {
        font-size: 12px;
        color: #000;
        text-decoration: none;
      }
    }
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
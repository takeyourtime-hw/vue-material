<template>
  <div>
    <!-- {{data}} -->
    <div class="bottom" >
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in listData" :key="index">
          <div class="grid-content bg-purple">
            <img class="img" :src="item.pict_url" alt />
            <div class="tp">
              <span>
                <font color="red">¥{{item.reserve_price}}</font>
              </span>
              <span><font color="red">{{item.coupon_info}}</font></span>
              <p>{{item.title}}</p>
              <div class="dp">
                <router-link class="a" to="">{{item.nick}}</router-link>
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
export default {
  data() {
    return {
      listData: [],
      getname:''
    };
  },
  mounted() {
    this.getData();
   this.getname = localStorage.getItem("dataname")
    console.log(this.getname)
  },
  props:{
    data:{
      type:String,
      required:true
    }
  },
  methods: {
    getData() {
      this.$http
        .get("/ip/w/website/findGoodsList", {
          params: {
            // info: this.valueIput || "男装",
            info: this.getname,
            pageNo: 1,
          },
        })
        .then((res) => {
          console.log(res);
          this.listData =res.data.data.tbk_dg_material_optional_response.result_list.map_data;
        });
    },
    // created(){
    //   this.$on("tua",(res)=>{
    //     console.log(res)
    //   })
    // }
  },
};
</script>
<style scoped lang="scss">
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
      padding-right:5px;
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
      .a{
        font-size: 12px;
        color: #000;
        text-decoration: none;
      }
    }
  }
  // p{
  //   margin: 0px;
  //   display: block;
  //   padding: 10px;
  //   overflow: hidden;
  //   white-space:wrap;
  //   text-overflow: ellipsis;
  //   box-sizing: border-box;
  // }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
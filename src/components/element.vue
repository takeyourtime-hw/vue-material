<template>
  <div>
    <div class="div">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <i class="el-icon-edit"></i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-share"></i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <i class="el-icon-delete"></i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <el-button style="padding:9px 20px;" type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </el-col>
      </el-row>
      <!--默认按钮-->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button>默认按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="primary">主要按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="success">成功按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="info">信息按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="warning">警告按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="danger">危险按钮</el-button>
          </div>
        </el-col>
      </el-row>
      <!--朴素按钮-->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button>默认按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" plain>主要按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="success" plain>成功按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="info" plain>信息按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="warning" plain>警告按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="danger" plain>危险按钮</el-button>
          </div>
        </el-col>
      </el-row>
      <!--圆角按钮-->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button round>默认按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" round>主要按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="success" round>成功按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="info" round>信息按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="warning" round>警告按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="danger" round>危险按钮</el-button>
          </div>
        </el-col>
      </el-row>
      <!--圆图标-->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button icon="el-icon-search" circle></el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="info" icon="el-icon-message" circle></el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <div style="margin-top: 15px;">
      <el-input style="width:300px;margin:auto" placeholder="请输入内容" v-model="valueIput">
        <template slot="append">
          <el-button @click="getdata()" slot="append" icon="el-icon-search"></el-button>
        </template>
      </el-input>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop label="图标" width="150">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.pict_url" width="100" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="category_name" label="名称" width="200">
        <template slot-scope="scope">
          <div>
            <h4>
              <font color="red">{{scope.row.title}}</font>
            </h4>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="shop_title" label="店铺名称"></el-table-column>
      <el-table-column prop="zk_final_price" label="价格" width="180"></el-table-column>
      <el-table-column prop="volume" label="数量" width="180"></el-table-column>
      <el-table-column prop label="编辑" width="180"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="totlenum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listdata: [],
      tableData: [],
      totlenum: 0,
      currentPage: 1,
      pagesize: 10,
      valueIput: "",
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http
        .get("/ip/w/website/findGoodsList", {
          params: {
            info: this.valueIput || "男装",
            pageNo: this.currentPage,
          },
        })
        .then((res) => {
          console.log(res);
          (this.tableData =
            res.data.data.tbk_dg_material_optional_response.result_list.map_data),
            (this.totlenum =
              res.data.data.tbk_dg_material_optional_response.total_results);
        });
    },
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage = val;
      if (this.currentPage) {
        this.getdata();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.div {
  width: 900px;
  height: 500px;
  margin: auto;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
  text-align: center;
  line-height: 36px;
}
.bg-purple-light {
  background: #e5e9f2;
  line-height: 36px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
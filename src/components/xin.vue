<template>
  <div>
    <el-row class="warp">
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{path:'/home'}"><b>首页</b></el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户认证审核</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24" class="warp-breadcrum">
        <!--搜索栏-->
        <el-col :span="24" class="toolbar">
          <el-form :inline="true" :model="filters">
            <el-form-item>
              <template>
                <el-select v-model="filters.type" placeholder="请选择">
                  <el-option v-for="item in typeData" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item>
              <el-input v-model="filters.name" placeholder="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getUser">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-col>
      <div class="my-el-table">
        <el-table :data="data" stripe border style="width:100%" v-loading="listLoading">
          <el-table-column prop="u_uuid" label="用户ID"></el-table-column>
          <el-table-column prop="u_telephone" label="绑定手机"></el-table-column>
          <el-table-column prop="u_company_name" label="机构名称" width="300"></el-table-column>
          <el-table-column prop="u_company_licno" label="营业执照编号"></el-table-column>
          <el-table-column prop="u_create_time" label="提交时间"></el-table-column>
          <el-table-column prop="u_company_time" label="审核时间"></el-table-column>
          <el-table-column  label="认证状态">
            <template scope="scope">
              <el-tag v-if="scope.row.u_company_state == 1" type="danger">待审核</el-tag>
              <el-tag v-if="scope.row.u_company_state == 2" type="primary">审核通过</el-tag>
              <el-tag v-if="scope.row.u_company_state == 3" type="warning">审核未通过</el-tag>
              <el-tag v-if="scope.row.u_company_state == 0" type="primary">未认证</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small"  type="primary" @click="lookUser(scope.$index,scope.row.u_uuid)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar block">
          <el-pagination layout="total,prev,pager,next"  @current-change="handleCurrentChange" :page-size="15" :total="total"></el-pagination>
        </el-col>
      </div>

    </el-row>
  </div>


</template>
<script>
  export default {
    data() {
      return {
        filters:{
          name:'',
          type:1
        },
        total:0,
        pageNum:1,
        listLoading: false,
        typeData: [],
        data:[]
      }
    },
    mounted() {
//初始化
      this.typeInfo(); //分类初始化
      this.userInfo(); //用户初始化列表
    },
    methods: {
      getUser() {
        this.userInfo();
      },
      //下拉框初始化
      typeInfo() {
        this.typeData = [
          {value: 1, label:'全部'},
          {value: 2, label: '账户名'},
          {value: 3, label: '机构名称'},
          {value: 4, label: '手机号码'},
          {value: 5, label: '联系人'}];
      },

      //用户数据初始化
      userInfo() {
        this.listLoading = true;
        let url = 'm/get/authentication/user/list?type=' + this.filters.type + '&value=' + this.filters.name + '&pageNum=' + this.pageNum;
//通过接口调用数据
        this.$fetch(url).then(res => {
          if(res.errCode == 200) {
            this.data = res.errData.list;
            this.total = res.errData.count;
            this.listLoading = false;
          }
        });
      },
      //查看用户信息
      lookUser(index,row) {
        if(row !== undefined) {
          this.$router.push({path:'/usercertlook',query:{u_uuid:row}});
        }
      },
      //点击分页
      handleCurrentChange(val) {
        this.pageNum = val;
        this.userInfo();
      }
    }
  }
</script>
<template>
    <div>
        <el-container class="header">
        <el-header>
          <div class="headertop">
            <div class="child">
              <img class="img" src="../../static/logo.jpg" alt />
            </div>
            <div>
              <span>陕西睿和实业有限公司憰河工程项目部</span>
            </div>
            <div class="right">
              <el-button class="ton" type="info">通讯录</el-button>
              <div>
                <el-dropdown>
                  
                  <span class="el-dropdown-link">
                    <i class="el-icon-user-solid el-icon--right"></i>用户名
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>用户信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="tianqi"></div>
          </div>
        </el-header>
        </el-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.header {
    background-color: rgb(84, 92, 100);
  .headertop {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    line-height: 10px;
    .img {
      height: 40px;
      margin: 10px auto;
    }
    span {
      text-align: center;
      color: white;
      font-size: 18px;
      line-height: 60px;
    }
    .ton {
      padding: 5px 10px;
      margin-right: 20px;
    }
    .right {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-between;
    }
    .tianqi {
      width: 200px;
      height: 60px;
      background: white;
    }
  }
}
</style>
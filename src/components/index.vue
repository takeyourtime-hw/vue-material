<template>
  <div>
    <top />
    <div class="div">
      <div class="navleft">
        <el-scrollbar style="height:100%;overflow-x:hidden">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <span>物资计划</span>
              </template>
              <el-menu-item-group>
                <router-link to="/page/totalplan" tag="p">
                  <el-menu-item index="1-1">材料总计划</el-menu-item>
                </router-link>
                <router-link to="/page/needplan" tag="p">
                  <el-menu-item index="1-2">材料需用计划</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">材料合同</template>
                <el-menu-item index="1-4-1">合同管理</el-menu-item>
                <el-menu-item index="1-4-2">材料结算</el-menu-item>
                <el-menu-item index="1-4-3">材料付款</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>材料入场</span>
              </template>
              <el-menu-item-group>
                <router-link to="/page/admission" tag="p">
                  <el-menu-item index="2-1">入场验收</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>材料出库</span>
              </template>
              <el-menu-item-group>
                <router-link to="/page/delivery" tag="p">
                  <el-menu-item index="3-1">材料进退库</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>数据分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">echarts表格</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="5">
              <span slot="title">材料调拨</span>
            </el-menu-item>
            <el-submenu index="6">
              <template slot="title">
                <span>材料盘点</span>
              </template>
              <el-menu-item-group>
                <router-link to="/page/cntent" tag="p">
                  <el-menu-item index="6-1">仓库材料明细</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>材料配置</span>
              </template>
              <el-menu-item-group>
                <router-link to="/page/vendor" tag="p">
                  <el-menu-item index="7-1">供应商配置</el-menu-item>
                </router-link>

                <router-link to="/page/basicmaterials" tag="p">
                  <el-menu-item index="7-2">基础物资库</el-menu-item>
                </router-link>

                <router-link to="/page/warehouse" tag="p">
                  <el-menu-item index="7-3">仓库配置</el-menu-item>
                </router-link>

                <router-link to="/page/pact" tag="p">
                  <el-menu-item index="7-4">合同配置</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="navright">
        <el-scrollbar style="height:100%;overflow-x:hidden">
          <router-view />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import top from "./topheader";
export default {
  components: {
    top
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.div {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.navleft {
  width: 300px;
  height: calc(100vh - 60px);
  background-color: rgb(84, 92, 100);
}
.navright {
  flex: 1;
  height: calc(100vh - 60px);
}
</style>
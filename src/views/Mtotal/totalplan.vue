<template>
  <div>
    <p class="ptou">材料总计划</p>
    <div class="div">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="总计划名称">
          <el-input v-model="checkform.prjid" clearable @clear="getDate"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getDate()" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-button
        type="success"
        @click="dialogFormVisible = true"
        icon="el-icon-circle-plus-outline"
      >新增</el-button>
      <el-dialog title="新增计划" :visible.sync="dialogFormVisible">
        <el-form :model="checkform">
          <el-form-item label="项目ID" :label-width="formLabelWidth">
            <el-input v-model="checkform.prjid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="计划名称" :label-width="formLabelWidth">
            <el-input v-model="checkform.planname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交人" :label-width="formLabelWidth">
            <el-input v-model="checkform.cmtId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="审批人" :label-width="formLabelWidth">
            <el-input v-model="checkform.leaderNext" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交日期" :label-width="formLabelWidth">
            <el-input type="datetime-local" v-model="checkform.cdate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="材料名称" :label-width="formLabelWidth">
            <el-input v-model="checkform.mname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用位置" :label-width="formLabelWidth">
            <el-input v-model="checkform.userLoc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用量" :label-width="formLabelWidth">
            <el-input v-model="checkform.mnum" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDate()">确 定</el-button>
        </div>
      </el-dialog>

      <!-- <el-button @click="addDate()" type="success" icon="el-icon-circle-plus-outline">新增</el-button> -->
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column prop="prjid" label="项目ID" sortable width="100"></el-table-column>
        <el-table-column prop="planname" label="计划名称" sortable width="100"></el-table-column>
        <el-table-column prop="cmtId" label="提交人" sortable width="100"></el-table-column>
        <el-table-column prop="leaderNext" label="审批人" sortable width="100"></el-table-column>
        <el-table-column prop="cdate" label="提交日期" sortable width="100"></el-table-column>
        <el-table-column prop="mname" label="材料名称" sortable width="100"></el-table-column>
        <el-table-column prop="userLoc" label="使用位置" sortable width="100"></el-table-column>
        <el-table-column prop="mnum" label="使用量" sortable width="100"></el-table-column>
        <el-table-column label="备注" sortable width="150">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" @click="editdata(scope.row.prjid)">编辑</el-button>
              <el-button size="mini" type="danger" @click="deletData(scope.$index,scope.row.prjid)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="updateFormVisible">
        <el-form :model="checkform">
          <el-form-item label="项目ID" :label-width="formLabelWidth">
            <el-input v-model="checkform.prjid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="计划名称" :label-width="formLabelWidth">
            <el-input v-model="checkform.planname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交人" :label-width="formLabelWidth">
            <el-input v-model="checkform.cmtId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="审批人" :label-width="formLabelWidth">
            <el-input v-model="checkform.leaderNext" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交日期" :label-width="formLabelWidth">
            <el-input type="datetime-local" v-model="checkform.cdate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="材料名称" :label-width="formLabelWidth">
            <el-input v-model="checkform.mname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用位置" :label-width="formLabelWidth">
            <el-input v-model="checkform.userLoc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用量" :label-width="formLabelWidth">
            <el-input v-model="checkform.mnum" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="upDate()">确 定</el-button>
        </div>
      </el-dialog>
      <!-- <el-dialog :visible.sync="updateFormVisible">
        <el-form :model="checkform">
          <el-form-item label="项目ID" :label-width="formLabelWidth">
            <el-input v-model="checkform.prjid" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="deletData()">确 定</el-button>
        </div>
      </el-dialog> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      updateFormVisible: false,
      dialogFormVisible: false,
      checkform: {
        prjid: "",
        planname: "",
        cmtId: "",
        leaderNext: "",
        cdate: "",
        mname: "",
        userLoc: "",
        mnum: ""
      },
      formLabelWidth: "120px"
    };
  },
  mounted() {
    this.getDate();
    // this.addDate();
    // this.upDate();
    this.deletData()
  },
  methods: {
    editdata(val){
      // console.//////log(val);
      this.updateFormVisible=true
    },
    getDate() {
      if (this.checkform.prjid === "") {
        this.$http.get("/gp/material/totleplan/search").then(res => {
          // console.log(res);
          this.tableData = res.data.data;
        });
      } else {
        this.$http
          .get("/gp/material/totleplan/search", {
            params: this.checkform
          })
          .then(res => {
            this.tableData = res.data.data;
          });
      }
    },
    addDate() {
      if(this.checkform!=''){
        this.$http
        .get("/gp/material/totleplan/insert", {
          params: this.checkform
        })
        .then(res => {
          // console.log(res);
          this.dialogFormVisible = false;
        });
      }
      
    },
    upDate() {
      this.$http
        .get("/gp/material/totleplan/update", {
          params: this.checkform
        })
        .then(res => {
          // console.log(res);
          this.updateFormVisible = false;
        });
    },
    deletData(index,row) {
        this.$http
          .get("/gp/material/totleplan/delete/"+row)
          .then(res => {
            // console.log(res);
            this.getDate();
          });
    }
  }
};
</script>
<style lang="scss" scoped>
.ptou {
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
}
.div {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  .el-form-item {
    margin: 0px;
  }
  .div1 {
    padding: 0px 20px;
    box-sizing: border-box;
  }
}
</style>
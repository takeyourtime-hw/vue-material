<template>
  <div>
    <p class="ptou">材料总计划</p>
    <div class="div">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="总计划名称">
          <el-input v-model="checkform.cmt_man" clearable @clear="getDate"></el-input>
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
          <el-form-item label="需求计划名称" :label-width="formLabelWidth">
            <el-input v-model="checkform.mr_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交人" :label-width="formLabelWidth">
            <el-input v-model="checkform.cmt_man" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="提交时间" :label-width="formLabelWidth">
            <el-input v-model="checkform.cmt_date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="到场时间" :label-width="formLabelWidth">
            <el-input type="datetime-local" v-model="checkform.come_date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用位置" :label-width="formLabelWidth">
            <el-input v-model="checkform.userloc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用量" :label-width="formLabelWidth">
            <el-input v-model="checkform.mnum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="参考价格" :label-width="formLabelWidth">
            <el-input v-model="checkform.mprice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否超额" :label-width="formLabelWidth">
            <el-input v-model="checkform.ifover" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商确认状态" :label-width="formLabelWidth">
            <el-input v-model="checkform.prov_state" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input v-model="checkform.remark" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="计划执行人" :label-width="formLabelWidth">
            <el-input v-model="checkform.exec_man" autocomplete="off"></el-input>
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
        <el-table-column prop="prjid" label="项目ID" sortable width="150"></el-table-column>
        <el-table-column prop="mr_name" label="需求计划名称" sortable width="150"></el-table-column>
        <el-table-column prop="cmt_man" label="提交人" sortable width="150"></el-table-column>
        <el-table-column prop="cmt_date" label="提交时间" sortable width="150"></el-table-column>
        <el-table-column prop="come_date" label="到场时间" sortable width="150"></el-table-column>
        <el-table-column prop="userloc" label="使用位置" sortable width="150"></el-table-column>
        <el-table-column label="备注" sortable width="150">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" @click="editdata(scope.row.prjid)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deletData(scope.$index,scope.row.prjid)"
              >删除</el-button>
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
        <el-form-item label="需求计划名称" :label-width="formLabelWidth">
          <el-input v-model="checkform.mr_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="提交人" :label-width="formLabelWidth">
          <el-input v-model="checkform.cmt_man" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="提交时间" :label-width="formLabelWidth">
          <el-input v-model="checkform.cmt_date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="到场时间" :label-width="formLabelWidth">
          <el-input type="datetime-local" v-model="checkform.come_date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用位置" :label-width="formLabelWidth">
          <el-input v-model="checkform.userloc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用量" :label-width="formLabelWidth">
          <el-input v-model="checkform.mnum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="参考价格" :label-width="formLabelWidth">
          <el-input v-model="checkform.mprice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否超额" :label-width="formLabelWidth">
          <el-input v-model="checkform.ifover" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商确认状态" :label-width="formLabelWidth">
          <el-input v-model="checkform.prov_state" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="checkform.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="计划执行人" :label-width="formLabelWidth">
          <el-input v-model="checkform.exec_man" autocomplete="off"></el-input>
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
    </el-dialog>-->
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
        mr_name: "",
        cmt_man: "",
        cmt_date: "",
        come_date: "",
        userloc: "",
        mnum: "",
        mprice: "",
        ifover: "",
        prov_state: "",
        remark: "",
        exec_man: ""
      },
      formLabelWidth: "120px"
    };
  },
  mounted() {
    // this.getDate();
    // this.addDate();
    // this.upDate();
    this.deletData();
  },
  methods: {
    editdata(val) {
      // console.//////log(val);
      this.updateFormVisible = true;
    },
    getDate() {
      if (this.checkform.cmt_man === "") {
        this.$http.get("/gp/material/need/search").then(res => {
          console.log(res);
          this.tableData = res.data.data;
        });
      } else {
        this.$http
          .get("/gp/material/need/search", {
            params: this.checkform
          })
          .then(res => {
            console.log(res);
            this.tableData = res.data.data;
          });
      }
    },
    addDate() {
      if (this.checkform != "") {
        this.$http
          .get("/gp/material/need/insert", {
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
        .get("/gp/material/need/update", {
          params: this.checkform
        })
        .then(res => {
          // console.log(res);
          this.updateFormVisible = false;
        });
    },
    deletData(index, row) {
      this.$http.get("/gp/material/need/delete/" + row).then(res => {
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
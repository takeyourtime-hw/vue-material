<template>
  <div>
    <!-- 材料盘点 -->
    <p class="ptou">材料总计划</p>
    <div class="div">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="总计划名称">
          <el-input v-model="form.pr_id" clearable @clear="getDate"></el-input>
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
        <el-form :model="form">
          <el-form-item label="合同名称" :label-width="formLabelWidth">
            <el-input v-model="form.ct_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="合同类型" :label-width="formLabelWidth">
            <el-input v-model="form.ct_type" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth">
            <el-input v-model="form.pr_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="合同金额" :label-width="formLabelWidth">
            <el-input v-model="form.ct_sum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="付款方式" :label-width="formLabelWidth">
            <el-input v-model="form.pay_mode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="结算" :label-width="formLabelWidth">
            <el-input v-model="form.ct_state" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="签订日期" :label-width="formLabelWidth">
            <el-input v-model="form.ct_date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目Id" :label-width="formLabelWidth">
            <el-input v-model="form.prj_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="预付款" :label-width="formLabelWidth">
            <el-input v-model="form.pre_pay" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="保证金" :label-width="formLabelWidth">
            <el-input v-model="form.deposit" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="合同执行人" :label-width="formLabelWidth">
            <el-input v-model="form.ctext_man" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="审批人" :label-width="formLabelWidth">
            <el-input v-model="form.leader_next" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="材料id" :label-width="formLabelWidth">
            <el-input v-model="form.m_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="采购数量" :label-width="formLabelWidth">
            <el-input v-model="form.ctd_num" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="采购单价" :label-width="formLabelWidth">
            <el-input v-model="form.ctd_money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="结算" :label-width="formLabelWidth">
            <el-input v-model="form.ctd_state" autocomplete="off"></el-input>
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
        <el-table-column prop="ct_name" label="合同名称" sortable width="150"></el-table-column>
        <el-table-column prop="ct_type" label="合同类型" sortable width="150"></el-table-column>
        <el-table-column prop="pr_id" label="供应商" sortable width="150"></el-table-column>
        <el-table-column prop="ct_sum" label="合同金额" sortable width="150"></el-table-column>
        <el-table-column prop="pay_mode" label="付款方式" sortable width="150"></el-table-column>
        <el-table-column prop="ct_state" label="结算" sortable width="150"></el-table-column>
        <el-table-column label="备注" sortable width="150">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" @click="editdata(scope.row.ct_name)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deletData(scope.$index,scope.row.prj_id)"
              >删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="updateFormVisible">
      <el-form :model="form">
        <el-form-item label="合同名称" :label-width="formLabelWidth">
          <el-input v-model="form.ct_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="合同类型" :label-width="formLabelWidth">
          <el-input v-model="form.ct_type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input v-model="form.pr_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="合同金额" :label-width="formLabelWidth">
          <el-input v-model="form.ct_sum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="付款方式" :label-width="formLabelWidth">
          <el-input v-model="form.pay_mode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="结算" :label-width="formLabelWidth">
          <el-input v-model="form.ct_state" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="签订日期" :label-width="formLabelWidth">
          <el-input v-model="form.ct_date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目Id" :label-width="formLabelWidth">
          <el-input v-model="form.prj_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="预付款" :label-width="formLabelWidth">
          <el-input v-model="form.pre_pay" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保证金" :label-width="formLabelWidth">
          <el-input v-model="form.deposit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="合同执行人" :label-width="formLabelWidth">
          <el-input v-model="form.ctext_man" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审批人" :label-width="formLabelWidth">
          <el-input v-model="form.leader_next" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="材料id" :label-width="formLabelWidth">
          <el-input v-model="form.m_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="采购数量" :label-width="formLabelWidth">
          <el-input v-model="form.ctd_num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="采购单价" :label-width="formLabelWidth">
          <el-input v-model="form.ctd_money" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="结算" :label-width="formLabelWidth">
          <el-input v-model="form.ctd_state" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="upDate()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      updateFormVisible: false,
      dialogFormVisible: false,
      form: {
        prjid: "",
        inputid: "",
        teamid: "",
        iptDate: "",
        filepaths: "",
        state: "",
        mmid: "",
        mloc: "",
        mnum: "",
        repoid: ""
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
      if (this.form.ct_name === "") {
        console.log(this.form.ct_name);
        this.$http.get("/gp/material/content/find").then(res => {
          console.log(res);
          this.tableData = res.data.data;
        });
      } else {
        console.log(this.form.ct_name);
        this.$http
          .get("/gp/material/content/find" + this.form.ct_name)
          .then(res => {
            console.log(res);
            this.tableData = res.data.data;
          });
      }
    },
    addDate() {
      if (this.form != "") {
        this.$http
          .get("/gp/material/content/add", {
            params: this.form
          })
          .then(res => {
            // console.log(res);
            this.dialogFormVisible = false;
          });
      }
    },
    upDate() {
      this.$http
        .get("/gp/material/content/update", {
          params: this.form
        })
        .then(res => {
          // console.log(res);
          this.updateFormVisible = false;
        });
    },
    deletData(index, row) {
      this.$http.get("/gp/material/content/del" + row).then(res => {
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
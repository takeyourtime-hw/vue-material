<template>
  <div>
    <div class="div">
      <div class="rege">
        <p>材料管理登录界面</p>
        <div class="zhce">
          <input @keydown="keyup()" type="text" v-model="usernameModel" placeholder="用户名" />
          <input type="password" maxlength="11" v-model="passwordModel" placeholder="密码" />
        </div>
        <div class="yes">
          <el-button @click="getData()" class="but" type="warning">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usernameModel: "",
      passwordModel: "",
      eInput: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.usernameModel && this.passwordModel) {
        this.$http
          .post("/gp/users/login", {
            username: this.usernameModel,
            password: this.passwordModel,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token",res.data.token)
          });
        alert("登录成功");
      }
    },
    keyup() {
      if(this.usernameModel && this.passwordModel==""){
      }
    }
    // getData() {
    //   this.$http
    //     .post("/gp/login", {
    //       username: this.usernameModel,
    //       password: this.passwordModel,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
.div {
  width: 100%;
  height: 590px;
  position: relative;
  background: url(../../static/2.jpg) no-repeat;
  background-size: cover;
  img {
    width: 100%;
  }
  .rege {
    width: 350px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 5px rgba($color: #3a3939, $alpha: 0.7);
    position: absolute;
    right: 450px;
    top: 150px;
    background: rgb(82, 80, 80);
    p {
      text-align: center;
      line-height: 40px;
      font-size: 24px;
      padding: 10px 0px;
    }
    .zhce {
      width: 300px;
      margin: auto;
    }
    input {
      width: 100%;
      height: 30px;
      display: inline-block;
      margin: 15px 0px;
      text-indent: 10px;
      border-radius: 5px;
      border: 1px solid rgb(59, 59, 59);
      outline: none;
    }
    .yes {
      width: 300px;
      height: 30px;
      line-height: 30px;
      margin: 20px auto;
      text-align: center;
      .but {
        padding: 12px 20px;
      }
    }
  }
}
</style>
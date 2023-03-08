<template>
  <div class="login">
    <div class="login-from">
      <h2 class="sign">登陆注册</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-s-custom" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            prefix-icon="el-icon-unlock"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="zzz">
          <el-input v-model.number="ruleForm.code" maxlength="4" prefix-icon="el-icon-loading"></el-input>
          <img @click="changeSrc" :src="code_src" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4());
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      console.log(value);
      let are = /^[^0~9]\w{5,12}$/;
      if (!are.test(value)) {
        callback(new Error("账号输入有误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!value == /^[^0~9]\w{5,12}$/.test(value)) {
        callback(new Error("密码错误!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: checkAge, trigger: "blur" }]
      },
      code_src: "",
      uuid: ""
    };
  },
  methods: {
    reRenderCode() {
      let uuid = uuidv4();
      this.uuid = uuid;
      this.code_src = `https://www.chengzier.cn:8000/api/generateimagecode?uuid=${uuid}`;
    },
    changeSrc() {
      this.reRenderCode();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          //发送请求
          this.$http({
            url: "api/supersignin",
            method: "POST",
            data: `username=${this.ruleForm.username}&password=${this.ruleForm.password}&uuid=${this.uuid}&text=${this.ruleForm.code}`
          })
            .then(res => {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              console.log(res.data);
              this.$router.push('/')

            })
            .catch(error => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    console.log(11);
    this.reRenderCode();
    this.timmer = setInterval(() => {
      this.reRenderCode();
    }, 1000 * 60);
  },
  beforeDestroy() {
    clearInterval(this.timmer);
  }
};
</script>
<style>
.el-form .el-form-item .el-form-item__content {
  margin: 0 !important;
  background-color: rgb(0, 0, 0, 0.1);
}
.el-form .el-form-item input {
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  color: #fff;
}
.login .zzz .el-form-item__content {
  display: flex;
  height: 40px;
}
</style>
<style lang="less" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2d3a4b;
}
.login-from {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.sign {
  text-align: center;
  color: #fff;
}
</style>

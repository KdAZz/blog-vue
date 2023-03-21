<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules" >
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
        <button
            type="button"
            class="delete"
            @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
              type="text"
              v-model="loginForm.username"
              placeholder="Your email"
              required>
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
              type="password"
              v-model="loginForm.password"
              password-reveal
              placeholder="Your password"
              required>
          </b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <b-button
            label="Close"
            @click="$emit('close')" />
        <b-button
            label="Login"
            type="is-primary"
            @click="test"
        />
      </footer>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "ModalForm",
  data() {
    return {
      loginForm:{
        username:"",
        grant_type:"password",
        password:""
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    }
  },
  methods: {
    test() {
      this.$refs.loginForm.validate((valid)=>{
        if (valid) {
          this.$store
              .dispatch("user/login", this.loginForm)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

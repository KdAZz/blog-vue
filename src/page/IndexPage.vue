<template>
  <div>
    <template>
      <b-navbar :fixed-top="true">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item href="/">
            首页
          </b-navbar-item>
          <b-navbar-item href="/UserCenter">
            用户中心
          </b-navbar-item>
          <b-navbar-dropdown label="信息">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
            <b-navbar-item href="#">
              Contact
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>

        <template #end>
          <div v-if="token != null && token !== ''">
            <div style="margin: 4px;display: flex;align-items: center">

              <el-avatar style="text-align: center;display:block;"
                         :src="avatar">cc</el-avatar>
              <span style="font-size: 20px">{{ name }}</span>
            </div>
          </div>
          <b-navbar-item v-else tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <b-button class="button is-light" @click="cardModal">
                Log in
              </b-button>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <HomePage style="float: top;margin-top: 10px"></HomePage>
  </div>
</template>

<script>
import HomePage from "@/page/HomePage.vue";
import ModalForm from "@/components/ModalForm.vue";
import {mapGetters} from "vuex";


export default {
  name: 'IndexPage',
  components: {HomePage},
  computed: {
    ...mapGetters([
      'token',
      'name',
      'avatar'
    ])
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>

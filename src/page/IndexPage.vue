<template>
  <div >
    <template>
      <b-navbar :fixed-top="true">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item href="#">
            Home
          </b-navbar-item>
          <b-navbar-item href="#">
            Documentation
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
            <b-navbar-item href="#">
              Contact
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <b-button class="button is-light"  @click="cardModal" >
                Log in
              </b-button>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
      <HomePage style="float: top;margin-top: 10px;background-color: #f5f5f5"></HomePage>
  </div>
</template>

<script>
import HomePage from "@/page/HomePage.vue";
import ModalForm from "@/components/ModalForm.vue";
export default {
  name: 'IndexPage',
  components: {HomePage},
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

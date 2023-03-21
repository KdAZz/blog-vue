<template>
  <div>
    <div class="container  is-max-widescreen" >
        <div class="columns" style="height: 100%">
          <div class="column">
            <div class="card" style="height: 100%"></div>
          </div>
          <div class="column is-half" style="margin: auto">
            <b-tabs v-model="activeTab">
              <b-tab-item label="首页" name="first"><InfoCard :msg="home"/></b-tab-item>
              <b-tab-item label="热门" name="second"><InfoCard/></b-tab-item>
              <b-tab-item label="关注" name="third"><InfoCard/></b-tab-item>
              <b-tab-item label="文章" name="fourth"><InfoCard/></b-tab-item>
            </b-tabs>
          </div>
          <div class="column">
            <div class="card" style="height: 100%"></div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard.vue";
export default {
  name: 'HomePage',
  components: {InfoCard},
  data() {
    return {
      activeTab: 0,
      home: 'home'
    };
  },
}
</script>

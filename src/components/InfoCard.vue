<template>
  <div>
    <div class="card" style="margin-bottom: 10px;" v-for="blog in blogs" v-bind:key="blog.id">
      <header class="card-header">
        <div style="margin: 4px">
          <el-avatar style="text-align: center;display:block;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <b-button rounded size="is-small" type="is-primary" outlined style="margin: auto 5px auto auto;">＋关注</b-button>
      </header>
      <div class="card-content">
        <div class="content">
            {{blog.content}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          <b-icon icon="share-variant-outline"></b-icon>
        </a>
        <a href="#" class="card-footer-item" @click="show(blog.id)">
          <b-icon icon="comment-processing-outline"></b-icon>
        </a>
        <a href="#" class="card-footer-item">
          <b-icon icon="thumb-up-outline"></b-icon>
          <span>999+</span>
        </a>
      </footer>
      <Comment :msg="blog.id" v-if="visible[blog.id]"/>
    </div>
  </div>
</template>

<script>
import {getList} from "@/api/blog/blogApi";
import Comment from "@/components/Comment.vue";
export default {
  name: "InfoCard",
  components: {Comment},
  props:['msg'],
  data(){
    return{
      blogs: {},
      myMsg: this.msg,
      visible: []
    }
  },
  mounted() {
    getList().then((value)=>{
      const {data} = value
      this.blogs = data.records
      for (let i = 0; i < this.blogs.length; i++) {
        this.$set(this.visible, i, false)
      }
    })
  },
  methods: {
    show(id){
      if (this.visible[id]){
        this.$set(this.visible, id, false)
      }else {
        this.$set(this.visible, id, true)
      }
    }
  }
}
</script>

<style scoped lang="css">
</style>

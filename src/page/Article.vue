<template>
  <div>
    <div class="banner">
      <header role="banner" class="banner-container">
        <a style="align-items: center">
          <img src="@/assets/logo.png" width="30">
        </a>
      </header>
    </div>
    <el-container>
      <el-header
          style="height: auto;margin-top: 50px;background-color: white;box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);">
        <div style="padding-left: calc(50vw - 500px);margin:10px 0; display: -webkit-box;">
          <div class="header-main">
            <h1 style="margin-bottom: 0px" class="title">{{ article.content.title }}</h1>
            <span>{{ article.authorName }}</span>
          </div>
        </div>
      </el-header>
      <el-container class="container">
        <el-main class="markdown-body">
          <vue-markdown :source="article.content.content"></vue-markdown>
        </el-main>
        <el-aside class="asideContainer">
          <div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>关于作者</span>
              </div>
            </el-card>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown/src/VueMarkdown";
import {getArticleById} from "@/api/blog/articleApi";

export default {
  name: "Article",
  components: {
    VueMarkdown
  },
  data() {
    return {
      md: "",
      articleId: '',
      article: {}
    }
  },
  created() {
    this.articleId = this.$route.query.id
    getArticleById(this.articleId).then((value) => {
      this.article = value.data
      console.log(this.article)
    })
  }
}
</script>

<style scoped>
@import 'github-markdown-css/github-markdown-light.css';

.markdown-body {
  width: 694px;
  /*background-color: white;*/
  margin-right: 10px;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 2px;
}

.banner {
  width: 100%;
  height: 50px;
  z-index: 999;
  position: fixed;
  background-color: white;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 2px;
}

.asideContainer {
  width: 200px;
}

.container {
  margin-top: 10px;
}

.header-main {
  box-sizing: border-box;
  flex-shrink: 0;
  padding-left: 20px;
  width: 694px;
}

.header-side {
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 285px;
  min-width: 216px;
  text-align: left;
}

.banner-container {
  height: 100%;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 55px;
  margin: 0 auto;
}
</style>

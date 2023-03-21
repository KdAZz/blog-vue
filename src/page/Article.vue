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
      <el-header style="height: auto;margin-top: 50px;background-color: white;box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);">
        <div style="padding-left: calc(50vw - 500px);margin:10px 0; display: -webkit-box;">
          <div class="header-main">
            <h1 style="margin-bottom: 0px" class="title">这是标题</h1>
            <span>kdazz</span>
          </div>
          <div class="header-side">
            <span>浏览人数</span>
          </div>
        </div>
      </el-header>
      <el-container class="container">
        <el-main class="markdown-body">
          <vue-markdown :source="md"></vue-markdown>
        </el-main>
        <el-aside class="asideContainer">
          <div style="height: 5000px">
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
export default {
  name: "Article",
  components: {
    VueMarkdown
  },
  data() {
    return {
      md: ""
    }
  },
  created() {
    this.md = "\n" +
        "当然，如果这个时候我们重启刚刚关闭的Eureka服务器，会自动同步其他Eureka服务器的数据。\n" +
        "\n" +
        "***\n" +
        "\n" +
        "## LoadBalancer 负载均衡\n" +
        "\n" +
        "前面我们讲解了如何对服务进行拆分、如何通过Eureka服务器进行服务注册与发现，那么现在我们来看看，它的负载均衡到底是如何实现的，实际上之前演示的负载均衡是依靠LoadBalancer实现的。\n" +
        "\n" +
        "在2020年前的SpringCloud版本是采用Ribbon作为负载均衡实现，但是2020年的版本之后SpringCloud把Ribbon移除了，进而用自己编写的LoadBalancer替代。\n" +
        "\n" +
        "那么，负载均衡是如何进行的呢？\n" +
        "\n" +
        "### 负载均衡\n" +
        "\n" +
        "实际上，在添加`@LoadBalanced`注解之后，会启用拦截器对我们发起的服务调用请求进行拦截（注意这里是针对我们发起的请求进行拦截），叫做`LoadBalancerInterceptor`，它实现`ClientHttpRequestInterceptor`接口：\n" +
        "\n" +
        "```java\n" +
        "@FunctionalInterface\n" +
        "public interface ClientHttpRequestInterceptor {\n" +
        "    ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException;\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "主要是对`intercept`方法的实现："
  }
}
</script>

<style scoped>
@import 'github-markdown-css/github-markdown-light.css';
.markdown-body{
  width: 694px;
  /*background-color: white;*/
  margin-right: 10px;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 2px;
}
.banner{
  width: 100%;
  height: 50px;
  z-index:999;
  position:fixed;
  background-color: white;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 2px;
}
.asideContainer{
  width: 200px;
}
.container{
  margin-top: 10px;
}
.header-main{
  box-sizing: border-box;
  flex-shrink: 0;
  padding-left: 20px;
  width: 694px;
}
.header-side{
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 285px;
  min-width: 216px;
  text-align: left;
}
.banner-container{
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

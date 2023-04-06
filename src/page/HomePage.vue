<template>
  <div>
    <div class="container is-max-desktop">
      <div class="columns" style="height: 100%">
        <div class="column is-two-thirds" style="margin: auto">
          <b-tabs v-if="activeIndex === '1'" v-model="activeTab">
            <b-tab-item label="首页" name="first">
              <InfoCard :msg="home"/>
            </b-tab-item>
            <b-tab-item label="关注" name="third">
              <InfoCard :follower="follower"/>
            </b-tab-item>
          </b-tabs>
          <div v-else>
            <ArticlePage/>
          </div>
        </div>
        <div class="column">
          <el-card style="margin-bottom: 7px;">

            <div class="CreatorEntrance-title" style="display: -webkit-flex;">
              创作中心
            </div>
            <div v-if="token != null && token !== ''">
              <div style="margin-top:10px;margin-bottom: 7px; padding-bottom: 10px;">
                <div class="Followed Border">
                  <p class="NumberBoard-itemName">微博</p>
                  <p class="NumberBoard-itemValue" title="8">{{ num[1] }}</p>
                </div>
                <div class="Followed">
                  <p class="NumberBoard-itemName">文章</p>
                  <p class="NumberBoard-itemValue" title="8">{{ num[0] }}</p>
                </div>
              </div>
              <el-button @click="createCenter" style="width: 100%; margin-top: 10px" type="primary" plain>
                进入创作中心<i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
            <div v-else
                 style="text-align: center;height: 100px; color: #831ac7; font-size: larger; line-height:100px;">
              请登录使用本功能
            </div>
          </el-card>
          <el-card style="margin-bottom: 7px;">

            <div class="CreatorEntrance-title" style="display: -webkit-flex;">
              随手发条博客吧
            </div>
            <div v-if="token != null && token !== ''">
              <el-input style="margin: 10px 0"
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="textarea">
              </el-input>
              <div style="margin-bottom: 25px">
                <el-button style="float: right" @click = "submitBlog" type="primary" size="small">发送</el-button>
              </div>
            </div>
            <div v-else
                 style="text-align: center;height: 100px; color: #831ac7; font-size: larger; line-height:100px;">
              请登录使用本功能
            </div>
          </el-card>

          <el-col :span="12" class="el-card" style="width: 100%">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                :router="false">
              <el-menu-item @click="Blog">
                <i class="el-icon-menu"></i>
                <span slot="title">博客</span>
              </el-menu-item>
              <el-menu-item @click="Article">
                <i class="el-icon-document"></i>
                <span slot="title">文章</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard.vue";
import {mapGetters} from "vuex";
import ArticlePage from "@/page/ArticlePage.vue";
import {getNum} from "@/api/blog/articleApi";
import {createBlog} from "@/api/blog/blogApi";

export default {
  name: 'HomePage',
  components: {ArticlePage, InfoCard},
  data() {
    return {
      textarea: '',
      activeTab: 0,
      home: 'home',
      follower: 'follower',
      activeIndex: '1',
      num: []
    };
  },
  computed: {
    ...mapGetters([
      'token',
      'userId'
    ])
  },
  mounted() {
    if (this.token != null && this.token !== '') {
      console.log(this.token)
      getNum({userId: this.userId}).then(value => {
        this.num = value.data
      })
    }
  },
  methods: {
    Blog() {
      this.activeIndex = '1'
    },
    Article() {
      this.activeIndex = '2'
    },
    createCenter() {
      this.$router.push('/Create')
    },
    submitBlog() {
      createBlog({content: this.textarea, commentCount: 0, forwardCount: 0, authorId: this.userId }).then(() => {
        this.$message({
          message: '发表成功',
          type: 'success'
        });
        this.textarea = ''
      })
    }
  }
}
</script>
<style>
.CreatorEntrance-title {
  font-size: 14px;
  font-synthesis: style;
  font-weight: 600;
}

.Followed {
  width: 50%;
  float: left;
  height: 100%;
  padding: 5px 0px;
  justify-content: center;
  align-items: Center;
}

.Border {
  border: 1px none #ccd2e0;
  border-right-style: solid;
}

.NumberBoard-itemName {
  color: #8590a6;
  font-size: 14px;
  text-align: center;
}

.NumberBoard-itemValue {
  color: #121212;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}
</style>

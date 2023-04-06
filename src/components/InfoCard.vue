<template>
  <div>
    <div class="card" style="margin-bottom: 10px;" v-for="(blog, index) in blogs" v-bind:key="blog.id">
      <header class="card-header">
        <div style="margin: 4px; display: flex;align-items: center">
          <el-avatar style="text-align: center;display:block;"
                     :src="blog.avatar"></el-avatar>
          <span style="font-size: 15px">&nbsp;&nbsp;{{ blog.nickName }}</span>
        </div>
        <b-button v-if="followerList.indexOf(blog.authorId) === -1" @click="follow(blog.authorId)" rounded
                  size="is-small" type="is-primary is-light" style="margin: auto 5px auto auto;">＋关注
        </b-button>
        <b-button v-else @click="cancelFollow(blog.authorId)" rounded size="is-small" type="is-primary"
                  style="margin: auto 5px auto auto;">已关注
        </b-button>
      </header>
      <div class="card-content">
        <div class="content">
          {{ blog.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="show(blog.id)">
          <b-icon icon="comment-processing-outline"></b-icon>
          <span v-if="blog.commentCount < 1000">
                        {{ blog.commentCount }}
                    </span>
          <span v-else>999+</span>
        </a>
        <a href="#" @click="addLike(index)" class="card-footer-item">
          <b-icon icon="thumb-up-outline"></b-icon>
          <span v-if="blog.likeNum < 1000">
                        {{ blog.likeNum }}
                    </span>
          <span v-else>999+</span>
        </a>
        <a href="#" class="card-footer-item">
          <b-icon icon="thumb-down-outline"></b-icon>
          <span v-if="blog.dislikeNum < 1000">
                        {{ blog.dislikeNum }}
                    </span>
          <span v-else>999+</span>
        </a>
      </footer>
      <Comment :msg="blog.id" v-if="visible[blog.id]"/>
    </div>
    <div class="center con-pagination">
      <vs-pagination v-model="page" :length="pages" not-margin progress/>
    </div>
  </div>
</template>

<script>
import {addFollow, addLike, deleteFollow, followList, getFollower, getList} from "@/api/blog/blogApi";
import Comment from "@/components/Comment.vue";
import {mapGetters} from "vuex";

export default {
  name: "InfoCard",
  components: {Comment},
  props: ['msg', 'follower'],
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  watch: {
    //开始监听返回该对象属性值计算属性
    page: function (newVal, oldVal) {
      if (this.myMsg === "home") {
        getList({page: newVal, pageSize: this.pageSize}).then((value) => {
          const {data} = value
          this.blogs = data.records
          this.pages = data.pages
          console.log(oldVal)
          for (let i = 0; i < this.blogs.length; i++) {
            this.$set(this.visible, i, false)
          }
        })
      } else {
        getFollower({page: newVal, pageSize: this.pageSize}, this.userId).then((value) => {
          const {data} = value
          this.blogs = data.records
          this.pages = data.pages
          for (let i = 0; i < this.blogs.length; i++) {
            this.$set(this.visible, i, false)
          }
        })
      }
    }
  },
  data() {
    return {
      pages: null,
      blogs: {},
      myMsg: this.msg,
      myFollower: this.follower,
      visible: [],
      followerList: [],
      pageSize: 6,
      page: 1
    }
  },
  mounted() {
    if (this.userId !== undefined) {
      followList(this.userId).then((value) => {
        const {data} = value
        this.followerList = data
      })
    }
    if (this.myMsg === "home") {
      getList({page: this.page, pageSize: this.pageSize}).then((value) => {
        const {data} = value
        this.blogs = data.records
        this.pages = data.pages
        for (let i = 0; i < this.blogs.length; i++) {
          this.$set(this.visible, i, false)
        }
      })
    }
    if (this.myFollower === "follower" && this.userId != null) {
      getFollower({page: this.page, pageSize: this.pageSize}, this.userId).then((value) => {
        const {data} = value
        this.blogs = data.records
        this.pages = data.pages
        for (let i = 0; i < this.blogs.length; i++) {
          this.$set(this.visible, i, false)
        }
      })
    }
  },
  methods: {
    addLike(index) {
      let articleId = this.blogs[index].id
      if (this.userId !== undefined) {
        addLike({userId: this.userId, articleId: articleId }).then(() => {
          this.blogs[index].likeNum = this.blogs[index].likeNum + 1
          this.$message({
            message: '点赞成功',
            type: 'success'
          });
        })
      }else {
        this.$message({
          message: '请登录使用哦',
          type: 'warning'
        });
      }
    },
    show(id) {
      if (this.visible[id]) {
        this.$set(this.visible, id, false)
      } else {
        this.$set(this.visible, id, true)
      }
    },
    follow(authorId) {
      if (this.userId !== '' && this.userId !== undefined) {
        console.log("come in")
        addFollow({authorId: authorId, userId: this.userId}).then(() => {
          this.followerList.push(authorId)
        })
      }
    },
    cancelFollow(authorId) {
      if (this.userId !== '' && this.userId !== undefined) {
        deleteFollow({authorId: authorId, userId: this.userId}).then(() => {
          this.followerList.forEach(function (item, index, arr) {
            if (item === authorId) {
              arr.splice(index, 1);
            }
          });
        })
      }
    }
  }
}
</script>

<style scoped lang="css">
</style>

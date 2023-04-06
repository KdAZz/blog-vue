<template>
  <div class="container">
    <div class="column is-full">
      <a-card
          title=" 主题 / 发布主题"
          class="box-card"
          shadow="never"
      >
        <div>
          <el-form
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              class="demo-ruleForm"
          >
            <el-form-item prop="title">
              <el-input
                  size="small"
                  v-model="ruleForm.title"
                  placeholder="输入标题名称"
              />
            </el-form-item>

            <el-form-item prop="introduction">
              <el-input
                  size="small"
                  v-model="ruleForm.introduction"
                  placeholder="输入简介"
              />
            </el-form-item>

            <el-form-item prop="category" label="文章类型">
              <el-select placeholder="请选择类型" style="width: 120px"
                         v-model="ruleForm.categoryId">
                <el-option v-for="list in lists" :key="list.id"
                           :label="list.categoryName"
                           :value="list.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-from-item>
              <el-upload
                  class="upload-demo"
                  action="http://119.3.124.132:9999/service-article/admin/upload/file"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handleAvatarSuccess"
                  :limit="1"
                  :file-list="fileList"
                  list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-from-item>
            <!--Markdown-->
            <div id="vditor"/>

            <el-form-item>
              <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
              >立即创建
              </el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import {createArticle, getCategory} from "@/api/blog/articleApi";
import {mapGetters} from "vuex";

export default {
  name: 'TopicPost',
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  data() {
    return {
      url: '',
      fileList: {},
      lists: {},
      contentEditor: {},
      response: {
        name: '',
        state: '',
        url: '',
      },
      ruleForm: {
        title: '', // 标题
        content: '',// 内容
        categoryId: '',
        authorId: '',
        imgUrl: '',
        introduction: '',
        status: 1
      },
      rules: {
        title: [
          {required: true, message: '请输入标题名称', trigger: 'blur'},
          {
            min: 1,
            max: 25,
            message: '长度在 1 到 25 个字符',
            trigger: 'blur'
          }
        ],
        introduction: [
          {required: true, message: '请输入简介名称', trigger: 'blur'},
          {
            min: 1,
            max: 25,
            message: '长度在 1 到 25 个字符',
            trigger: 'blur'
          }
        ],
      }
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 500,
      placeholder: '此处为话题内容……',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      mode: 'sv'
    })
  },
  created() {
    this.Category();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.ruleForm.imgUrl = res.data
    },
    Category() {
      getCategory().then((value) => {
        const {data} = value
        this.lists = data
      })
    },
    submitForm() {
      this.ruleForm.authorId = this.userId
      this.ruleForm.content = this.contentEditor.getValue()
      console.log(this.ruleForm)
      createArticle(this.ruleForm).then(() => {
        console.log("success")
        this.$notify({
          title: '发表成功',
          message: '即将返回'
        });
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style>
</style>

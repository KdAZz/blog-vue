<template>
    <div class="container">
        <div class="grid-3_xs-1_sm-2_md-2" style="display: flex">
            <div
                :key="index"
                v-for="(article, index) in sliceList(articles.records, 2)"
                class="col center"
            >
                <div v-for="(item, i) in article">
                    <Posts :key="i" style="margin: 10px 10px" :post="item"/>
                </div>
            </div>
        </div>
        <div class="center con-pagination">
            <vs-pagination v-model="page" :length="articles.pages" not-margin progress/>
        </div>
    </div>
</template>

<script>
import {getArticle} from "@/api/blog/articleApi";
import Posts from "@/components/Posts.vue"

export default {
    name: "ArticlePage",
    components: {Posts},
    data() {
        return {
            articles: {},
            page: 1,
            pageSize: '6'
        }
    },
    watch: {
        //开始监听返回该对象属性值计算属性
        page: function (newVal, oldVal) {
            getArticle({page: newVal, pageSize: this.pageSize}).then((value) => {
                const {data} = value
                this.articles = data
                console.log(oldVal)
            })
        }
    },
    computed: {
        sliceList() {
            return function (data, count) {
                if (data !== undefined) {
                    let index = 0;
                    let arrTemp = [];
                    for (let i = 0; i < data.length; i++) {
                        index = parseInt(i / count);
                        if (arrTemp.length <= index) {
                            arrTemp.push([]);
                        }
                        arrTemp[index].push(data[i])
                    }
                    return arrTemp
                }
            }
        }
    },
    mounted() {
        getArticle({page: this.page, pageSize: this.pageSize}).then((value) => {
            const {data} = value
            this.articles = data
            console.log(this.articles)
        })
    },
    methods: {
    }
}
</script>
<style scoped>
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

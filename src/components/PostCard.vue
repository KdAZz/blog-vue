<template>
    <router-link :to="{path:'/Article',query: {id: post.id}}">
        <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
                <span>{{ post.nickname }}</span>
                <br/>
                <br/>
                <span style="color: #8590a6;">{{ post.introduction }}</span>
            </div>
        </el-card>
    </router-link>
</template>

<script>

export default {
    name: 'PostCard',
    props: [
        'post'
    ],
    data: function () {
        return {}
    },
    mounted() {
        console.log(this.post)
    }
}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>

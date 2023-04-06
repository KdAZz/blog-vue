<template>
    <div>
        <router-link :to="{path:'/Article',query: {id: post.id}}">
        <vs-card class="post-card">
            <template #title>
                <h3>{{post.title}}</h3>
                <small>2021/03/01</small>
            </template>
            <template #img>
                <img style="width: 280px; height: 100px" :src="post.imgUrl" alt />
            </template>
            <template #text>
                <p class="post-txt">{{ post.introduction }}</p>
            </template>

        </vs-card>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    props: [
        'post'
    ]
}
</script>

<style>
.post-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    display: auto;
}

.post-card .vs-card {
    height: 280px !important;
}

</style>

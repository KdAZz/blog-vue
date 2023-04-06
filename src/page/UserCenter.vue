<template>
    <div>
        <div class="container is-max-desktop">
            <el-card :body-style="{ padding: '0px' }">
                <div class="UserCover UserCover--colorBlock"></div>
                <div class="ProfileHeader-wrapper">
                    <div class="ProfileHeader-main">
                        <div class="ProfileHeader-avatar" style="top: -74px;">
                            <div class="UserAvatar">
                                <img class="Avatar" width="160" height="160"
                                     :src="userInfo.avatar"
                                     srcset="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c 2x"
                                     alt="">
                            </div>
                        </div>
                        <div class="ProfileHeader-content">
                            <div style="margin-bottom: 16px;">
                                <h1 style="display: flex; align-items: center">
                                    <span class="ProfileHeader-name">{{ userInfo.nickname }}</span>
                                    <span class="ztext ProfileHeader-headline">{{ userInfo.email }}</span>
                                </h1>
                            </div>
                            <div class="ProfileHeader-contentFooter">
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
            <div style="margin-top: 7px" class="columns">
                <div class="column" style="padding: 0">
                    <el-card style="margin-bottom: 7px; padding-bottom: 10px;">
                        <div class="Followed Border">
                            <p class="NumberBoard-itemName">关注了</p>
                            <p class="NumberBoard-itemValue" title="8">{{ followInfo[1] }}</p>
                        </div>
                        <div class="Followed">
                            <p class="NumberBoard-itemName">关注者</p>
                            <p class="NumberBoard-itemValue" title="8">{{ followInfo[0] }}</p>
                        </div>
                    </el-card>
                    <el-card style="margin-bottom: 7px;">
                        <div class="CreatorEntrance-title" style="display: -webkit-flex;">
                            等级中心
                            <div class="level">
                                Lv1
                            </div>
                        </div>
                        <div style="margin-top: 7px;border-radius: 4px;">
                            <el-carousel height="120px" direction="vertical" :autoplay="false">
                                <el-carousel-item v-for="item in 3" :key="item">
                                    <p class="medium">{{ item }}</p>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <el-button @click="pointCenter" style="width: 100%; margin-top: 10px" type="primary" plain>
                            进入升级中心<i class="el-icon-arrow-right"></i>
                        </el-button>
                    </el-card>
                    <el-col :span="12" class="el-card" style="width: 100%">
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-vertical-demo"
                            :router="true">
                            <el-menu-item index="/UserCenter/HomeComponent">
                                <i class="el-icon-menu"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>
                            <el-menu-item index="/UserCenter/UserInfo">
                                <i class="el-icon-document"></i>
                                <span slot="title">个人信息</span>
                            </el-menu-item>
                            <el-menu-item index="/UserCenter/SettingCenter">
                                <i class="el-icon-setting"></i>
                                <span slot="title">设置中心</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </div>
                <el-card style="margin-left: 7px; padding-top: 0;" class="column is-two-thirds">
                    <el-main style="padding: 0">
                        <router-view/>
                    </el-main>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {getFollow, getInfo} from "@/api/admin/user";

export default {
    name: "UserCenter",
    data() {
        return {
            activeIndex: '/UserCenter/HomeComponent',
            followInfo: [],
            userInfo: {}
        }
    },
    computed: {
        ...mapGetters([
            'token',
            'userId'
        ])
    },
    mounted() {
        if (this.token === '' || this.token === undefined) {
            this.$notify({
                title: '当前用户未登录',
                message: '即将返回'
            });
            setTimeout(() => {
                this.$router.push('/')
            }, 1000)
        } else {
            getFollow({userId: this.userId}).then(value => {
                this.followInfo = value.data
            })
            getInfo().then(value => {
                this.userInfo = value.data
            })
        }
    },
    methods: {
        pointCenter() {
            this.$router.push('/PointCenter')
        },
        editPersonalInfo() {
            this.$router.push('/PersonalInfo')
        }
    }
}
</script>

<style scoped>
.UserCover {
    background: #f6f6f6;
    height: 240px;
    overflow: hidden;
    position: relative;
}

.ProfileHeader-wrapper {
    background: #fff;
    position: relative;
    width: 100%;
}

.UserCover--colorBlock {
    background: #999;
    height: 132px;
}

.ProfileHeader-avatar {
    left: 0;
    position: absolute;
    top: -25px;
    z-index: 1;
}

.ProfileHeader-content {
    border-left: 164px solid transparent;
    padding-left: 32px;
    padding-top: 16px;
}

.ProfileHeader-main {
    margin: 0 20px 24px;
    position: relative;
}

.UserAvatar {
    border: 4px solid #fff;
    border-radius: 8px;
}

.Avatar {
    border-radius: 4px;
}

.ProfileHeader-contentFooter {
    padding-top: 8px;
    position: relative;
}

.ProfileHeader-buttons {
    bottom: 0;
    position: absolute;
    right: 0;
}

.ProfileHeader-name {
    font-size: 26px;
    font-synthesis: style;
    font-weight: 600;
}

.ProfileHeader-headline {
    -webkit-box-flex: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -ms-flex: 1 0;
    flex: 1 0;
    font-size: 16px;
    margin-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ztext {
    line-height: 1.6;
    word-break: break-word;
}

.columns {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
}

.level {
    box-sizing: border-box;
    min-width: 0;
    color: rgb(5, 109, 232);
    cursor: pointer;
    width: 29px;
    text-align: center;
    background: rgba(5, 109, 232, 0.08);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    align-items: Center;
}

.CreatorEntrance-title {
    font-size: 14px;
    font-synthesis: style;
    font-weight: 600;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
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

.el-carousel__item:nth-child(2n) {
    background-color: #acbac7;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #dde1e8;
}

.el-carousel__item {
    border-radius: 4px;
}
</style>

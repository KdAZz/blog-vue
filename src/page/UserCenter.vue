<template>
    <div class="container is-max-desktop">
        <el-card :body-style="{ padding: '0px' }">
            <div class="UserCover UserCover--colorBlock"></div>
            <div class="ProfileHeader-wrapper">
                <div class="ProfileHeader-main">
                    <div class="ProfileHeader-avatar" style="top: -74px;">
                        <div class="UserAvatar">
                            <img class="Avatar" width="160" height="160"
                                 src="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c"
                                 srcset="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c 2x"
                                 alt="">
                        </div>
                    </div>
                    <div class="ProfileHeader-content">
                        <div style="margin-bottom: 16px;">
                            <h1 style="display: flex; align-items: center">
                                <span class="ProfileHeader-name">KdAZz</span>
                                <span class="ztext ProfileHeader-headline">啥都不会</span>
                            </h1>
                        </div>
                        <div class="ProfileHeader-contentFooter">
                            <b-button>测试</b-button>
                            <div class="ProfileHeader-buttons">
                                <el-button type="primary" plain>编辑个人资料</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
        <div style="margin-top: 7px" class="columns">
            <div class="column" style="padding: 0">
                <el-col :span="12" class="el-card" style="width: 100%">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-document"></i>
                            <span slot="title">个人信息</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-card>
                    <div class="level">
                        Lv1
                    </div>
                </el-card>
            </div>
            <el-card style="margin-left: 7px" class="column is-three-quarters">
                aa
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserCenter"
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
    margin: 0px 0px 0px 4px;
    min-width: 0px;
    color: rgb(5, 109, 232);
    cursor: pointer;
    width: 29px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    background: rgba(5, 109, 232, 0.08);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 590;
}
</style>

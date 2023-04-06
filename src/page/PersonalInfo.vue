<template>
    <div style="background-color: #f5f5f5">
        <div class="container is-max-desktop el-card">
            <div class="columns">
                <div class="column is-four-fifths">
                    <div>
                        <form class="Field">
                            <h3 class="Field-label">性别</h3>
                            <div class="Field-content">
                                <div><span class="Field-text">未知</span></div>
                            </div>
                        </form>
                        <form class="Field"><h3 class="Field-label">一句话介绍</h3>
                            <div class="Field-content">
                                <div>
                                    <span class="Field-text">
                                        <span class="ztext">啥都不会</span>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <form class="Field"><h3 class="Field-label">居住地</h3>
                            <div class="Field-content">
                                <button style="border: none;color: #7474fc;background-color: white;padding: 0;font-size: 15px">
                                    <i style="vertical-align: middle;" class="el-icon-circle-plus-outline"></i>  添加居住地
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonalInfo"
}
</script>

<style scoped>
.header-pic {
    height: 240px;
    background-color: #f5f5f5;
    border-radius: 8px;
}

.Field {
    border-bottom: 1px solid #ebebeb;
    padding: 30px 0;
}

.Field-label {
    color: #444;
    line-height: 36px;
    font-size: 15px;
    font-synthesis: style;
    font-weight: 600;
    position: absolute;
}

.Field-content {
    line-height: 36px;
    padding: 0 64px 0 140px;
}
</style>

<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="近期动态" name="first">
            <div class="block">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="发表文章" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="近期评论" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="收到评论" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: "HomeComponent",
    data() {
        return {
            activeName: 'first'
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="aboutScreen">
        <div class="content">
            <div class="screen">
                <el-radio v-model="radio" label="1">免费取消</el-radio>
                <el-radio v-model="radio" label="2">含早餐</el-radio>
                <el-select v-model="value" placeholder="请选择国籍">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="请选择国籍">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'screen',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .aboutScreen{
        position: absolute;
        top:-50%;
    }
    .screen{
        text-align: right;
        .el-select{
            width: 140px;
            height: 36px;
            margin-left: 85px;
        }
    }
</style>



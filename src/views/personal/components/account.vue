<template>
    <div class="account" style="display:none">
        <el-tabs tab-position="top" type="border-card">
            <el-tab-pane label="我的信息">
                <ul class="infoList">
                    <li>
                        <span class="genre">账户名:</span><span class="value">汪小汪</span>
                    </li>
                    <li>
                        <span class="genre">昵称:</span><span class="value"> 分销商小A</span>
                    </li>
                </ul>
                <span class="btnModify">修改登录密码</span>
            </el-tab-pane>
            <el-tab-pane label="公司信息">
                <ul class="infoList">
                    <li>
                        <span class="genre">账户名:</span><span class="value">汪小汪</span>
                    </li>
                    <li>
                        <span class="genre">昵称:</span><span class="value">分销商小A</span>
                    </li>
                </ul>
                <span class="infoTip">公司信息如需修改，请联系您的销售人员</span>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:'account',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .account{
        display: inline-block;
        vertical-align: top;
        padding: 60px 80px 0 80px;
        width: 980px;
    }
    .infoList{
        margin-top:35px;
        li{
            margin-bottom: 25px;
            font-size: 14px;
            color: #666;
            .genre,.value{
                display: inline-block;
                vertical-align: top;
            }
            .genre{
                margin-right: 10px;
                width: 130px;
                text-align: right;
            }
        }
    }
    .btnModify{
        font-size: 16px;
        color: #266FE2;
        cursor: pointer;
    }
    .infoTip{
        font-size: 12px;
        color: #CCC;
    }
</style>



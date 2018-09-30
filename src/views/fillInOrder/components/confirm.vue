<template>
    <div class="">
        <div class="content">
            <div class="confirm">
                <input type="checkbox">
                <span class="confirm__txt">我已阅读出行提示，并且接受分销商凭条的<a href="">服务条款</a>和<a href="">隐私政策</a>。</span>
                <span class="confirm__tip">请确定勾选服务条款和隐私政策</span>
            </div>
            <button type="" class="btnNext" @click="openTip">下一步</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'content',
    methods:{
        openTip(){
            this.$alert('当前房型价格有变化请刷新该页面获取最新价格','', {
                confirmButtonText: '刷新页面',
                callback: action => {
                this.$message({
                    type: 'info',
                    message: '已刷新'
                });
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .confirm{
        margin: 20px 0 25px 0;
        &__txt{
            font-size: 14px;
            color: #333;
            a{
                color: #266FE2;
            }
        }
        &__tip{
            display: block;
            margin: 5px 0 0 22px;
            font-size: 12px;
            color: #FF5341;
        }
    }
    .btnNext{
        display: block;
        margin: 32px auto 38px;
        width: 200px;
        height: 36px;
        background: #266FE2;
        border-radius: 4px;
        font-size: 16px;
        color: #FFF;
        border:none;
        cursor: pointer;
        &:hover{

        }
    }
</style>



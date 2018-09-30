<template>
    <div class="hints">
        <div class="content">
            <p class="hints__txt">所有外籍客人均须支付每房每晚10马币的旅游税。房价不含上述税费，客人必须在办理入住时缴税。持有效马来西亚身份证或有效永久居民卡的客人无需支付该税。</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'hints'
}
</script>

<style lang="scss" scoped>
    .hints{
        height: 48px;
        background: url(../../../assets/img/bg4.svg);
        line-height: 48px;
        .hints__txt{
            padding-left: 15px;
            font-size: 14px;
            color: #333;
        }
    }
</style>



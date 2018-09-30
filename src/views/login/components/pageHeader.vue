<template>
    <div class="pageHeader">
        <div class="content">
            <h1 class="title">
                <router-link to="">
                    <img src="@/assets/img/logo.png" alt="logo" class="title__img">
                    <span class="title__txt">分销商平台</span>
                </router-link>
            </h1>
            <div class="btns">
                <div class="service">
                    <svg-icon icon-class="service"/>
                    <div class="service__txt">
                        <span class="">客服电话</span><br/>
                        <span class="service__txt--blue">123456</span>
                    </div>
                </div>
                <div class="currency">
                    <svg-icon icon-class="rmb"/>
                    <span class="currency__txt">人民币</span>
                </div>
                <router-link to="" class="btnEnter">进入首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pageHeader'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .pageHeader{
        width: 100%;
        height: 80px;
        background-color: #fff;
        .title{
            position: relative;
            z-index: 30;
            height: 100%;
            display: inline-flex;
            align-items: center;
            &__img,&__txt{
                display: inline-block;
                vertical-align: middle;
            }
            &__img{
                width:67px;
                height: 44px;
            }
            &__txt{
                margin-left: 10px;
                font-size: 28px;
                color: #333;
            }
        }
        .btns{
            position:absolute;
            top:50%;
            transform: translateY(-50%);
            right:0;
            z-index: 20;
            width:100%;
            text-align: right;
        }
        .service,.currency,.login,.logined{
            margin:0 10px;
            display: inline-block;
            vertical-align: middle;
            text-align: left;
        }
        .service{
            &__txt{
                display: inline-block;
                vertical-align: middle;
                font-size: 12px;
                color: #333;
                span{
                    display: inline-block;
                }
                &--blue{
                    padding-top: 2px;
                    font-size: 14px;
                    color: #266FE2;
                }
            }
        }
        .currency{
            &__txt{
                font-size: 16px;
                color: #333;
            }
        }
        .btnEnter{
            display: inline-block;
            vertical-align: middle;
            margin:0 15px;
            padding: 5px 10px;
            font-size: 16px;
            color: #266FE2;
            border:1px solid #266FE2;
            border-radius: 4px;
        }
    }

</style>


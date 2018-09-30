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
                <div class="login" v-if="ifLogined === 'no'">
                    <svg-icon icon-class="login"/>
                    <span class="login__txt">立即登录</span>
                </div>
                <div class="logined" v-if="ifLogined === 'yes'">
                    <div class="userInfo">
                        <img href="" class="userInfo__avatar"/>
                        <span class="userInfo__name">amber</span>
                    </div>
                    <ul class="operations">
                        <li v-for="(value,index) in operations" :key="index">
                            {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pageHeader',
    data(){
        return {
            ifLogined:'yes',
            operations:["账户管理","订单管理","我的收藏","退出登录"]
        }
    },
    computed:{
        Logined:function(){
            this.ifLogined =='yes'
        }
    }
}
</script>

<style lang="scss" scoped>
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
            margin:0 20px;
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
        .currency,.login{
            &__txt{
                font-size: 16px;
                color: #333;
            }
        }
        .login,.logined{
            position: relative;
            cursor: pointer;
        }
        .login{
            $father:'.login';
            &:hover{
                #{$father}__txt{
                    color: #266FE2;
                }
            }
        }
        .userInfo{
            &__avatar,&__name{
                display: inline-block;
                vertical-align: middle;
            }
            &__avatar{
                width: 30px;
                height: 30px;
                background-color:#ccc;
                border-radius: 50%;
            }
            &__name{
                font-size: 16px;
                color: #333;
            }
        }
        .operations{
            position: absolute;
            margin-top: 5px;
            width:96px;
            border-radius: 4px;
            background-color: #eee;
            li{
                padding: 12px 0;
                font-size: 12px;
                color: #666;
                text-align: center;
                border-bottom: 1px solid #ddd;
                &:hover{
                    color: #266FE2;
                }
                &:last-child{
                    border-bottom: 0;
                }
            }
        }
    }
</style>


<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <search/>
        <div class="loginTip">
            <div class="content">
                <p class="tip">
                    <span class="tip__txt">马上登录，享受分销商优势</span>
                    <router-link to="" class="tip__btn">马上登录</router-link>
                </p>
            </div>
        </div>
        <optionPanel/>
        <hotel/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import search from '@/components/search'
import optionPanel from './components/optionPanel'
import hotel from './components/hotel'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'

export default {
    name:'list',
    components:{
        pageHeader,
        navigation,
        search,
        optionPanel,
        hotel,
        bottom,
        backToTop
    }
}
</script>

<style lang="scss" scoped>
    .loginTip{
        width: 100%;
        height: 100px;
        background: url(../../assets/img/loginTip.png);
        text-align: center;
        .tip{
            display: inline-flex;
            align-items: center;
            height: 100%;
            text-align: center;
            &__txt{
                display: inline-block;
                font-size: 32px;
                color: #008360;
                letter-spacing: 4px;
            }
            &__btn{
                margin-left: 50px;
                display: inline-block;
                width: 184px;
                height: 48px;
                background-image: linear-gradient(-6deg, #33A58B 0%, #3CD096 100%);
                border-radius: 100px;
                font-size: 20px;
                color: #FFF;
                letter-spacing: 2px;
                line-height: 48px;
            }
        }
    }
</style>


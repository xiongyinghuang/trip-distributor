<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <carousel/>
        <div class="searchBox">
            <img src="@/assets/img/slogan.png" alt="" class="slogan">
            <search/>
        </div>
        <hotSpots/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import carousel from './components/carousel'
import search from './components/search'
import hotSpots from './components/hotSpots'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'homePage',
    components:{
        pageHeader,
        navigation,
        carousel,
        search,
        hotSpots,
        bottom,
        backToTop
    }
}
</script>

<style lang="scss" scoped>
    .searchBox{
        position: absolute;
        top:210px;
        left: 255px;
        z-index: 2;
        width: 1000px;
        height: 348px;
        background-color: rgba(0, 0, 0, 0.3);
        .slogan{
            position: absolute;
            left: 70px;
            top:50%;
            transform: translateY(-50%);
            display: block;
            width: 366px;
            height: 196px;
        }
    }
</style>



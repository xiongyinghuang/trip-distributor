<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <search/>
        <hotelInfo/>
        <div class="actionBar">
            <div class="content">
                <tab/>
                <screen/>
            </div>
        </div>
        <roomTypeIntro/>
        <nearbyHotel/>
        <clause/>
        <facilities/>
        <surrounding/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import search from '@/components/search'
import hotelInfo from './components/hotelInfo'
import tab from './components/tab'
import screen from './components/screen'
import roomTypeIntro from './components/roomTypeIntro'
import nearbyHotel from './components/nearbyHotel'
import clause from './components/clause'
import facilities from './components/facilities'
import surrounding from './components/surrounding'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'

export default {
    name:'detail',
    components:{
        pageHeader,
        navigation,
        search,
        hotelInfo,
        tab,
        screen,
        roomTypeIntro,
        nearbyHotel,
        clause,
        surrounding,
        facilities,
        bottom,
        backToTop
    }
}
</script>

<style lang="scss" scoped>
.actionBar{
    position: relative;
}
</style>


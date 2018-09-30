<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <hints/>
        <div>
            <div class="content">
                <info/>
                <hotelInfos/>
                <confirm/>
            </div>
        </div>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import hints from './components/hints'
import info from './components/info'
import hotelInfos from './components/hotelInfos'
import confirm from './components/confirm'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'fillInOrder',
    components:{
        pageHeader,
        navigation,
        hints,
        info,
        hotelInfos,
        confirm,
        bottom,
        backToTop
    },
    methods:{
    }  
}
</script>





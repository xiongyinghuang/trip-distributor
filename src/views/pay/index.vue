<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <payInfo/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import payInfo from './components/payInfo'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'pay',
    components:{
        pageHeader,
        navigation,
        payInfo,
        bottom,
        backToTop
    }
}
</script>





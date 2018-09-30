<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <orderStates/>
        <orderInfo/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import orderStates from './components/orderStates'
import orderInfo from './components/orderInfo'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'orderDetail',
    components:{
        pageHeader,
        navigation,
        orderStates,
        orderInfo,
        bottom,
        backToTop
    }
}
</script>





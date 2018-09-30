<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <bookInfo/>
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import bookInfo from './components/bookInfo'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'bookSuc',
    components:{
        pageHeader,
        navigation,
        bookInfo,
        bottom,
        backToTop
    }
}
</script>

<style lang="scss" scoped>

</style>



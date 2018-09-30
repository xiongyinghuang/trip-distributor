<template>
    <div class="wrap">
        <pageHeader/>
        <navigation/>
        <div>
            <div class="content">
                <sideBar/>
                <account/>
                <order/>
            </div>
        </div>
        
        <bottom/>
        <backToTop/>
    </div>
</template>

<script>
import pageHeader from '@/components/header/pageHeader'
import navigation from '@/components/header/navigation'
import sideBar from './components/sideBar'
import account from './components/account'
import order from './components/order'
import bottom from '@/components/bottom'
import backToTop from '@/components/backToTop'
export default {
    name:'personal',
    components:{
        pageHeader,
        navigation,
        sideBar,
        account,
        order,
        bottom,
        backToTop
    }
}
</script>

<style lang="scss" scoped>
</style>



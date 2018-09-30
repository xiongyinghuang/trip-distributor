<template>
    <div class="facilities">
        <div class="content">
            <h2 class="title">
                酒店设施
            </h2>
            <div class="facilitiesItem">
                <div class="genre">
                    <svg-icon icon-class="services"></svg-icon>
                    <span class="genre__txt">服务</span>
                </div>
                <ul  class="list">
                    <li v-for="(value,index) in services" :key="index">
                        <svg-icon icon-class="have"></svg-icon>
                        <span>{{value}}</span>
                    </li>
                </ul>
            </div>
            <div class="facilitiesItem">
                <div class="genre">
                    <svg-icon icon-class="facilities"></svg-icon>
                    <span class="genre__txt">设施</span>
                </div>
                <ul class="list">
                    <li v-for="(value,index) in facilities" :key="index">
                        <svg-icon icon-class="have"></svg-icon>
                        <span>{{value}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'facilities',
    data(){
        return {
            services:['24小时接待','儿童俱乐部','儿童加床','单点餐厅','唤醒','复印传真'],
            facilities:['24小时接待','儿童俱乐部','儿童加床','单点餐厅','唤醒','复印传真']
        }
    }
}
</script>

<style lang="scss" scoped>
    .facilities{
        .title{
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 20px;
            font-size: 18px;
            color: #333;
            font-weight: normal;
            background-color: #EEE;
            &::before{
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                content: '';
                width: 4px;
                height: 18px;
                background: #266FE2;
            }
        }
        .facilitiesItem{
            display: flex;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid #eee;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            &:nth-last-of-type(1){
                border-bottom: none;
            }
            .genre{
                flex-basis: 15%;
                .svg-icon{
                    display: block;
                    margin: 0 auto;
                }
                &__txt{
                    display: block;
                    margin-top: 12px;
                    text-align: center;
                }
            }
            .list{
                flex-basis: 85%;
                li{
                    display: inline-block;
                    vertical-align: top;
                    margin: 10px 0 10px 0;
                    width: 20%;
                    font-size: 12px;
                    color: #333;
                }
            }

        }
    }
</style>



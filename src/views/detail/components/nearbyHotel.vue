<template>
    <div class="nearbyHotel">
        <div class="content">
            <div class="title">附近酒店</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nearbyHotel',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .nearbyHotel{
        margin-top: 30px;
        margin-bottom: 40px;
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
    }
</style>



<template>
    <div class="hotSpots">
        <div class='content'>
            <h2 class="title">
                <span class="title__ch">热门景点地</span>
                <span class="title__en">DESTINATION</span>
            </h2>
            <ul class="spots">
                <li v-for="(value,index) in spots.spot" :key="index">
                    <router-link to="" class="">
                        <div class="txt">
                            <span class="txt__name">{{value.cityName}}</span>
                            <span class="txt__num">{{value.hotelNum}}</span>
                        </div>
                        <img :src="value.img" class="photo"/>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'hotSpots',
    data(){
        return{
            spots:{
                spot:[
                    {
                        cityName:'新西兰',
                        img:require('@/assets/img/spots/spot1.png'),
                        hotelNum:1230
                    },
                    {
                        cityName:'东京',
                        img:require('@/assets/img/spots/spot2.png'),
                        hotelNum:1290
                    },
                    {
                        cityName:'曼谷',
                        img:require('@/assets/img/spots/spot3.png'),
                        hotelNum:1230
                    },
                    {
                        cityName:'新加坡',
                        img:require('@/assets/img/spots/spot4.png'),
                        hotelNum:1290
                    },
                    {
                        cityName:'西雅图',
                        img:require('@/assets/img/spots/spot5.png'),
                        hotelNum:1230
                    },
                    {
                        cityName:'马来西亚',
                        img:require('@/assets/img/spots/spot6.png'),
                        hotelNum:1290
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $imgPath:'../../../assets';
    .title{
        margin-top: 42px;
        background: url(#{$imgPath}/img/bg2.png) no-repeat center top;
        &__ch,&__en{
            display: block;
            text-align: center;
            
        }
        &__ch{
            margin-bottom: 8px;
            font-size: 30px;
            color: #333;
            letter-spacing: 10px;
        }
        &__en{
            font-size: 20px;
            color: #CDCDCD;
            letter-spacing: 4px;
        }
    }
    .spots{
        margin-bottom: 70px;
        a{
            display: block;
        }
        li{
            position: relative;
            display: inline-block;
            margin-top:20px;
            vertical-align: top;
            &:nth-child(1){
                margin-right: 10px;
                &::before{
                    position: absolute;
                    top:25px;
                    left:-8px;
                    display: block;
                    content: '';
                    width: 172px;
                    height: 52px;
                    background: url(#{$imgPath}/img/superscript.png);

                }
            }
            &:nth-child(3),&:nth-child(4),&:nth-child(5){
                margin-right: 18px;
            }
        }
        .txt{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            &__name,&__num{
                display: block;
                text-align: center;
                line-height: 28px;
            }
            &__name{
                font-size: 20px;
                color: #fff;
            }
            &__num{
                font-size: 14px;
                color: #fff;
            }
        }
        .photo{
            display: block;
        }
    }
</style>



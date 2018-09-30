<template>
    <div class="aboutHotel">
        <div class="content">
            <div class="hotelList">
                <div class="top">
                    <div class="hotelNum">共<span class="hotelNum__num">{{hotelNum}}</span>家酒店</div>
                    <div class="btnSort">
                        <span>
                            按价格排序
                            <i class="btnSort__up"></i>
                            <i class="btnSort__down"></i>
                        </span>
                    </div>
                </div>
                <!--搜索列表不为空-->
                <div>
                    <ul>
                        <li v-for="(value,index) in list" :key="index" class="hotel">

                            <div class="imgs">
                                <img v-for="(value,index) in value.imgs" :src="value" :key="index" :class="'img_' + index"/>
                            </div>

                            <div class="description">
                                <span class="orderNum">
                                    <svg-icon icon-class="index"></svg-icon>
                                    <i class="orderNum__num">{{ index+1 }}</i>
                                </span>
                                <div class="txt">
                                    <div class="name">
                                        <span v-for="(value,key,index) in value.name" :key="index" :class="'name_' + key">
                                            {{value}}
                                        </span>
                                    </div>
                                    <el-rate
                                        v-model="value.rate"
                                        disabled
                                        class="rate">
                                    </el-rate>
                                    <div class="site">
                                        <span class="site__name">{{value.site}}</span>
                                        <router-link to="">在地图上查看></router-link>
                                    </div>
                                    <ul class="facilities">
                                        <li v-for="(value,key,index) in value.facilities" :key="index">
                                            <svg-icon :icon-class="key"></svg-icon>
                                            {{value}}
                                        </li>
                                    </ul>
                                    <span class="btnLogin">登录查看价格</span>
                                    <div class="price">
                                        <span class="totalPrice">三晚含税总价<i class="totalPrice__num">￥3000</i></span>
                                        <span class="unitPrice">￥<i class="unitPrice__num">2,157</i>起</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <paging/>
                </div>
                <!--搜索列表为空-->
                <div class="">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import paging from '@/components/paging'
export default {
    name:'hotel',
    components:{
        paging
    },
    data(){
        return{
            hotelNum:12000,
            list:[
                {
                    imgs:[require('@/assets/img/hotel1.jpeg'),require('@/assets/img/hotel2.jpeg'),require('@/assets/img/hotel3.jpeg')],
                    name:{
                        'ch':'花莲槟城休闲渡假农庄民宿',
                        'en':'Bingcity B&B'
                    },
                    rate:'3.7',
                    site:'广州',
                    facilities:{'wifi':'无线wifi','depot':'停车场','transfer':'机场接送车','pool':'游泳池'}
                },
                {
                    imgs:[require('@/assets/img/hotel1.jpeg'),require('@/assets/img/hotel2.jpeg'),require('@/assets/img/hotel3.jpeg')],
                    name:{
                        'ch':'花莲槟城休闲渡假农庄民宿',
                        'en':'Bingcity B&B'
                    },
                    rate:'3.7',
                    site:'广州',
                    facilities:{'wifi':'无线wifi','depot':'停车场','transfer':'机场接送车','pool':'游泳池'}
                }
            ]
        }
    },
    methods:{
        // setClass(name) {
        //     let obj = {face: true}
        //     obj[name] = true
        //     return obj
        // }
    }
}
</script>

<style lang="scss" scoped>
    @mixin inlinBlock($align){
        display: inline-block;
        vertical-align: $align;
    }
    .hotelList{
        position: relative;
        margin: 25px 0 145px 0;
        padding:25px 25px 0 25px;
        width: 780px;
        height: 656px;
        border: 1px solid #ddd;
    }
    .top{
        position: relative;
        margin:0 0 15px 25px;
    }
    .hotelNum{
        position: relative;
        font-size: 18px;
        color: #333;
        &__num{
            display: inline-block;
            margin: 0 5px;
            font-size: 30px;
            color: #EE6723;
            line-height: 25px;
        }
    }
    .btnSort{
        position: absolute;
        top:0;
        right: 0;
        border: 1px solid #DDD;
        border-radius: 4px;
        span{
            position: relative;
            display: inline-block;
            margin: 7px 20px;
            font-size: 16px;
            color: #333;
            text-align: center;
            cursor: pointer;
        }
        &__up{
            position: absolute;
            right: -12px;
            top:-2px;
            display: inline-block;
            content: '';
            border:4px solid #D8D8D8;
            border-top-color: transparent;
            border-right-color: transparent;
            border-left-color: transparent;
            cursor: pointer;
        }
        &__down{
            position: absolute;
            right:-12px;
            bottom: -2px;
            display: inline-block;
            content: '';
            border:4px solid #D8D8D8;
            border-right-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
            cursor: pointer;
        }
    }
    .hotel{
        padding-top: 20px;
        margin-bottom: 15px;
        border-top:1px solid #ddd;
        .imgs{
            display: inline-block;
            vertical-align: top;
            width: 400px;
        }
        .img{
            &_0,&_1,&_2{
                display: inline-block;
                
            }
            &_0{
                margin-right: 10px;
                width: 260px;
                height: 200px;
                float: left;
            }
            &_1,&_2{
                width: 130px;
                height: 94px;
                float: right
            }
            &_1{
                margin-bottom: 12px;
            }
        }
        .description,.txt{
            @include inlinBlock(top);
        }
        .txt{
            width: 285px;
        }
        .orderNum{
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-top: -4px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            &__num{
                position: absolute;
                top: 0;
                left: -4px;
                width: 100%;
                height: 100%;
                font-size: 14px;
                color: #FFF;
                text-indent: 15px;
            }
        }
        .name{  
           @include inlinBlock(top);
            &_ch,&_en{
                display: block;
                font-size: 16px;
                color: #333;
                line-height: 22px;
            }
        }
        .rate{
            display: block;
            margin:8px 0;
        }
        .site{
            &__name{
                margin-bottom: 5px;
                display: block;
                font-size: 12px;
                color: #999;
            }
            .router-link-active{
                font-size: 12px;
                color: #266FE2;
            }
        }
        .facilities{
            margin:15px 0 0 -15px;
            width: 100%;
            li{
                @include inlinBlock(middle);
                width: 50%;
                font-size: 12px;
                color: #999;
            }
        }
        .btnLogin{
            float: right;
            margin:8px 0 0 0;
            display: block;
            width: 170px;
            height: 36px;
            background: #266FE2;
            border-radius: 4px;
            font-size: 16px;
            color: #FFF;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
            &:hover{
                background-color: #2979f6;
            }
        }
        .price{
            clear: both;
            margin: 8px 0 0 0;
        }
        .totalPrice{
            display: block;
            font-size: 12px;
            color: #333;
            &__num{
                font-size: 12px;
                color: #DD041F;
            }
        }
        .unitPrice{
            float: right;
            display: block;
            width: 116px;
            height: 28px;
            background: #DD041F;
            border-radius: 4px;
            font-size: 14px;
            color: #FFF;
            text-align: center;
            line-height: 28px;
            &__num{
                font-size: 20px;
            }
        }

    }
    .paging{
        margin-top: 50px;
    }
</style>



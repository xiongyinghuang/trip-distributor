<template>
    <div class="hotelInfo">
        <div class="content">
            <div class="info">
                <span class="name">渡假酒店</span>
                <span class="site">广州</span>
                <router-link to="">
                    <svg-icon icon-class="location"></svg-icon>
                    <span>在地图上查看</span>
                </router-link>
                <el-rate
                    v-model="rate"
                    disabled
                    >
                </el-rate>
            </div>
            <span class="price">￥<i class="price__num">2150</i>起</span>
            <div>
                <span class="btnLogin">登录查看价格</span>
                <span class="btnBook">立即预订</span>
            </div>
            <div class="hotelMapping">
                <div class="bigPicture">
                    <img  :src="imgs[imgIndex]" alt="" class="bigPicture__img" ref="bigImg"/>
                    <span class="bigPicture__txt">普通套房</span>
                </div>
                <ul class="thumbnail">
                    <li v-for="i in imgs.length" :key="i" @click="change(i)" ref="li">
                        <img :src="imgs[i-1]"/>
                    </li>
                </ul>
                <div class="btnCheck">
                    <span>查看全部<br/>{{imgs.length}}张照片</span>
                </div>
            </div>
            <div class="hotelIntro">
                <h2 class="title">酒店简介</h2>
                <div class="btnOperation">
                    <span class="btnShare">
                        <svg-icon icon-class="share"></svg-icon>
                        <i>分享</i>
                    </span>
                    <span class="btnCollection">
                        <svg-icon icon-class="collection"></svg-icon>
                        <i>收藏</i>
                    </span>
                    
                </div>
                <p class="txt">厦门+鼓浪屿3日2晚跟团游(3钻)·销量见证·口碑保障·超4000人出游+1元选购明星海鲜餐【国庆特惠 假期优选 提前下单享优惠】酒店连住不挪窝 漫游鼓浪屿7大景点+菽庄花园or市区精华全景 双动</p>
                <ul>
                    <li v-for="(value,key,index) in facilities" :key="index" class="facilities">
                        <svg-icon :icon-class="key"></svg-icon>
                        <span class="facilities__name">{{value}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'hotelInfo',
    components:{

    },
    data(){
        return{
            rate:'3.7',
            imgs:[require('@/assets/img/hotel1.jpeg'),require('@/assets/img/hotel2.jpeg'),require('@/assets/img/hotel3.jpeg')],
            imgIndex:'0',
            facilities:{'wifi':'无线wifi','depot':'停车场','transfer':'机场接送车','pool':'游泳池'}
        }
    },
    methods:{
        change:(index)=>{
            this.imgIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin inlineBlock($align){
        display: inline-block;
        vertical-align: $align;
    }
    .info{
        margin-bottom: 25px;
        position: relative;
        width: 895px;
        .name{
            display: block;
            margin-top: 22px;
            font-size: 18px;
            color: #333;
        }
        .site{
            display: block;
            margin-top: 15px;
            font-size: 12px;
            color: #999;
        }
        .router-link-active{
            display: block;
            margin-top: 15px;
            width: 120px;
            height: 35px;
            border: 1px solid #7CAD4B;
            border-radius: 1px;
            font-size: 12px;
            color: #7CAD4B;
            opacity: 0.46;
            line-height: 35px;
        }
        .el-rate{
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right:0;
        }
    }
    .price{
        position: absolute;
        top:0;
        right:0;
        display: block;
        font-size: 14px;
        color: #333;
        &__num{
            font-size: 30px;
            color: #DD041F;
        }
    }
    .btnBook,.btnLogin{
        position: absolute;
        top:50px;
        right: 0;
        display: inline-block;
        width: 150px;
        height: 36px;
        background: #266FE2;
        border-radius: 4px;
        font-size: 16px;
        color: #FFF;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }
    .hotelMapping{
        margin-bottom: 65px;
        @include inlineBlock(top);
        position: relative;
        width: 680px;
    }
    .bigPicture{
        position: relative;
        width: 100%;
        height: 430px;
        &__img{
            display: block;
            width: 100%;
            height: 100%;
        }
        &__txt{
            position: absolute;
            left: 0;
            bottom: 0;
            display: block;
            width: 100%;
            height: 50px;
            opacity: 0.5;
            background: rgba($color: #000000, $alpha: 0.4);
            font-size: 14px;
            color: #FFF;
            text-indent: 16px;
            line-height: 50px;
        }
    }
    .thumbnail{
        float: left;
        margin-top: 20px;
        li{
            @include inlineBlock(top);
            margin-right: 16px;
            width: 100px;
            height: 64px;
            cursor: pointer;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
    .btnCheck{
        float: left;
        margin-top: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 64px;
        background: #266FE2;
        font-size: 12px;
        color: #fff;
        line-height: 16px;
        cursor: pointer;
    }
    .hotelIntro{
        position: relative;
        @include inlineBlock(top);
        width: 500px;
        margin-left: 14px;
        padding-top: 25px;
        border-top:1px solid #ddd;
        .title{
            font-size: 18px;
            color: #333;
        }
        .btnOperation{
            position: absolute;
            top:15px;
            right: 0;
        }
        .btnShare,.btnCollection{
            @include inlineBlock(top);
            margin-right: 35px;
            font-size: 12px;
            color: #333;
            cursor: pointer;
        }
        .txt{
            padding: 20px 0 25px 0;
            font-size: 12px;
            color: #333;
            line-height: 18px;

        }
        .facilities{
            @include inlineBlock(top);
            width: 25%;
            &__name{
                margin-left: -10px;
                font-size: 12px;
                color: #999;
            }
        }

    }
</style>



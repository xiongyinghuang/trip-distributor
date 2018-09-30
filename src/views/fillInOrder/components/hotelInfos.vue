<template>
    <div class="hotelInfos">
        <div class="hotelInfo">
            <img src="@/assets/img/hotel1.jpeg" alt="" class="mapping">
            <span class="chName">上海虹桥郁静酒店</span>
            <span class="enName">Golden Tulip Shanghai Rainbow Hotel</span>
            <div class="site">
                <svg-icon icon-class="position"></svg-icon>
                <span class="site__name">上海 长宁区 延安西路2000号 ，近仙霞路。 </span>
            </div>
            <el-rate
                v-model="rate"
                disabled
                >
            </el-rate>
        </div>
        <div class="reservationInfo">
            <h3 class="title">预订信息</h3>
            <ul>
                <li>
                    <span class="item1">入住日期</span>
                    <span class="item2">2018 年 10 月 10 日, 星期四</span>
                </li>
                <li>
                    <span class="item1">退房日期</span>
                    <span class="item2">2018 年 10 月 14 日, 星期一</span>
                </li>
                <li>
                    <span class="item1">
                        取消政策
                        <el-tooltip class="item" placement="top-start">
                            <div slot="content" class="priceTip">入住人姓名</div>
                            <el-button>
                                <svg-icon icon-class="info"></svg-icon>
                            </el-button>
                        </el-tooltip>
                    </span>
                    <span class="item2">不可取消</span>
                </li>
            </ul>
        </div>
        <ul class="priceInfo">
            <li>
                <span class="item1">1间客房* 1晚</span>
                <span class="item2">¥1200</span>
            </li>
            <li>
                <span class="item1">税费和其他费用</span>
                <span class="item2">¥100</span>
            </li>
            <li>
                <span class="item1">总价（含税含服务费）</span>
                <span class="item2">249</span>
            </li>
        </ul>
        <div class="priceTip">
            <svg-icon icon-class="info"></svg-icon>
            <span>如果您稍后预订，价格可能上涨</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'hotelInfos',
    data(){
        return{
            rate:'3.6'
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin inlineBlock($align){
        display: inline-block;
        vertical-align: $align;
    }
    @mixin common(){
        margin-bottom: 10px;
        font-size: 14px;
        color: #2A2A2A;
        overflow: hidden;
        .item1{
            float: left;
        }
        .item2{
            float: right;
        }
    }
    .hotelInfos{
        @include inlineBlock(top);
        width: 410px;
        margin-top: 20px;
        margin-left: 14px;
        
    }
    .hotelInfo{
        border:1px solid #ddd;
        padding-bottom: 20px;
        .mapping{
            width: 408px;
            height: 192px;
        }
        .chName,.enName{
            display: block;
            padding:0 20px;
            color: #266FE2 ;
        }
        .chName{
            margin-top: 15px;
            margin-bottom: 8px;
            font-size: 16px;
        }
        .enName{
            font-size: 12px;
        }
        .site{
            padding:0 5px;
            font-size: 12px;
            color: #999;
            .svg-icon{

            }
            &__name{
                margin-left: -10px;
            }
        }

    }
    .reservationInfo{
        padding: 20px 25px 10px 22px;
        margin: 5px 0;
        border:1px solid #ddd;
        
        .title{
            font-size: 16px;
            margin-bottom: 20px;
        }
        li{
            @include common();
            &:nth-last-of-type(1){
                margin-top:24px;
                .item2{
                    padding: 5px 10px;
                    background-color: #FF5341;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
    .priceInfo{
        padding: 20px 25px 10px 22px;
        border:1px solid #ddd; 
        li{
            @include common();
            &:nth-last-of-type(1){
                margin-top:24px;
                .item2{
                    font-size: 20px;
                    color: #FF5341;
                    &::before{
                        content: '￥';
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .priceTip{
        margin-top: 12px;
        background: #FBF3E1;
        font-size: 12px;
        color: #FF5341;
    }
</style>



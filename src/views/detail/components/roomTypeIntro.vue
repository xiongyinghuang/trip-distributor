<template>
    <div class="roomTypeIntro">
        <div class="content">
            <div class="load">
                <svg-icon icon-class="query"></svg-icon>
                <span class="load__txt">正在为您查询最新房型价格</span>
                <svg-icon icon-class="loading"></svg-icon>
            </div>
            <div class="superValueRoom">
                <table>
                    <tr>
                        <th>
                            <span>超值房型</span>
                            <svg-icon icon-class="hot"></svg-icon>
                        </th>
                        <th>预订条款</th>
                        <th>餐型</th>
                        <th>床型</th>
                        <th>价格/间/夜</th>
                        <th>预订方式</th>
                    </tr>
                    <tr v-for="(value,index) in superValueRoom" :key="index">
                        <td>
                            <img :src="value.roomImg[0]" alt="" class="mapping"/>
                            <div class="roomInfo">
                                <span class="roomInfo__name">{{value.roomName}}</span>
                                <span class="roomInfo__btn">查看全部图片</span>  
                            </div>
                        </td>
                        <td class="">
                            <span>{{value.roomTerms}}</span>
                            <el-tooltip class="item" placement="top-start">
                                <div slot="content" class="priceTip">取消政策</div>
                                <el-button>
                                    <svg-icon icon-class="info"></svg-icon>
                                </el-button>
                            </el-tooltip>
                        </td>
                        <td>
                            <span>{{value.mealType}}</span>
                        </td>
                         <td>
                            <span>{{value.bedType}}</span>
                        </td>
                        <td>
                            <div>
                                <span class="price">￥<i class="price__num">{{value.price}}</i></span>
                                <span class="taxPrice">
                                    含税总价:￥{{value.taxPrice}}
                                    <el-tooltip class="item" placement="top-start">
                                        <div slot="content" class="priceTip">当前房型最低价</div>
                                        <el-button>
                                            <svg-icon icon-class="info"></svg-icon>
                                        </el-button>
                                    </el-tooltip>
                                </span>
                            </div>
                        </td>
                        <td>
                            <span class="btnReservation">{{value.reservation}}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="allRoom">
                <h2 class="title">全部房型</h2>
                <table>
                    <tr>
                        <th>房型</th>
                        <th>预订条款</th>
                        <th>餐型</th>
                        <th>床型</th>
                        <th>价格/间/夜</th>
                        <th>预订方式</th>
                    </tr>
                    <tr v-for="(value,index) in allRoom" :key="index">
                        <td>
                            <img :src="value.roomImg" alt="" class="mapping"/>
                            <div class="roomInfo">
                                <span class="roomInfo__name">{{value.roomName}}</span>
                                <ul class="roomInfo__info">
                                    <li v-for="(item,index) in value.roomInfo" :key="index">
                                        {{item}}
                                    </li>
                                </ul> 
                            </div>
                        </td>
                        <td>
                            <div class="terms">
                                <ul v-for="(item,index) in value.roomTerms" :key="index" class="term">
                                    <li v-for="(term,index) in item" :key="index">
                                        {{term}}
                                    </li>
                                </ul>
                            </div>
                            
                        </td>
                        <td>
                            <div class="mealTypes">
                                <div v-for="(type,index) in value.mealType" :key="index" class="mealType">
                                    <span>{{type}}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="bedTypes">
                                <div v-for="(type,index) in value.bedType" :key="index" class="bedType">
                                    <span>{{type}}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="prices">
                                <div v-for="(price,index) in value.price" :key="index" class="price">
                                    <span>{{price}}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="btnReservations">
                                <div v-for="(reservation,index) in value.reservation" :key="index" class="btnReservation">
                                    <span class="btnReservation__btn">{{reservation}}</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <span class="btnMore">点击查看当前房型下更多价格</span>
            </div>
            <div class="otherRooms">
                <table>
                    <tr v-for="(value,index) in roomInfo" :key="index">
                        <td>
                            <div>
                                {{value.roomName}}
                            </div>
                        </td>
                        <td>
                            <div class="price">
                                最低价
                                <span class="price__num">{{value.roomPrice}}</span>
                            </div>
                        </td>
                        <td>
                            <div class="btnSee">查看详情</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'roomTypeIntro',
    data(){
        return {
            superValueRoom:[
                {
                roomName:'高级豪华大床房',
                roomImg:[require('@/assets/img/hotel1.jpeg'),require('@/assets/img/hotel2.jpeg'),require('@/assets/img/hotel3.jpeg')],
                roomTerms:'免费取消',
                mealType:'免餐',
                bedType:'大床房',
                price:'249',
                taxPrice:'2490',
                reservation:'立即订房'
                },
                {
                roomName:'高级豪华大床房',
                roomImg:[require('@/assets/img/hotel1.jpeg'),require('@/assets/img/hotel2.jpeg'),require('@/assets/img/hotel3.jpeg')],
                roomTerms:'免费取消',
                mealType:'免餐',
                bedType:'大床房',
                price:'249',
                taxPrice:'2490',
                reservation:'立即订房'
                }
            ],
            allRoom:[
                {
                    roomName:'高级豪华大床房',
                    roomImg:require('@/assets/img/hotel1.jpeg'),
                    roomInfo:['面积34平方','最多入住1人','有免费WIFI'],
                    roomTerms:[
                        ['免费取消','预订后立即确认'],
                        ['免费取消','预订后立即确认'],
                        ['免费取消','预订后立即确认'],
                    ],
                    mealType:['没','没','mei'],
                    bedType:['大','小','大'],
                    price:['249','249','249'],
                    taxPrice:['2490','249','249'],
                    reservation:['立即订房','立即订房','立即订房']
                }
            ],
            roomInfo:[
                {
                    roomName:'超级海景房',
                    roomPrice:'￥1234'
                },
                {
                    roomName:'超级山景房',
                    roomPrice:'￥1234'
                },
                 {
                    roomName:'总统套房',
                    roomPrice:'￥1234'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .load{
        padding-left: 35px;
        height: 60px;
        margin: 20px 0;
        background: url(../../../assets/img/bg3.png);
        line-height: 60px;
        &__txt{
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
            color: #333;
        }
    }
    .superValueRoom{
        table,tr{
            width: 100%;
        }
        table{
            border-left: 1px solid #ddd;
        }
        tr{
           display: flex; 
           justify-content:center;
           border-bottom: 1px solid #ddd;
        }
        th{
            flex-basis: 14%;
            height: 48px;
            background: #D8E4F7;
            font-size: 16px;
            color: #333;
            line-height: 48px;
            border-right: 1px solid #ddd;
            &:nth-of-type(1){
                flex-basis: 30%;
            }
        }
        td{
            flex-basis: 14%;
            display: inline-flex;
            align-items:center;
            justify-content: center;
            padding: 22px 0;
            font-size: 14px;
            color: #333;
            text-align: center;
            border-right: 1px solid #ddd;
            
            &:nth-of-type(1){
                flex-basis: 30%;
            }
        }
        .mapping{
            display: inline-block;
            vertical-align: middle;
            width: 160px;
            height: 88px;
        }
        .roomInfo{
            display: inline-block;
            vertical-align: middle;
            margin-left: 15px;
            &__name{
                margin-bottom: 30px;
                display: block;
                font-size: 16px;
                color: #333;
            }
            &__btn{
                font-size: 12px;
                color: #266FE2;
                cursor: pointer;
            }
        }
        .price{
            font-size: 14px;
            color: #FF5341;
            &__num{
                font-size: 26px;
            }
        }
        .taxPrice{
            display: block;
            font-size: 12px;
            color: #333;
            cursor: pointer;
        }
        .btnReservation{
            padding:7px 18px;
            font-size: 16px;
            color: #FFF;
            background: #266FE2;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .allRoom{
        margin-top: 20px;
        .title{
            position: relative;
            padding:22px 0 16px 20px;
            font-size: 18px;
            color: #333333;
            border-top:1px solid #ddd;
            border-right:1px solid #ddd;
            border-left:1px solid #ddd;
            &::before{
                position: absolute;
                top:22px;
                left:10px;
                display: inline-block;
                content: '';
                width: 4px;
                height: 18px;
                background: #266FE2;
            }
        }
        table,tr{
            width: 100%;
        }
        table{
            border-left: 1px solid #ddd;
        }
        tr{
           display: flex; 
           justify-content:center;
           border-bottom: 1px solid #ddd;
        }
        th{
            flex-basis: 14%;
            height: 48px;
            background: #D8E4F7;
            font-size: 16px;
            color: #333;
            line-height: 48px;
            border-right: 1px solid #ddd;
            &:nth-of-type(1){
                flex-basis: 30%;
            }
        }
        td{
            flex-basis: 14%;
            display: inline-flex;
            align-items:center;
            justify-content: center;
            font-size: 14px;
            color: #333;
            text-align: center;
            border-right: 1px solid #ddd;
            &:nth-of-type(1){
                flex-basis: 30%;
            }
        }
        .mapping{
            display: inline-block;
            vertical-align: middle;
            width: 160px;
            height: 120px;
        }
        .roomInfo{
            display: inline-block;
            vertical-align: middle;
            margin-left: 15px;
            &__name{
                margin-bottom: 8px;
                display: block;
                font-size: 16px;
                color: #333;
            }
            &__info{
                font-size: 12px;
                color: #333;
                letter-spacing: 1px;
                line-height: 20px;
                text-align: left;
                li::before{
                    display: inline-block;
                    vertical-align: middle;
                    content: '';
                    width: 2px;
                    height: 2px;
                    background-color: #000;
                    border-radius: 50%;
                }
                
            }
        }
        .terms,.mealTypes,.bedTypes,.prices,.btnReservations{
            flex-grow: 1;
            height: 100%;
        }
        .term{
            padding:15px 20px;
            text-align: left;
            font-size: 12px;
            color: #333;
            line-height: 20px;
            border-bottom: 1px solid #ddd;
            &:nth-last-of-type(1){
                border-bottom: none;
            }
        }
        .mealType,.bedType,.price,.btnReservation{
            display: flex;
            justify-content: center;
            height: 33.33%;
            align-items: center;
            border-bottom: 1px solid #ddd;
            &:nth-last-of-type(1){
                border-bottom: none;
            }
        }
        .price{
            font-size: 14px;
            color: #FF5341;
            &__num{
                font-size: 26px;
            }
        }
        .taxPrice{
            display: block;
            font-size: 12px;
            color: #333;
            cursor: pointer;
        }
        .btnReservation__btn{
            width: 100px;
            height: 48px;;
            font-size: 16px;
            color: #FFF;
            background: #266FE2;
            border-radius: 4px;
            line-height: 48px;
            cursor: pointer;
        }

        .btnMore{
            display: block;
            padding: 14px 0;
            font-size: 14px;
            color: #266FE2;
            text-align: right;
            cursor: pointer;
        }
    }
    .otherRooms{
        border: 1px solid #ddd;
        border-bottom: none;
        table{
            width: 100%;
        }
        tr{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #DDD;
        }
        td{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            border-right:1px solid #ddd;
            &:nth-of-type(1){
                flex-basis: 40%;
                font-size: 14px;
                color: #333;
            }
            &:nth-of-type(2){
                flex-basis: 30%;
                font-size: 14px;
                color: #333;
            }
            &:nth-of-type(3){
                flex-basis: 30%;
                font-size: 14px;
                color: #266FE2;
                border-right:none;
            }
        }
        .price__num{
            color: #FF5341;
        }
    }
</style>



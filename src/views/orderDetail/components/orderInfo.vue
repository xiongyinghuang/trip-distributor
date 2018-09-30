<template>
<div>
    <div class="operationInfo">
        <div class="content">
            <h2 class="title">操作信息</h2>
            <ul class="operationList">
                <li>2018-01-06 17:09:35  创建订单，待支付。  </li>
            </ul>
            <div class="hotelInfo">
                <img src="@/assets/img/hotel1.jpeg" alt="" class="mapping">
                <div class="txtInfo">
                    <span class="chName">上海虹桥郁静酒店</span>
                    <span class="enName">Golden Tulip Shanghai Rainbow Hotel</span>
                    <el-rate
                        v-model="rate"
                        disabled
                        >
                    </el-rate>
                    <div class="site">
                        <svg-icon icon-class="position"></svg-icon>
                        <span class="site__name">上海 长宁区 延安西路2000号 ，近仙霞路。 </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="orderInfo">
        <div class="content">
            <h2 class="title">订单信息</h2>
            <div class="">
                <span class="roomType">房型: 豪华大床房 </span>
                <span class="roomNum">房间数量: 2间</span>
                <span class="orderNO">公司订单号：20180918</span>
            </div>
            <table>
                <tr>
                    <th>房间</th>
                    <th>入住日期-退房日期</th>
                    <th>床型</th>
                    <th>餐型</th>
                    <th>入住人数</th>
                    <th>入住人</th>
                    <th>入住人国籍</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2018-10-10至2018-10-12共2晚</td>
                    <td>双床</td>
                    <td>含早（1日）</td>
                    <td>2成人1儿童</td>
                    <td>张三三、李四四、王五、琪琪..</td>
                    <td>中国大陆</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2018-10-10至2018-10-12共2晚</td>
                    <td>双床</td>
                    <td>含早（1日）</td>
                    <td>2成人1儿童</td>
                    <td>张三三、李四四、王五、琪琪..</td>
                    <td>中国大陆</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="cancelationPolicy">
        <div class="content">
            <div>
                <h2 class="title">取消政策</h2>
                <span class="tip">免费取消</span>
            </div>
            <ul class="cancelationPolicyList">
                <li>2018-08-03 05:00 之前免费取消</li>
                <li>2018-08-03 00:00 - 2018-08-10 12:00 之间取消收费 5865.36 元</li>
                <li>05:00 之后不可取消、不可修改。如果取消预订或未如期入住，酒店将收取全额费用</li>
            </ul>
        </div>
    </div>
    <div class="specialNeed">
        <div class="content">
            <h2 class="title">特殊需求</h2>
            <ul class="specialNeedList">
                <li>吸烟房，加床，Please make 30 teas for us on chenck-in day.</li>
            </ul>
        </div>
    </div>
    <div class="bookInfo">
        <div class="content">
            <h2 class="title">预订人信息</h2>
            <ul class="bookInfoList">
                <li>姓名: zhang yi</li>
                <li>电话: +86  1232342344</li>
                <li>邮箱: zhangyi@163.com</li>
            </ul>
        </div>
    </div>
    <div class="priceInfo">
        <div class="content">
            <h2 class="title">价格信息</h2>
            <ul class="priceInfoList">
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
                <li>
                    
                    <span class="item1">订单支付方式: <svg-icon icon-class="wx"></svg-icon><span>微信支付</span></span>
                    <span class="item2">如果您稍后预订，价格可能上涨</span>
                </li>
            </ul>
            <div class="paymentTips">
                <svg-icon icon-class="info"></svg-icon>
                <span>该房型支持延迟付款。您可以先订房，但不必立即支付。您可以在2018年10月5日支付本次预订。2018年10月5日前可免费取消。</span>
            </div>
        </div> 
    </div>
    <div class="otherPolicy">
        <div class="content">
            <h2 class="title">其他条款</h2>
            <div class="policys">
                <div class="policy">
                    <h3>
                        <svg-icon icon-class="checkInPolicy_gray"></svg-icon>
                        <span>入住/退房政策（客人须在办理入住时出示有效护照。）</span>
                    </h3>
                    <ul>
                        <li>入住/退房政策（客人须在办理入住时出示有效护照。）</li>
                        <li>退房办理起始时间: 12:00      退房办理截止时间: 12:00</li>
                    </ul>
                </div>
                <div class="policy">
                    <h3>
                        <svg-icon icon-class="addBedPolicy"></svg-icon>
                        <span>儿童加床政策</span>
                    </h3>
                    <span class="tip">根据预订房型/房价，该住宿设置的取消政策有所不同：</span>
                    <ul>
                        <li>不退款： 请注意，如取消、修改订单或未如期入住，住宿提供方仍将收取全额费用。</li>
                        <li>免费取消： 免费取消期限：截至入住日7天前。 入住日前7天内如果取消订单，您需要支付首晚房费。</li>
                    </ul>
                </div>
                    <div class="policy">
                    <h3>
                        <svg-icon icon-class="canclePolicy_gray"></svg-icon>
                        <span>取消政策</span>
                    </h3>
                    <ul>
                        <li>允许客人携带儿童入住。</li>
                        <li>部分房型允许1名6岁以下的儿童，使用现有床铺免费。</li>
                        <li>部分房型不可加床。</li>
                        <li>0-11岁儿童 [含11岁] 在不加床的情况下可免费入住 加床政策根据您所选定的客房而有所不同，更多详情请查看您所选定的客房人数限制。</li>
                    </ul>
                </div>
                <div class="policy policy--plat">
                    <h3>
                        <svg-icon icon-class="platPolicy"></svg-icon>
                        <span>平台政策</span>
                    </h3>
                    <ul>
                        <li>禁止在携程、去哪儿、去啊、艺龙、美团等OTA平台售卖。一经发现，本网站有权利直接取消订单，扣除全部房款。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'orderInfo'
}
</script>


<style lang="scss" scoped>
    @mixin common(){
        margin-top:32px;
        .title{
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 10px;
            font-size: 16px;
            color: #333;
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

    @mixin list(){
        padding: 12px 12px 4px;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        li{
            margin-bottom: 8px;
            font-size: 16px;
            color: #666;
        }
    }

    .operationInfo{
        @include common();
        .operationList{
            @include list();
        }
        .hotelInfo{
            margin-top: 42px;
            border:1px solid #ddd;
            border-radius: 4px;
            .mapping,.txtInfo{
                display: inline-block;
                vertical-align: middle;
            }
            .mapping{
                margin: 28px 0 28px 18px;
                width: 205px;
                height: 125px;
            }
            .chName,.enName{
                display: block;
                padding:0 20px;
                color: #333;
            }
            .chName{
                margin-top: 15px;
                margin-bottom: 8px;
                font-size: 16px;
            }
            .enName{
                margin-bottom: 8px;
                font-size: 12px;
            }
            .site{
                padding:0 5px;
                margin-top: 2px;
                font-size: 12px;
                color: #999;
                &__name{
                    margin-left: -10px;
                }
            }

        }
    }

    .orderInfo{
        @include common();
        .roomType,.roomNum,.orderNO{
            display: inline-block;
            vertical-align: middle;
            margin: 0 16px;
            font-size: 14px;
            color: #333;
        }
        .orderNO{
            float: right;
            color: #999;
        }
        table,tr{
            width: 100%;
            height: 100%;
        }
        table{
            margin-top: 10px;
            border-left: 1px solid #ddd;
        }
        tr{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #ddd;
        }
        td,th{
            text-align: center;
            border-right:1px solid #ddd;
            &:nth-of-type(1){
                flex-basis: 10%;
            }
            &:nth-of-type(2){
                flex-basis: 25%;
            }
            &:nth-of-type(3){
                flex-basis: 10%;
            }
            &:nth-of-type(4){
                flex-basis: 10%;
            }
            &:nth-of-type(5){
                flex-basis: 10%;
            }
            &:nth-of-type(6){
                flex-basis: 25%;
            }
            &:nth-of-type(7){
                flex-basis: 10%;
            }
        }
        th{
            height: 48px;
            background: #D8E4F7;
            line-height: 48px;
            font-size: 16px;
            color: #333;
        }
        td{
            padding: 14px 0;
            font-size: 14px;
            color: #333;
        }
    }

    .cancelationPolicy{
        @include common();
        .title,.tip{
            display: inline-block;
            vertical-align: middle;
        }
        .tip{
            margin-left: 20px;
            padding: 2px 8px;
            background: #266FE2;
            font-size: 12px;
            color: #fff;
        }
        .cancelationPolicyList{
            @include list();
        }
    }

    .specialNeed{
       @include common();
       .specialNeedList{
           @include list();
       }
    }

    .bookInfo{
        @include common();
       .bookInfoList{
           @include list();
           li{
               display: inline-block;
               vertical-align: middle;
               width: 33%;
           }
       }
    }

    .priceInfo{
        @include common();
       .priceInfoList{
           @include list();
           li{
                overflow: hidden;
                .item1{
                    float: left;
                }
                .item2{
                    float: right;
                }
                &:nth-last-of-type(2){
                    margin-top:24px;
                    .item2{
                        font-size: 36px;
                        color: #FF5341;
                        &::before{
                            content: '￥';
                            font-size: 14px;
                        }
                    }
                }
                &:nth-last-of-type(1){
                    .item2{
                        font-size: 14px;
                        color: #FF5341;
                    }
                }
            }
       }
        .paymentTips{
            margin-top: 12px;
            background: #FBF3E1;
            font-size: 12px;
            color: #333;
        }
    }

    .otherPolicy{
        margin-bottom:110px;
        @include common();
        .policys{
            padding: 0 12px;
            border: 1px solid #DDDDDD;
            border-radius: 4px;
        }
        .policy{
            margin: 25px 10px 15px 10px;
            font-size: 12px;
            color: #666;
            ul,.tip{
                margin-left: 50px;
            }
            li{
                line-height: 20px;
                &::before{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 5px;
                    content: '';
                    width: 2px;
                    height: 2px;
                    border-radius: 50%;
                    background-color: #333;
                }
            }
            &--plat{
                ul{
                    background-color: #F9FFF2;
                }
            }
        }
    }
        
</style>


<template>
    <div class="info">
        <div class="cancellationPolicy">
            <div>
                <h2 class="title">取消政策</h2>
                <span class="tip">不可取消</span>
            </div>
            <div class="details">
                该酒店不可取消。如未如期入住，酒店将收取全额费用。
            </div>
        </div>
        <div class="checkInInfo">
            <div>
                <h2 class="title">入住人信息</h2>
                <span class="tip">请至少填写一成人入住</span>
            </div>
            <div>
                <table>
                    <tr>
                        <th>房间</th>
                        <th>入住人数</th>
                        <th>
                            <span>入住人姓名</span>
                            <el-tooltip class="item" placement="top-start">
                                <div slot="content" class="priceTip">入住人姓名</div>
                                <el-button>
                                    <svg-icon icon-class="info"></svg-icon>
                                </el-button>
                            </el-tooltip>
                        </th>
                        <th>
                            <span>入住人国籍</span>
                            <el-tooltip class="item" placement="top-start">
                                <div slot="content" class="priceTip">入住人国籍</div>
                                <el-button>
                                    <svg-icon icon-class="info"></svg-icon>
                                </el-button>
                            </el-tooltip>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <div class="people">
                                <ul>
                                    <li>
                                        <span>成人1人</span>
                                    </li>
                                    <li class="child">
                                        <span>儿童1人</span>
                                        <span>3岁</span>
                                    </li>
                                    <li class="child">
                                        <span>儿童1人</span>
                                        <span>3岁</span>
                                    </li>
                                </ul>
                            </div>   
                        </td>
                        <td>
                            <div class="fullName">
                                <ul>
                                    <li>
                                        <div class="surename">
                                            <span>姓</span>
                                            <input type="text" placeholder="例如zhang"/>
                                        </div>
                                        <div class="name">
                                            <span>名</span>
                                            <input type="text" placeholder="例如san">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="surename">
                                            <span>姓</span>
                                            <input type="text" placeholder="例如zhang"/>
                                        </div>
                                        <div class="name">
                                            <span>名</span>
                                            <input type="text" placeholder="例如san">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="surename">
                                            <span>姓</span>
                                            <input type="text" placeholder="例如zhang"/>
                                        </div>
                                        <div class="name">
                                            <span>名</span>
                                            <input type="text" placeholder="例如san">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div class="nationnality">
                                <ul>
                                    <li>
                                        <span>中国大陆</span>
                                    </li>
                                    <li>
                                        <span>中国大陆</span>
                                    </li>
                                    <li>
                                        <span>中国大陆</span>
                                    </li>
                                </ul>
                            </div>
                            
                        </td>
                    </tr>
                </table>
                <div class="nationnalityTip">
                    <svg-icon icon-class="info"></svg-icon>
                    <span>当前酒店无法提供预订服务给该国籍客人</span>
                </div>
            </div>
        </div>
         <div class="orderNum">
            <span class="orderNum__txt">公司订单号</span>
            <input type="text" class="orderNum__ipt"/>
             <el-tooltip class="item" placement="top-start">
                <div slot="content" class="priceTip">入住人姓名</div>
                <el-button>
                    <svg-icon icon-class="doubt"></svg-icon>
                </el-button>
            </el-tooltip>
        </div>
        <div class="specialNeed">
            <div>
                <h2 class="title">特殊需求</h2>
                <span class="tip">以下需求会发送到酒店，但无法保证一定满足，实际以酒店当天安排为准。</span>
            </div>
            <div class="need">
                <span class="needName">床型偏好</span>
                <el-checkbox-group v-model="bedType">
                    <div class="needItem">
                        <svg-icon icon-class="bigBed"></svg-icon>
                         <el-checkbox label="尽量大床"></el-checkbox>
                    </div>
                   <div class="needItem">
                        <svg-icon icon-class="doubleBed"></svg-icon>
                        <el-checkbox label="尽量双人床"></el-checkbox>
                   </div>
                </el-checkbox-group>
            </div>
            <div class="need">
                <span class="needName">吸烟偏好</span>
                <el-checkbox-group v-model="bedType">
                    <div class="needItem">
                        <svg-icon icon-class="smokingRoom"></svg-icon>
                         <el-checkbox label="吸烟房"></el-checkbox>
                    </div>
                   <div class="needItem">
                        <svg-icon icon-class="nonSmokingRoom"></svg-icon>
                        <el-checkbox label="禁烟房"></el-checkbox>
                   </div>
                </el-checkbox-group>
            </div>
            <div class="need">
                <span class="needName">楼层偏好</span>
                <el-checkbox-group v-model="bedType">
                    <div class="needItem">
                        <svg-icon icon-class="highFloor"></svg-icon>
                         <el-checkbox label="高楼层"></el-checkbox>
                    </div>
                   <div class="needItem">
                        <svg-icon icon-class="lowerFloor"></svg-icon>
                        <el-checkbox label="低楼层"></el-checkbox>
                   </div>
                </el-checkbox-group>
            </div>
            <div class="need">
                <span class="needName">加床</span>
                <el-checkbox-group v-model="bedType">
                    <div class="needItem">
                        <svg-icon icon-class="needBed"></svg-icon>
                        <el-checkbox label="需要加床"></el-checkbox>
                        <span class="addBedtip">酒店可能会另外收取加床费用</span>
                    </div>
                   <div class="needItem">
                        <svg-icon icon-class="babycot"></svg-icon>
                        <el-checkbox label="加婴儿床"></el-checkbox>
                   </div>
                </el-checkbox-group>
            </div>
            <div class="iptBox">
                <textarea name="" id="" cols="30" rows="10" class="iptBox__ta"></textarea>
                <span class="iptBox__tip">还能输入200字</span>
            </div>
        </div>
        <div class="bookInfo">
            <div>
                <h2 class="title">预订人信息</h2>
            </div>
            <div class="iptb">
                <span class="iptb__txt">姓名</span>
                <input type="text" class="iptb__ipt">
                <span class="iptb__tip">请输入预订人姓名</span>
            </div>
            <div class="iptb">
                <span class="iptb__txt">电子邮箱</span>
                <input type="text" class="iptb__ipt">
                <span class="iptb__tip">请输入电子邮箱地址</span>
            </div>
            <div class="iptb">
                <span class="iptb__txt">手机号码</span>
                <input type="text" class="iptb__ipt">
                <span class="iptb__tip">输入手机号码</span>
            </div>
        </div>
        <div class="hotelPolicy">
            <div>
                <h2 class="title">酒店政策</h2>
            </div>
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
</template>

<script>
export default {
    name:'info',
    data(){
        return{
            bedType:[],
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
        .title,.tip{
            display: inline-block;
            vertical-align: middle;
        }
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

    .info{
        @include inlineBlock(top);
        width: 770px;
        padding-top: 20px;
    }

    .cancellationPolicy{
        @include common();
        .tip{
            margin-left: 20px;
            padding: 2px 8px;
            background-color: #FF5341;
            font-size: 12px;
            color: #fff;
        }
        .details{
            margin-top:16px;
            padding: 20px;
            border:1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            color: #FF5341;
        }
    }

    .checkInInfo{
        margin-top:50px;
        margin-bottom: 50px;
        @include common();
        .tip{
            margin-left: 8px;
            font-size: 12px;
            color: #FF5341;
        }
        table{
            width: 100%;
            border-right:1px solid #ddd;
            tr{
                display: flex;
                justify-content: center;
                width: 100%;
                border-bottom:1px solid #ddd;
                &:nth-of-type(1){
                    background-color: #D8E4F7;
                }
            }
            th{
                height: 48px;
                line-height: 48px;
                font-size: 16px;
                color: #333;
                border-right:1px solid #ddd;
                &:nth-of-type(1){
                    flex-basis: 10%;
                }
                &:nth-of-type(2){
                    flex-basis: 20%;
                }
                &:nth-of-type(3){
                    flex-basis: 50%;
                }
                &:nth-of-type(4){
                    flex-basis: 20%;
                    border-right:none;
                }
            }
            td{
                display: flex;
                align-items: center;
                justify-content: center;
                border-left:1px solid #ddd;
                font-size: 12px;
                color: #333;
                &:nth-of-type(1){
                    flex-basis: 10%;
                }
                &:nth-of-type(2){
                    flex-basis: 20%;
                }
                &:nth-of-type(3){
                    flex-basis: 50%;
                }
                &:nth-of-type(4){
                    flex-basis: 20%;
                }
                .people,.fullName,.nationnality{
                    flex-grow: 1;
                    li{
                        height: 48px;
                        text-align: center;
                        line-height: 48px;
                        border-bottom: 1px solid #ddd;
                        &:nth-last-of-type(1){
                            border-bottom: none;
                        }
                    }
                }
                input{
                    display: inline-block;
                    appearance: none;
                    border: none;
                    padding: 0;
                    width: 80px;
                    height: 100%;
                }
                .surename,.name{
                    display: inline-block;
                    width: 48%;
                    text-align: center;
                }
                .surename{
                    border-right: 1px solid #ddd;
                }
            }
        }
        .nationnalityTip{
            margin-top: 12px;
            background-color: #FBF3E1;
            font-size: 12px;
            color: #333;
        }
    }

    .orderNum{
        .orderNum__txt{
            margin:0 28px 0 0;
        }
        .orderNum__ipt{
            width: 350px;
            height: 48px;
            border: 1px solid #DDDDDD;
            border-radius: 4px;
        }
    }

    .specialNeed{
        margin-top:50px; 
        @include common();
        .tip{
            margin-left: 12px;
            font-size: 12px;
            color: #266FE2;
        }
        .need{
            margin-top: 20px;
            .needName{
                padding: 0 28px 0 16px;
                display: inline-block;
                vertical-align: middle;
                width: 60px;
                font-size: 14px;
                color: #333;
            }
            .needItem{
                display: inline-block;
                vertical-align: middle;
                .addBedtip{
                    display: block;
                    margin-top: 5px;
                    font-size: 12px;
                    color: #999;
                }
            }
            .svg-icon{
                position: absolute;
                left: 16px;
                top: -6px;
            }
        }
        .iptBox{
            margin-top: 30px;
            .iptBox__ta{
                appearance: none;
                display: block;
                padding:10px 25px;
                width: 770px;
                height: 84px;
                border: 1px solid #DDD;
                border-radius: 4px;
                resize: none;
                box-sizing: border-box;
            }
            .iptBox__tip{
                float: right;
                margin-top:10px;
                font-size: 12px;
                color: #333333;
            }
        }
    }

    .bookInfo{
        margin-top: 50px;
        @include common();
        .iptb{
            margin-top: 20px;
            padding-left: 18px;
            &__txt{
                display: inline-block;
                vertical-align: middle;
                width: 110px;
                font-size: 16px;
                color: #333;
            }
            &__ipt{
                width: 350px;
                height: 48px;
                border: 1px solid #ddd;
            }
            &__tip{
                margin-left: 20px;
                font-size: 12px;
                color: #FF5341;
            }
        }
    }
    
    .hotelPolicy{
        margin-top: 50px;
        @include common();
        .policys{
            border:1px solid #ddd;
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



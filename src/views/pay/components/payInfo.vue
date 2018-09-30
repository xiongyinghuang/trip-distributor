<template>
    <div>
        <div class="aboutHotel">
            <div class="content">
                <div class="hotelInfo">
                    <span class="name">酒店名：冰城双卫Sundt</span>
                    <ul class="infoList">
                        <li>
                            订单号：3456789000 
                        </li>
                        <li>
                            费用类型：房费/税费/其他费用 
                        </li>
                        <li>
                            入离日期：2018/11/01-2018/11/09   
                        </li>
                        <li>
                            取消政策：不可取消
                        </li>
                        <li>
                            取消政策：不可取消
                        </li>
                        <li>
                            入离日期：2018/11/01-2018/11/09   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="aboutPay">
            <div class="content">
                <div class="payInfo">
                    <div class="price">
                        <span>应付金额</span>
                        <span class="price__num">¥ 249.00</span>
                    </div>
                    <div class="payTip">
                        <svg-icon icon-class="info"></svg-icon>
                        <span>支付剩余有效时间： <i class="payTip__time">12分59秒</i> 请尽快完成支付，否则可能会因价格变动被取消订单。</span>
                    </div>
                    <div class="payPlats">
                        <h2 class="title">请选择支付平台</h2>
                        <div>
                            <span class="plat">
                                <svg-icon icon-class="wx"></svg-icon>
                                微信支付
                            </span>
                            <span class="plat">
                                <svg-icon icon-class="zfb"></svg-icon>
                                支付宝
                            </span>
                        </div>
                    </div>
                    <div class="">
                        <span class="btnBack"><router-link to="">返回修改订单</router-link></span>
                        <span class="btnPay"><router-link to="">立即支付</router-link></span>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name:'payInfo'
}
</script>

<style lang="scss" scoped>
    .aboutHotel{
        width: 100%;
        height: 180px;
        background: #F4F7FD;
    }
    .hotelInfo{
        padding:0 40px;
        .name{
            display: block;
            padding: 40px 0 18px 0;
            font-size: 18px;
            color: #333;
        }
        .infoList{
            li{
                display: inline-block;
                margin-bottom: 5px;
                width: 24%;
                font-size: 14px;
                color: #666;
            }
            
        }
    }
    .payInfo{
        padding:0 40px;
        .price{
            margin:22px auto;
            padding-left:28px;
            width: 1062px;
            height: 60px;
            background: url(../../../assets/img/bg6.svg) no-repeat center top;
            background-size: 100% 100%;
            font-size: 18px;
            color: #FF5341;
            line-height: 60px;
            &__num{
                margin-left: 30px;
                font-size: 30px;
            }
        }
        .payTip{
            margin-bottom: 65px;
            font-size: 14px;
            color: #333;
            &__time{
                font-size: 18px;
                color: #FF5341;
            }
        }
        .payPlats{
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
            .plat{
                display: inline-block;
                vertical-align: middle;
                padding: 10px 40px;
                margin: 35px 13px 0 13px;
                border: 1px solid #DDDDDD;
                border-radius: 4px;
                cursor: pointer;
            }
        }
        .btnBack,.btnPay{
            display: inline-block;
            vertical-align: middle;
            margin: 85px 13px 110px 13px;
            border: 1px solid #266FE2;
            padding: 8px 20px;
            border-radius: 4px;
            .router-link-active{
                font-size: 16px;
            }
        }
        .btnBack{
            .router-link-active{
                color: #266FE2;
            }
        }
        .btnPay{
            .router-link-active{
               color: #fff;
            }
            background: #266FE2;
        }

    }
</style>



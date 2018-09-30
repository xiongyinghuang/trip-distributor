<template>
    <div class="orderStates">
        <div class="content">
            <div class="states states--finished" style="display:none">
                <table>
                    <tr>
                        <td>
                            <div>
                                <span class="orderNO">订单号：TB66665555</span>
                                <span class="oderId">AgoodbookingID:1234456</span>
                            </div>
                        </td>
                        <td>
                            <div class="orderState">
                                <span class="orderState__txt">订单状态：</span>
                                <span class="orderState__state">已完成</span>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="states states--confirming">
                <table>
                    <tr>
                        <td>
                            <div>
                                <span class="orderNO">订单号：TB66665555</span>
                                <span class="oderId">AgoodbookingID:1234456</span>
                            </div>
                        </td>
                        <td>
                            <div class="orderState">
                                <span class="orderState__txt">订单状态：</span>
                                <span class="orderState__state">确认中</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span class="btnPay">立即付款：￥1111元</span>
                                <span class="btnDownload">下载入住凭证</span>
                                <span class="btnIrreversible">取消订单</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="states states--confirmed" style="display:none">
                <table>
                    <tr>
                        <td>
                            <div>
                                <span class="orderNO">订单号：TB66665555</span>
                                <span class="oderId">AgoodbookingID:1234456</span>
                            </div>
                        </td>
                        <td>
                            <div class="orderState">
                                <span class="orderState__txt">订单状态：</span>
                                <span class="orderState__state">已确认</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span class="btnCancel">取消订单</span>
                                <span class="btnDownload">下载入住凭证</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="states states--toBePaied" style="display:none">
                <table>
                    <tr>
                        <td>
                            <div>
                                 <span class="orderNO">订单号：TB66665555</span>
                                <span class="oderId">AgoodbookingID:1234456   </span>
                            </div>
                        </td>
                        <td>
                            <div class="orderState">
                                <span class="orderState__txt">订单状态：</span>
                                <span class="orderState__state">待支付</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <div>
                                    <span class="btnCancel">取消订单</span>
                                    <span class="btnPay">立即付款：￥1111元</span>
                                </div>
                                <span class="orderTip">请在2018年10月5日前支付订单，若超时将为您关闭订单。剩余支付时</span>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'orderStates',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin common(){
        display: inline-block;
        margin: 0 0 10px 20px;
        padding: 8px 25px;
        border: 1px solid #266FE2 ;
        border-radius: 4px;
        font-size: 14px;
        color: #266FE2 ;
        text-align: center;
        cursor: pointer;
    }
    .orderStates{
        margin: 35px 0 0 0;
    }
    .states{
        width: 100%;
        height: 125px;
        background: url(../../../assets/img/bg5.svg);
        table,tr,td{
            width: 100%;
            height: 100%;
        }
        table{
            tr,td{
                display: flex;
                justify-content: center;
            }
            td{
                justify-content: center;
                align-items: center;
                &:nth-of-type(1){
                    flex-basis: 30%;
                }
                &:nth-of-type(2){
                    flex-basis: 20%;
                }
                &:nth-of-type(3){
                    flex-basis: 50%;
                }
            }
        }
        .orderNO{
            display: block;
            margin-bottom: 5px;
            font-size: 20px;
            color: #333;
        }
        .orderId{
            font-size: 12px;
            color: #999;
        }
        .orderState{
            &__txt{
                font-size: 20px;
                color: #333;
            }
            &__state{
                font-size: 20px;
                color: #FF5341;
            }
        }
        .btnIrreversible{
            @include common();
            border-color: #999;
            color: #999;
            cursor: default;
        }
        .btnCancel{
            @include common();
        }
        .btnPay{
            @include common();
            background-color: #266FE2;
            color: #fff ;
        }
        .btnDownload{
            @include common();
            background-color: #266FE2;
            color: #fff ;
        }
        .orderTip{
            clear: both;
            display: block;
            font-size: 12px;
            color: #FF5341;
            text-align: right;
        }

    }
</style>



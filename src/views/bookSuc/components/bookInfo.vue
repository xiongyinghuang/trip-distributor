<template>
    <div>
        <div class="content">
            <div class="bookSuc">
                <div class="sucResult">
                    <img src="@/assets/img/bookSuc.svg" alt="" class="sucResult__mapping"/>
                    <span class="sucResult__tip">酒店预订成功！</span>
                </div>
                <ul class="tipList">
                    <li>该房型支持延迟付款。您可以先订房，但不必立即支付。</li>
                    <li>我们将为您保留房间至2018年10月5日，您可以在2018年10月6日前任意时间支付本次预订。</li>
                    
                    <li>2018年10月6日前可免费取消本次订单。查看该订单取消政策。</li>
                </ul>
            </div>
            <div class="dealing">
                <span class="tip">您的订单正在处理，请耐心等待</span>
            </div>
            <div>
                <span class="btnSee"><router-link to="">查看订单</router-link></span>
                <span class="btnBook"><router-link to="">继续预订</router-link></span>
            </div>
            <div class="bookTip">
                <svg-icon icon-class="info"></svg-icon>
                <span class="bookTip__txt">温馨提示：网站不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'bookInfo'
}
</script>

<style lang="scss" scoped>
    .content{
        text-align: center;
    }
    .bookSuc{}
    .sucResult{
        padding-top:70px;
        &__mapping{
            display: block;
            margin: 0 auto;
        }
        &__tip{
            display: block;
            margin: 25px auto;
            font-size: 24px;
            color: #333;
            text-align: center;
        }
    }
    .tipList{
        width: 530px;
        margin: 0 auto;
        li{
            font-size: 18px;
            color: #666;
            line-height: 30px;
            list-style:disc;
            text-align: left;
            // &::before{
            //     display: inline-block;
            //     vertical-align: middle;
            //     margin-right: 5px;
            //     content: '';
            //     width: 2px;
            //     height: 2px;
            //     border-radius: 50%;
            //     background-color: #333;
            // }
        }
    }
    .dealing{
        padding-top:170px;
        .tip{
            display: block;
            font-size: 24px;
            color: #333;
            text-align: center;
        }
    }
    .btnSee,.btnBook{
        display: inline-block;
        vertical-align: middle;
        margin: 32px 10px 55px 10px;
        border: 1px solid #266FE2;
        padding: 5px 20px;
        border-radius: 2px;
        .router-link-active{
            font-size: 16px;
        }
    }
    .btnBook{
        .router-link-active{
            color: #266FE2;
        }
    }
    .btnSee{
        .router-link-active{
            color: #fff;
        }
        background: #266FE2;
    }
    .bookTip{
        display: inline-block;
        margin: 0 auto 180px;
        padding: 2px 5px;
        background: #FBF3E1;
        border-radius: 4px;
        &__txt{
            margin-left: -10px;
            font-size: 12px;
            color: #333;
        }
    }
</style>



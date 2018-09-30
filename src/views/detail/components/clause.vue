<template>
    <div class="clause">
        <div class="content">
            <h2 class="title">酒店条款</h2>
            <div class="clauseItem">
                <div class="genre">
                    <svg-icon icon-class="checkInPolicy"></svg-icon>
                    <span> 入住/退房政策</span>
                </div>
            
                <ul class="clauseList">
                    <li>入住办理起始时间: 15:00</li>
                    <li>入住办理截止时间: 00:00</li>
                </ul>
                <span class="tip">客人须在办理入住时出示有效护照。</span>
                <ul class="clauseList">
                    <li>退房办理起始时间: 12:00</li>
                    <li>退房办理截止时间: 12:00</li>
                </ul>
            </div>
            <div class="clauseItem">
                <div class="genre">
                    <svg-icon icon-class="cancelPolicy"></svg-icon>
                    <span>入住/退房政策</span>
                </div>
                <ul class="clauseList">
                    <li>根据预订房型/房价，该住宿设置的取消政策有所不同：</li>
                    <li>不退款： 请注意，如取消、修改订单或未如期入住，住宿提供方仍将收取全额费用。</li>
                    <li>免费取消： 免费取消期限：截至入住日7天前。 入住日前7天内如果取消订单，您需要支付首晚房费。</li>
                </ul>
            </div>
            <div class="clauseItem">
                <div class="genre">
                    <svg-icon icon-class="addBed"></svg-icon>
                    <span>儿童和加床</span>
                </div>
                <ul class="clauseList">
                    <li>允许客人携带儿童入住。</li>
                    <li>部分房型允许1名6岁以下的儿童，使用现有·免费。</li>
                    <li>部分房型不可加床。</li>
                    <li>0-11岁儿童 [含11岁] 在不加床的情况下可免费入住 加床政策根据您所选定的客房而有所不同，更多详情请查看您所选定的客房人数限制。</li>
                </ul>
            </div>
            <div class="clauseItem">
                <div class="genre">
                    <svg-icon icon-class="otherPolicy"></svg-icon>
                    <span>其它政策</span>
                </div>
                <ul class="clauseList">
                    <li>槟榔州政府为每间客房每晚收取3马来西亚林吉特的强制性地方政府费用。该费用由度假村收取。</li>
                    <li>所有外籍客人均须支付每房每晚10马币的旅游税。房价不含上述税费，客人必须在办理入住时缴税。持有效马来西亚身份证或有效永久居民卡的客人无需支付该税。</li>
                    <li>您将以住宿当地的货币（MYR）付费给住宿。所显示的价格（RMB）仅供参考并以预订时的汇率为准。</li>
                </ul>
            </div>
        </div> 
    </div>
</template>


<script>
export default {
    name:'clause',
    data(){

    }
}
</script>


<style lang="scss" scoped>
    .clause{
        margin-top: 30px;
        margin-bottom: 40px;
        .content{
            background-color: #F9FFF2;
        }
        .title{
            position: relative;
            padding-top: 30px;
            padding-left: 20px;
            font-size: 18px;
            color: #333;
            font-weight: normal;
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
        .clauseItem{
            padding: 40px 75px 0 52px;
            &:nth-last-of-type(1){
                padding-bottom: 40px;
            }
            .genre{
                margin-left: 10px;
                font-size: 14px;
                color: #333333;
            }
            .clauseList{
                padding-left: 50px;
                li{

                    font-size: 14px;
                    color: #666;
                    line-height: 20px;
                    &::before{
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 5px;
                        content: '';
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #333;
                    }
                }
            }
            .tip{
                display: block;
                margin: 14px 0;
                padding-left: 52px;
                font-size: 14px;
                color: #999;
            }
        }
    }
</style>


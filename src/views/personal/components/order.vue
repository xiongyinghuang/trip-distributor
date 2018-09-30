<template>
    <div class="order">
        <div class="queryPanel">
            <ul class="optionList">
                <li>
                    <span class="genre">订单号</span>
                    <input type="text" placeholder="请输入订单号" class="ipt">
                </li>
                <li>
                    <span class="genre">旅行社团号</span>
                    <input type="text" placeholder="请输入旅行社团号" class="ipt">
                </li>
                <li>
                    <span class="genre">酒店名称</span>
                    <input type="text" placeholder="请输入酒店名称" class="ipt">
                </li>
                <li>
                    <span class="genre">订单状态</span>
                    <el-select v-model="value" placeholder="请选择"></el-select>
                </li>
                <li>
                    <span class="genre">支付状态</span>
                    <el-select v-model="value" placeholder="请选择"></el-select>
                </li>
                <li>
                    <span class="genre">支付方式</span>
                    <el-select v-model="value" placeholder="请选择"></el-select>
                </li>
                <li>
                    <span class="genre">入住人</span>
                    <input type="text" placeholder="请填入入住人姓名" class="ipt">
                </li>
            </ul>
            <div class="selDate">
                <span class="genre">日期选择</span>
                <el-checkbox-group 
                    v-model="checkedCities">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="dateIpt">
                <el-date-picker
                    v-model="date"
                    type="daterange"
                    :start-placeholder = "开始日期"
                    :end-placeholder = "结束日期"
                    :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
            </div>
            <div class="btns">
                <span class="btn btn--Query">查询</span>
                <span class="btn bnt--Empty">清空</span>
                <span class="btn btn--Export">导出</span>
            </div>
        </div>
        <div class="orderList">
            <div class="all">共找到<span class="all__num">10</span>条订单</div>
            <!-- <div class="selNum">每页显示</div> -->
            <table>
                <tr>
                    <th>WeHotel订单号公司订单号</th>
                    <th>旅行社团号</th>
                    <th>店/房型/城市</th>
                    <th>房间数</th>
                    <th>下单时间</th>
                    <th>支付时间</th>
                    <th>入住人</th>
                    <th>入住时间退房时间</th>
                    <th>免费取消截止日期</th>
                    <th>订单金额</th>
                    <th>订单状态</th>
                    <th>支付状态</th>
                    <th>支付方式</th>
                    <th>操作人</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>H2018101012000301</td>
                    <td>1020172631</td>
                    <td>启东恒大海上威尼斯度假酒店/园景双床房/启东</td>
                    <td>1</td>
                    <td>2018-10-1010:10:10</td>
                    <td>2018-10-1010:10:10</td>
                    <td>zhangsan</td>
                    <td>2018-10-10至2018-10-13(共2晚）</td>
                    <td>2018-10-1010:10:10</td>
                    <td>CNY 2000</td>
                    <td>已确认</td>
                    <td>已支付</td>
                    <td>微信</td>
                    <td>管理员小A</td>
                    <td>
                        <span>去支付</span>
                        <span>查看订单，下载入住凭证</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:'order',
    data(){
        return{
            checkedCities:[],
            cities:['上海', '北京', '广州', '深圳'],
            date:''
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin inlineBlock($align){
        display: inline-block;
        vertical-align: $align;
    }
    .order{
        @include inlineBlock(top);
        margin-top:5px;
        width: 970px;
        
    }
    .queryPanel{
        position: relative;
        width: 970px;
        padding: 28px 10px 28px 50px;
        border: 1px solid #ddd;
    }
    .optionList{
        margin-bottom: 30px;
        li{
            @include inlineBlock(top);
            margin-bottom: 20px;
            width: 32%;
            .genre,.ipt{
                @include inlineBlock(middle);
                font-size: 12px;
                color: #666;
            }
            .genre{
                margin-right: 2%;
                width: 22%;
            }
            .ipt{
                padding: 0 15px;
                width: 60%;
                height: 35px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
        }
    }
    .selDate{
        @include inlineBlock(middle);
        .genre{
            margin-right: 20px;
            font-size: 12px;
            color: #666;
        }   
    }
    .dateIpt{
        @include inlineBlock(middle);
        margin-right: 65px;
        float: right;
    }
    .btns{
        margin: 70px 50px 0 0;
        text-align: right;
        clear: both;
        .btn{
            display: inline-block;
            margin: 0 10px;
            padding: 7px 34px;
            background: #266FE2;
            border-radius: 4px;
            font-size: 16px;
            color: #FFF;
            cursor: pointer;
        }
    }
    .orderList{
        position: absolute;
        margin-top: 75px;
        width: 1200px;
        .all{
            font-size: 18px;
            color: #333;
            &__num{
                font-size: 18px;
                color: #266FE2;
            }
        }
        table,tr{
            width: 100%;
        }
        tr{
            display: flex;
            justify-content: center;
        }
        th{
            background: #D8E4F7;
            flex-basis: 5%;
            height: 44px;
        }
        td{
            flex-basis: 5%;
        }
        th,td{
            font-size: 12px;
            color: #333;
            border-right:1px solid #ddd;
            &:nth-of-type(1),&:nth-of-type(3){
                flex-basis: 10%;
            }
            &:nth-last-of-type(1){
                flex-basis: 20%;
            }
        }
        
    }
</style>


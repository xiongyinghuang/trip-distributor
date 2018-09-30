<template>
    <div class="optionPanel">
        <div class="content">
            <div class="allOptions">
                <div class="place">
                    <span class="title">酒店位置</span>
                    <div class="options">
                        <el-checkbox-group v-model="options.placecheckList" @change="handleChange(options.placecheckList)">
                            <el-checkbox v-for="(value,key,index) in zone" :key="index" :label="key" :value="value"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <span class="btnSpread">展开全部</span>
                </div>
                <div class="starLevel">
                    <span class="title">酒店星级</span>
                    <div class="options">
                        <el-checkbox-group v-model="options.LevelList" @change="handleChange(options.LevelList)">
                            <el-checkbox v-for="(value,key,index) in starLevel" :key="index" :label="key" :value="value"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="brand">
                    <span class="title">酒店品牌</span>
                    <div class="options">
                        <el-checkbox-group v-model="options.brandList" @change="handleChange(options.brandList)">
                            <el-checkbox v-for="(value,key,index) in brand" :key="index" :label="key" :value="value"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <span class="btnSpread">展开全部</span>
                </div>
                <div class="price">
                    <span class="title">价格区间</span>
                    <div class="options">
                        <el-checkbox-group v-model="options.priceList" @change="handleChange(options.priceList)">
                            <el-checkbox v-for="(value,key,index) in price" :key="index" :label="key" :value="value"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="custom">
                        <span class="txt">自定义</span>
                        <el-input
                            v-model="customerPrice1">
                        </el-input>
                        <span>-</span>
                        <el-input
                            v-model="customerPrice2">
                        </el-input>
                        <el-button class="btnSure" @click="getCustomerPrice">确定</el-button>
                    </div>
                </div>
            </div>
            <div class="aboutTag">
                <div v-for="(value,index) in options" :key="index" class="tag">
                    <el-tag
                        v-for="(tag,index) in value"
                        :key="index"
                        closable
                        @close="handleClose(tag,value)">
                        {{tag}}
                    </el-tag>
                </div>
                <div @click="clear()" class="btnClear">
                    <svg-icon icon-class="clear"></svg-icon>
                    <span class="btnClear__txt">一键清空条件</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name:'optionPanel',
    data(){
        return{
            zone:{
                '不限':'不限',
                'A区域':'A',
                'B区域':'B',
                'C区域':'C',
                'D区域':'D',
                'E区域':'E',
                'F区域':'F',
            },
            starLevel:{
                '不限':1,
                '经济型/青旅':2,
                '三星级/舒适':3,
                '四星级/高档':4,
                '五星级/豪华':5
            },
            brand:{
                '不限':'不限',
                '万豪':'wh',
                '喜来登':'xld',
                '洲际':'zj',
                '希尔顿':'xed',
                '七天':'qt',
                '潮漫':'cm',
            },   
            price:{
                '不限':'1',
                '小于400':'2',
                '400-600':'3',
                '600-800':'4',
            },
            options:{
                placecheckList:[],
                LevelList:[],
                brandList:[],
                priceList:[],
                customPriceList:[]
            },
            customerPrice1:'',
            customerPrice2:'' 
        }
    },
    methods:{
        handleClose(tag,obj) {
            obj.splice(obj.indexOf(tag), 1);
        },
        handleChange(obj){
            if(obj.indexOf('不限')!= -1&&obj.length!=1){
                if(obj[0]=='不限'){
                    obj.splice(obj.indexOf('不限'), 1);
                }else{
                    obj.splice(0,obj.length);
                    this.$set(obj,0,'不限')
                }
            } 
        },
        clear(){
            var options = this.options;
            for(let i in options){
                let obj = options[i];
                obj.splice(0,obj.length);
            }
        },
        getCustomerPrice(){
            let price1 = this.customerPrice1
            let price2 = this.customerPrice2
            let price;
            if(price1 && price2){
                price = price1 + ' - ' + price2;
            }else{
                price = '>' + price1|| '<' + price2
            }
            this.options.customPriceList.push(price);
        }
    },
    watch:{
        options:{
            handler(newValue){
                console.log(newValue);
            },
            deep:true
        }
    }
}
</script>

<style lang="scss" scoped>
.optionPanel{
    padding-top: 20px;
    .allOptions{
        width: 100%;
        border:1px solid #ddd;
        padding:0 25px 25px;
        .btnSpread{
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right:20px;
            font-size: 14px;
            color: #266FE2;
            cursor: pointer;
        }
    }
    .place,.starLevel,.brand,.price{
        position: relative;
        height: 60px;
        line-height: 60px;
        border-bottom:1px solid #ddd;
        .title{
            font-size: 14px;
            color: #999999;
        }
        .options{
            padding-left: 35px;
            display: inline-block;
            vertical-align: top;
        }
    }
    .custom{
        position: absolute;
        right: 20px;
        top:50%;
        transform: translateY(-50%);
        .txt{
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #333;
            margin-right: 15px;
        }
        .btnSure{
            margin-left: 40px;
            padding:0;
            border:0;
            font-weight: normal;
            font-size: 14px;
            color: #266FE2;
            text-align: right;
            cursor: pointer;
        }
    }

    .aboutTag{
        margin: 30px 0 15px 0;
    }
    .btnClear{
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        &__txt{
             display: inline-block;
        vertical-align: middle;
            font-size: 16px;
            color: #266FE2;
        }
    }

}
</style>



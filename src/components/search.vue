<template>
     <div class="comSearch">
        <div class="content">
            <el-form ref="form" :model="form">
                <el-popover
                    placement="bottom"
                    width="400"
                    trigger="click">
                    <div>
                        <div class="items">
                            <div class="genre">
                                <svg-icon icon-class="city"></svg-icon>
                                <span class="genre__name">城市</span>
                            </div>
                            <ul class="hotels">
                                <li v-for="(city,index) in citys" :key="index">
                                    {{city}}
                                </li>
                            </ul>
                        </div>
                        <div class="items">
                            <div class="genre">
                                <svg-icon icon-class="hotel"></svg-icon>
                                <span class="genre__name">酒店</span>
                            </div>
                            <ul class="hotels">
                                <li v-for="(hotel,index) in hotels" :key="index">
                                    {{hotel}}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div slot="reference" class="destinationIpt">
                        <svg-icon icon-class="search"/>
                        <el-input placeholder="搜索目的地或酒店名" clearable></el-input>
                    </div>
                </el-popover>
                <div class="dateIpt">
                    <svg-icon icon-class="date"/>
                    <el-date-picker
                        v-model="date"
                        type="daterange"
                        start-placeholder = "开始日期"
                        end-placeholder = "结束日期"
                        :picker-options="disableDate"
                        :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                    <span class="allDay">共<i>{{ allDay(date[0],date[1]) }}</i>晚</span>
                </div>
                <div class="roomSel">
                    <svg-icon icon-class="room"/>
                    <el-select v-model="roomNum" placeholder="1间客房">
                        <el-option
                            v-for="(value,key,index) in rooms"
                            :key="index"
                            :label="key"
                            :value="value">
                        </el-option>
                    </el-select>
                </div>
                <div class="peopleSel">
                    <div class="adult">
                        <svg-icon icon-class="occupant"/>
                        <el-select v-model="adultNum" placeholder="2位成人">
                            <el-option
                                v-for="(value,key,index) in adults"
                                :key="index"
                                :label="key"
                                :value="value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="child">
                        <el-popover
                            placement="bottom"
                            width="250"
                            trigger="click">
                            <div class="selPeople">
                                <span class="selPeople__title">每间入住</span>
                                <el-input-number v-model="childNum" @change="handleAge(childNum)" :min="0"  :max="10"></el-input-number>
                            </div>
                            <div v-for="(num,index) in childNum" :key="index" class="selAge">
                                <span class="selAge__title">儿童年龄</span>
                                <el-input-number  :min="1" v-model="ages[index]"></el-input-number>
                            </div>
                            <el-input readonly slot="reference" v-bind:value="childNum + ' 位儿童'"></el-input>
                        </el-popover>
                    </div>
                </div>
                <button class="btnSubmit">搜索</button>
            </el-form>
        </div>
     </div>
 </template>

 <script>
 import {format} from '@/utils/date'
 export default {
     name:'search',
     data(){
         return{
             form:{},
             citys:['宁安华都商务宾馆','牡丹江东京城米兰时尚宾馆','宁安星期五假日宾馆'],
             hotels:['七天酒店','丽枫酒店'],
             rooms:{
                 '1间客房':1,
                 '2间客房':2,
                 '3间客房':3,
                 '4间客房':4,
                 '5间客房':5,
                 '6间客房':6,
                 '7间客房':7,
                 '8间客房':8,
                 '9间客房':9,
             },
             adults:{
                 '1位成人':1,
                 '2位成人':2,
                 '3位成人':3,
                 '4位成人':4,
                 '5位成人':5,
                 '6位成人':6,
                 '7位成人':7,
                 '8位成人':8,
                 '9位成人':9,
                 '10位成人':10,
                 '11位成人':11,
                 '12位成人':12,
                 '13位成人':13,
                 '14位成人':14,
                 '15位成人':15,
                 '16位成人':16,
                 '17位成人':17,
                 '18位成人':18,
                 '19位成人':19,
                 '20位成人':20,
                 '21位成人':21,
                 '22位成人':22,
                 '23位成人':23,
                 '24位成人':24,
                 '25位成人':25,
                 '26位成人':26,
                 '27位成人':27,
                 '28位成人':28,
                 '29位成人':29,
                 '30位成人':30,
                 '31位成人':31,
                 '32位成人':32,
                 '33位成人':33,
                 '34位成人':34,
                 '35位成人':35,
                 '36位成人':36
             },
             children:{
                '1位儿童':1,
                '2位儿童':2,
                '3位儿童':3,
                '4位儿童':4,
                '5位儿童':5,
                '6位儿童':6,
                '7位儿童':7,
                '8位儿童':8,
                '9位儿童':9
             },
            date:'',
            roomNum:'',
            adultNum:'',
            childNum:'',
            ages:{},
            disableDate:{
                disabledDate(){
                    return;
                }
            }
         }
    },
    methods:{
        allDay:(time1,time2)=>{
            const t1 = new Date(time1)
            const t2 = new Date(time2)
            if(t1>t2){
                const days = t1.getTime() - t2.getTime()
                const time = parseInt(days/(1000*60*60*24))
                return time;
            }else if(t1<t2){
                const days = t2.getTime() - t1.getTime()
                const time = parseInt(days/(1000*60*60*24))
                return time;
            }else{
                return 1;
            }
        }
    },
    mounted(){
        const now = new Date()
        const next = new Date(now.getTime() + 24*60*60*1000)
        const postnatal = new Date(now.getTime() + 24*60*60*1000*2);
        this.date = [format(next),format(postnatal)]
    },
    created() {
      for (let index in this.childNum) {
        this.$set(this.ages, index, '')
      }
    },
 }
 </script>
 
 <style lang="scss" scoped>
    @mixin inlineBlock ($align){
        display: inline-block;
        vertical-align: $align;
    }
    @mixin property($position,$w,$h,$mr:6px){
        position: $position;
        width:$w;
        height: $h;
        margin-right: $mr;
        background-color: #fff;
        border-radius: 4px;
    }
    
    .comSearch{
        padding: 15px 0;
        background-color: #266FE2;
        .svg-icon{
            position: absolute;
            top:50%;
            left: 0;
            transform: translateY(-50%);
            z-index: 2;
        }

        .destinationIpt{
            @include inlineBlock(top);
            @include property(relative,248px,48px);
        }
        .dateIpt{
            @include inlineBlock(top);
            @include property(relative,350px,48px);
        }

        .allDay{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            color: #999;
        }

        .roomSel{
            @include inlineBlock(top);
            @include property(relative,147px,48px);
        }

        .peopleSel{
            @include inlineBlock(top);
            @include property(relative,226px,48px);
            &:focus{
                border:1px solid #266FE2;
            }
        }

        .adult{
            display: inline-block;
            vertical-align: top;
            width: 130px;
            height: 100%;

        }
        .child{
            display: inline-block;
            vertical-align: top;
            margin-left: -4px;
            width: 94px;
            height: 100%;
        }
        
        .btnSubmit{
            @include property(relative,147px,48px,0);
            font-size: 18px;
            color: #266FE2;
            cursor: pointer;
            border: none;
        }
    }

    .items{
        display: flex;
        align-items:center;
        border-bottom: 1px solid #ddd;
        &:nth-last-of-type(1){
            border-bottom: none;
        }
    }

    .genre{
        display: inline-block;
        height: 100%;
        vertical-align: top;
        text-align: center;
        flex-basis: 15%;
        &__name{
            display: block;
            font-size: 12px;
            color: #999;
        }
    }
    .hotels{
        flex-basis: 85%;
        border-left: 1px solid #ddd;
        li{
            padding: 0 10px;
            height: 38px;
            font-size:12px;
            color: #999;
            line-height: 38px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            &:nth-last-of-type(1){
                border-bottom: none;
            }
        }
    }
    
 </style>
 
 

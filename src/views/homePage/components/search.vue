 <template>
     <div class="search">
        <el-form ref="form" :model="form">
            <div class="destinationIpt">
                <svg-icon icon-class="search"/>
                <el-input placeholder="搜索目的地或酒店名" clearable></el-input>
            </div>
            <div class="dateIpt">
                <svg-icon icon-class="date"/>
                <el-date-picker
                    v-model="date"
                    type="daterange"
                    start-placeholder = "开始日期"
                    end-placeholder = "结束日期"
                    :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
                <span class="checkIn">{{ countDay(date[0]) }}</span>
                <span class="departure">{{ countDay(date[1]) }}</span>
                <span class="allDay">
                    共<i>{{ allDay(date[0],date[1]) }}</i>晚</span>
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
                        width="220"
                        trigger="click">
                        <div class="selPeople">
                            <span class="selPeople__title">每间入住</span>
                            <el-input-number v-model="childNum" @change="handleAge(childNum)" :min="0"  :max="10"></el-input-number>
                        </div>
                        <div v-for="(num,index) in childNum" :key="index" class="selAge">
                            <span class="selAge__title">儿童年龄</span>
                            <el-input-number  :min="1" v:model="ages[index].age"></el-input-number>
                        </div>
                        <el-input  slot="reference" v-bind:value="childNum + ' 位儿童'"></el-input>
                    </el-popover>
                </div>
            </div>
            <button class="btnSubmit">搜索</button>
        </el-form>
     </div>
 </template>


 

 <script>
  import {format} from '@/utils/date'
 export default {
     name:'search',
     data(){
         return {
             form:{
                 destination:''
             },
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
            date:'',
            roomNum:'',
            adultNum:'',
            childNum:'',
            ages:''
         }
     },
    methods:{
        handleAge:(num)=>{
            let children = num
            console.log(children);
            let age = this.ages
            age = []
            for(let i=0;i<children.length;i++){
                age.push({age:''})
            }
        },
        countDay:(time)=>{
            const day = new Date(time).getDay()
            switch(day){
                case 0:{
                    return '周日'
                }
                case 1:{
                    return '周一'
                }
                case 2:{
                    return '周二'
                }
                case 3:{
                    return '周三'
                }
                case 4:{
                    return '周四'
                }
                case 5:{
                    return '周五'
                }
                case 6:{
                    return '周六'
                }
            }
        },
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
    }
 }
 </script>

<style lang="scss" scoped>
    .search{
        .svg-icon{
            position: absolute;
            top:50%;
            left: 10px;
            transform: translateY(-50%);
            z-index: 2;
        }

        .destinationIpt,.dateIpt{
            position: relative;
            width: 430px;
            height: 60px;
            margin-bottom: 14px;
            background-color: #fff;
            border-radius: 4px;
        }

        //.destinationIpt
        .destinationIpt{
            line-height: 60px;
        }


        //.checkIn,.departure,.allDay
        .checkIn,.departure,.allDay{
            position: absolute;
            display: block;
            width: 20%;
            font-size: 14px;
            color: #999;
            text-align: left;
        }
        .checkIn{
            top:40px;
            left: 62px;
        }
        .departure{
            top:40px;
            left: 216px;
        }
        .allDay{
            top:50%;
            transform: translateY(-50%);
            right: 20px;
            text-align: right;
        }

        //.roomSel
        .roomSel{
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-right: 10px;
            width: 160px;
            height: 60px;
            line-height: 60px;
        }

        //.peopleSel
        .peopleSel{
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-bottom: 14px;
            width: 254px;
            height: 60px;

        }
        .adult{
            display: inline-block;
            vertical-align: top;
            width: 152px;
            height: 100%;
        }
        .child{
            display: inline-block;
            vertical-align: top;
            margin-left: -8px;
            width: 104px;
            height: 100%; 
        }
        .btnSubmit{
            padding: 0;
            border: 0;
            width: 430px;
            height: 60px;
            background: #266FE2;
            border-radius: 4px;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
        }

    }
    
</style>
 
 
 
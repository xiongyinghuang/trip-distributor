<template>
    <div>
        <div class="content">
            <ul class="tabs">
                <li v-for="(value,index) in tabs" :key="index">
                    {{value}}
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'tab',
    data(){
        return{
            tabs:['房型介绍','酒店条款','酒店设施','交通周边']
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs{
        li{
            display: inline-block;
            margin: 0 12px;
            padding-bottom: 12px;
            font-size: 16px;
            color: #151515;
            cursor: pointer;
            border-bottom: 4px solid #fff;
            &:hover{
                color: #266FE2;
                border-color:#266FE2;
            }
        }
    }
</style>



<template>
    <div class="navigation">
        <div class="content">
            <div v-if="ifLogined === 'yes'">
                <ul class="links">
                    <li v-for= "(value, key, index) in loginedItems" :key="{index}">
                        <router-link :to="value">{{key}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="" v-else>
                <ul class="links">
                    <li v-for= "(value, key, index) in unloginItems" :key="index">
                        <router-link :to="value">{{key}}</router-link>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>


<script>
export default {
    name:'navigation',
    data(){
        return {
            ifLogined:'no',
            unloginItems:{
                酒店预订:'',
                关于我们:''
            },
            loginedItems:{
                酒店预订:'',
                订单管理:'',
                我的收藏:''
            }
        }
    },
    computed:{
        Logined:function(){
            this.ifLogined =='yes'
        }
    }
}
</script>

<style lang="scss" scoped>
    .navigation{
        width: 100%;
        height: 80px;
        background-color: #266FE2;
        .content{
            position: relative;
            width: 1200px;
            height: 100%;
            margin: 0 auto;
        }
        .links{
            height: 80px;
            li{
                display: inline-block;
                height: 100%;
            }
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                box-sizing: border-box;
                margin: 0 10px;
                font-size: 16px;
                color:#92B7F0;
                border-bottom: 4px solid #266FE2;
                &:hover{
                    color: #fff;
                    border-bottom-color:#fff;
                }
            }
        }
    }
</style>






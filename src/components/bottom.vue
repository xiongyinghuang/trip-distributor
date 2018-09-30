<template>
    <div class="bottom">
        <div class="content">
            <ul class="links">
                <li v-for="(value, key, index) in links" :key="index">
                    <a :href="value" target="_blank">{{ key }}</a>
                </li>
            </ul>
            <span class="txt">沪ICP备14043958号-7 | Copyright ©2018 Wehotelglobal.com, All Rights reserved. </span>
            <img src="@/assets/img/footImg1.png" alt="" class="img"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'bottom',
    data(){
        return {
            links:{
                '关于我们':'/',
                '帮助中心':'/',
                '商务合作':'/',
                '友情链接':'/'
            },
        }
    }
}
</script>

<style lang="scss" scoped>
    .bottom{
        padding:25px 0 75px;
        width: 100%;
        background-color: #E1E1E1;
        .content{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
        }
        .links{
            margin:0 0 25px;
            text-align: center;
            li{
                display: inline-block;
                border-right: 1px solid #999;
                &:last-child{
                    border-right: 0;
                }
                a{
                    display: inline-block;
                    vertical-align: text-bottom;
                    margin: 0 10px;
                    font-size: 18px;
                    color: #666;
                }
            }
        }
        .txt{
            margin:0 auto 10px;
            display: block;
            font-size: 14px;
            color: #999;
            text-align: center;
        }
        .img{
            display: block;
            margin:0 auto;
        }
    }
</style>



<template>
    <div class="surrounding">
        <div class="content">
            <h2 class="title">交通周边</h2>
            <div class="surroundingItem">
                <div class="genre">
                    <svg-icon icon-class="airport"></svg-icon>
                </div>
                <div class="surroundingContent">
                    <span class="genreName">附近机场</span>
                    <ul class="list">
                        <li>
                            <span class="list__item">廊曼国际机场(DMK)</span>
                            <div class="list__itemDetail">
                                <span>22.6公里</span>
                                <span>
                                    <svg-icon icon-class="taxi"></svg-icon>
                                    35分钟
                                </span>
                            </div>
                        </li>
                        <li>
                            <span class="list__item">廊曼国际机场(DMK)</span>
                            <div class="list__itemDetail">
                                <span>22.6公里</span>
                                <span>
                                    <svg-icon icon-class="taxi"></svg-icon>
                                    35分钟
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="surroundingItem">
                <div class="genre">
                    <svg-icon icon-class="transit"></svg-icon>
                </div>
                <div class="surroundingContent">
                    <span class="genreName">公交/地铁站</span>
                    <ul class="list">
                        <li>
                            <span class="list__item">廊曼国际机场(DMK)</span>
                            <div class="list__itemDetail">
                                <span>22.6公里</span>
                                <span>
                                    <svg-icon icon-class="walk"></svg-icon>
                                    35分钟
                                </span>
                            </div>
                        </li>
                        <li>
                            <span class="list__item">廊曼国际机场(DMK)</span>
                            <div class="list__itemDetail">
                                <span>22.6公里</span>
                                <span>
                                    <svg-icon icon-class="walk"></svg-icon>
                                    35分钟
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="surroundingItem">
                <div class="genre">
                    <svg-icon icon-class="sight"></svg-icon>
                </div>
                <div class="surroundingContent">
                    <span class="genreName">当地景点</span>
                    <ul class="list">
                        <li>
                            <span class="list__item">吉姆汤普森博物馆 - 1.23 km</span>
                        </li>
                        <li>
                            <span class="list__item">Neilson Hays Library - 40 m</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'surrounding',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .surrounding{
        margin-bottom: 28px;
        .title{
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 20px;
            font-size: 18px;
            color: #333;
            font-weight: normal;
            background-color: #EEE;
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
        .surroundingItem{
            display: flex;
            align-items: center;
            justify-content: center;
            padding:25px 0;
            border-bottom: 1px solid #eee;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            .genre{
                flex-basis: 15%;
                display: flex;
                justify-content: center;
            }
            .surroundingContent{
                flex-basis: 85%;
                .genreName{
                    display: block;
                    margin-bottom: 15px;
                    font-size: 18px;
                    color: #333;
                }
                .list{
                    li{
                        display: inline-block;
                        vertical-align: top;
                        width: 20%;
                    }
                    .list__item{
                        font-size: 14px;
                        color: #666; 
                    } 
                    .list__itemDetail{
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>



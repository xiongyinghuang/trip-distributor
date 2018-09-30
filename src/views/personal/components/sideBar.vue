<template>
    <div class="sideBar">
        <ul>
            <li>
                <span>账户管理</span>
            </li>
            <li>
                <span>订单管理</span>
            </li>
            <li>
                <span>我的收藏</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'sideBar'
}
</script>

<style lang="scss" scoped>
    .sideBar{
        display: inline-block;
        vertical-align: top;
        margin-top: 5px;
        margin-right: 14px;
        padding: 22px;
        width: 200px;
        height: 600px;
        border: 1px solid #DDD;
        border-radius: 2px;
        li{
            margin:30px 0;
            font-size: 14px;
            color: #333;
        }
    }
</style>



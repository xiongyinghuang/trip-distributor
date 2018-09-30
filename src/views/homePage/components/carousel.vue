<template>
    <div class="carousel">
        <el-carousel height="540px" interval="5000">
            <el-carousel-item v-for="(value,index) in imgs" :key="index">
                <img :src="value" alt=""/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'carousel',
    data(){
        return {
            imgs:[require('@/assets/img/carousel1/c1.png'),require('@/assets/img/carousel1/c1.png'),require('@/assets/img/carousel1/c1.png')]
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-carousel__item{
        width: 100%;
        height: 540px;    
    }

    .el-carousel__item img{
        display: block;
        width: 100%;
        height: 100%;
        border:0;
    }

    .el-carousel__button{
        width: 8px;
        height: 8px;
        background-color: #666;
        border:1px solid #666;
        border-radius: 50%;
    }

    .is-active{
        .el-carousel__button{
            background-color: #fff;
           border-color: #000; 
        }
    }
</style>



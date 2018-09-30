<template>
    <div class="toTop" @click="back">
    </div>
</template>

<script>
export default {
    name:'backToTop',
    data(){
        return{
            
        }
    },
    methods:{
        back:()=>{  
            var scrollToTop = window.setInterval(function() {
                var pos = window.pageYOffset;
                if ( pos > 0 ) {
                    window.scrollTo( 0, pos - 20 );
                } else {
                    window.clearInterval( scrollToTop );
                }
            }, 16);
        }
    }
}
</script>

<style lang="scss" scoped>
    $imgPath:'../assets';
    .toTop{
        position: absolute;
        bottom: 270px;
        left: 50%;
        margin-left: 620px;
        z-index: 10;
        width: 80px;
        height: 80px;
        background: url(#{$imgPath}/img/toTop.png);
        cursor: pointer;
    }
</style>



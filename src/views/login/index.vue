<template>
  <div class="wrap">
    <pageHeader/>
    <div class="section">
      <div class="content">
        <div class="slogan">
          <h2 class="slogan__title">海外酒店分销平台</h2>
          <span class="slogan__txt">一键预订全球<i class="slogan__txt--yellow">185</i>个国家，<i class="slogan__txt--yellow">18</i>万的海外酒店</span>
        </div>
        <loginBox/>
      </div>
    </div>
    <bottom/>
  </div>
</template>

<script>
import pageHeader from './components/pageHeader'
import loginBox from '@/components/login/loginBox'
import bottom from '@/components/bottom'
export default {
  name:'login',
  components:{
    pageHeader,
    loginBox,
    bottom
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section{
    width:100%;
    height: 800px;
    background: url(../../assets/img/bg1.png) no-repeat center top;
    .slogan{
      padding: 260px 0 0 0;
      &__title{
        margin-bottom: 25px;
        font-size: 36px;
        color: #fff;
        letter-spacing: 4px;
      }
      &__txt{
        font-size: 20px;
        color: #fff;
        &--yellow{
          font-size: 48px;
          color: #F8E71C;
        }
      }
    }
  } 


</style>

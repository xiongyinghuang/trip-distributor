<template>
    <div class="loginBox">
        <h2 class="title">分销商登录</h2>
        <form action="">
            <div class="iptb">
                <input type="text" placeholder=" 请输入用户名/电子邮箱/手机号码" class="iptb__ipt"/>
            </div>
            <div class="iptb">
                <input type="text" placeholder="请输入登录密码" class="iptb__ipt">
            </div>
            <div class="iptb">
                <input type="text" class="iptb__ipt" placeholder="请输入图形验证码">
                <img src="@/assets/img/bg3.png" alt="" class="iptb__imgCode"/>
            </div>
            <button type="submit" class="btnSubmit">登录</button>
        </form>
        <span class="btnForget">忘记密码？</span>
        <span class="loginTip">登录即代表您同意我们的<router-link to="">服务协议</router-link>和<router-link to="">隐私政策</router-link></span>
    </div>
</template>

<script>
export default {
    name:"loginBox"
}
</script>

<style lang="scss" scoped>
    .loginBox{
        position: absolute;
        top:160px;
        right: 0;
        padding: 0 40px;
        width: 520px;
        background: #FFFFFF;
        box-shadow: 0 0 6px 0 rgba(97,121,149,0.33);
        border-radius: 8px;
        .title{
            padding: 35px 0 15px 0;
            font-size: 20px;
            color: #333;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
        .iptb{
            position: relative;
            margin: 28px auto 0;
            width: 100%;
            height: 60px;
            border: 1px solid #CCC;
            border-radius: 4px;
            &__ipt{
                padding:0 14px;
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 4px;
                font-size: 14px;
                color: #CCC;
            }
            &__imgCode{
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                right: 5px;
                display: block;
                width: 120px;
                height: 50px;
            }
        }
        .btnSubmit{
            margin: 20px auto;
            display: block;
            width: 100%;
            height: 60px;
            background: #266FE2;
            border-radius: 4px;
            font-size: 16px;
            color: #FFF;
            line-height: 60px;
            border: none;
            cursor: pointer;
        }
        .btnForget{
            display: block;
            font-size: 14px;
            color: #333;
            cursor: pointer;
        }
        .loginTip{
            margin: 20px auto 25px;
            display: block;
            font-size: 14px;
            color: #333;
            text-align: center;
            .router-link-active{
                color:  #266FE2;
            }
        }
    }
</style>



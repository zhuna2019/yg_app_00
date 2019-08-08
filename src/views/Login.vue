<template>
    <div class="app-login">
        <div class="title">会员登录</div>
        <div class="input">
             <!-- 用户名登录 -->
          <mt-field placeholder="请输入用户名" v-model="uname">
          </mt-field>
          <!-- 密码登录 -->
          <mt-field placeholder="请输入密码" v-model="upwd">
          </mt-field>
          <mt-button @click="login" size="large">登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        uname:"",
        upwd:"",
        }
    },
    methods:{
        login(){
            // 获取用户输入的用户名和密码
            var uname=this.uname;
            var upwd=this.upwd;
            // 创建正则表达式验证用户名和密码
            // 3-12位的字母或者数组
            var reg=/^[a-z0-9]{3,12}$/i
            if(!reg.test(uname)){
                this.$toast("用户名格式错误");
                return;
            }
            if(!reg.test(upwd)){
                this.$toast("密码格式错误");
                return;
            }
            // 6发送ajax请求,请求axios
            var url="login";
            var obj={uname,upwd}
            this.axios.get(url,{params:obj}).then(res=>{
                //获取服务器返回的结果
                if(res.data.code==-1){
                    this.$toast("用户名和密码有误")
                }else{
                    this.$toast("登录成功")
                    // 登录成功后需要跳转到产品列表
                }
            })

        }
    }
}
</script>
<style scoped>
.title{
    text-align: center;
    margin-bottom:30px;
    margin-top:30px;
   font-size:16px;
}
.input>mt-field{
    padding-left:5px;
    font-size:12px;

}

</style>


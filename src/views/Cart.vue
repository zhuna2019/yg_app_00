<template>
    <div class="app_cart">
        <div>
            全选<input type="checkbox">
        </div>
          <!-- 购物车商品信息 -->
        <div class="cart-item">
           <div class="leftImgText">
               <input type="checkbox">
               <img src="http://127.0.0.1:3000/01.jpg" alt="">
               <div class="lname">农百鲜樱桃谷鸭</div>
               <div class="price">￥29</div>
           </div>     
           <mt-button>删除</mt-button>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        loadMore(){
            // 加载购物车中的数据
            // 当组件创建成功后调用
            // 请求服务器地址
        var url="cart";
       
        this.axios.get(url).then(result=>{
            console.log(result.data)
            if(result.data.code==-1){
               this.$messagebox("请登录")
                this.$router.push("/Login");
                return;
            } this.list=result.data;
           
        })

        }
    },
    created(){
        this.loadMore();
    }
}
</script>
<style scoped>
.cart-item{
    display:flex;
    /* 两端对齐 */
    justify-content: space-between;
    /* 垂直居中 */
    align-items: center;
    /* 加底部边框 */
    border-bottom:1px solid #ccc;
    

}
.leftImgText{
    display:flex;
    align-items: center;
}
.leftImgText img{
    width:50px;
    height:50px;
}
.price{
    color:red;
    margin-left:25px;
}
/* 左侧图片与文字 */
/* 单独修改图片高度与宽度 */
/* 商品价格 */
</style>


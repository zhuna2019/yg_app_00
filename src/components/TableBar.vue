<template>
    <div>
       <!-- 底部导航条父元素 -->
       <mt-tabbar v-model="active" fixed>
         <!--第一个首页按钮 -->
         <mt-tab-item id="home" @click.native="changeState(0)">
           <!-- 图片 -->
           <imagbar :selectedImage="require('../assets/02.png')" :normalImage="require('../assets/2.png')" :focused="currentIndex[0].is_select"></imagbar>  
             首页
         </mt-tab-item>
         <!--第二个分类按钮 -->
        <mt-tab-item id="seperate" @click.native="changeState(1)">
           <imagbar :selectedImage="require('../assets/04.png')" :normalImage="require('../assets/4.png')" :focused="currentIndex[1].is_select"></imagbar>  
             分类
        </mt-tab-item>
        <!--第三个吃饭按钮 -->
        <mt-tab-item id="eat" @click.native="changeState(2)">
           <imagbar :selectedImage="require('../assets/03.png')" :normalImage="require('../assets/3.png')" :focused="currentIndex[2].is_select"></imagbar>  
             吃饭吧
        </mt-tab-item>
        <!--第四个购物车按钮 -->
        <mt-tab-item id="cart" @click.native="changeState(3)">
           <imagbar :selectedImage="require('../assets/01.png')" :normalImage="require('../assets/1.png')" :focused="currentIndex[3].is_select"></imagbar>  
             购物车
        </mt-tab-item>
        <!--第五个我的按钮 -->
         <mt-tab-item id="myOrder" @click.native="changeState(4)">
           <imagbar :selectedImage="require('../assets/05.png')" :normalImage="require('../assets/5.png')" :focused="currentIndex[4].is_select"></imagbar>  
             购物车
        </mt-tab-item>

      </mt-tabbar>
    </div>
</template>
<script>
// 2将图片子件引入当前父元素中
import ImagBar from "./ImagBar"
export default {
   data(){
        return{
           active:"home",
           currentIndex:[
               {is_select:true},
               {is_select:false},
               {is_select:false},
               {is_select:false},
               {is_select:false},
           ]
        }
    },
   methods:{
      //  search(){
      //   //    titleBar子组件所需处理函数
      //   console.log("搜索")
      //  },
      //  add3(){
      //      console.log("添加")
      //  },
       changeState(idx){
           
           for(var i=0;i<this.currentIndex.length;i++){
               if(i===idx){
                     this.currentIndex[i].is_select=true;
               }else {this.currentIndex[i].is_select=false;}
           }
        
       }
    },
    // 3注册
    components:{
         "imagbar":ImagBar,
    }
}
</script>
<style scoped>
/* 修改按钮默认的样式 */
.mint-tabbar > .mint-tab-item{
    color:#999999;
}
/* 修改按钮选中的样式 */
.mint-tabbar > .mint-tab-item.is-selected{
    background-color:transparent;
    color:#45c018;
}
</style>


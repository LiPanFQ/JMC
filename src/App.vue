<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
</script>

<template>
  <!-- <Header></Header> -->
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <!-- <Footer></Footer>
  <GoTop></GoTop> -->
</template>

<style scoped>
.pointer{
  cursor: pointer;
}

.flex{
  display: flex;
}

.alignCenter{
  align-items: center;
}

.textCenter{
  text-align: center;
}

.justifyAround{
  justify-content: space-around;
}

.justifyCenter{
  justify-content: center;
}

.justifyBetween{
  justify-content: space-between;
}

.justifyEnd{
  justify-content: flex-end;
}

.radius{
  border-radius: 8px;
}

.flexColumn{
  flex-direction: column;
}

.weight{
  font-weight: 600;
}

.paddingBox{
  padding: 15px;
}

.el-tabs__item{
  font-size: 15px;
}

.marginRight{
  margin-right: 20px;
}

.marginLeft{
  margin-left: 20px;
}
</style>


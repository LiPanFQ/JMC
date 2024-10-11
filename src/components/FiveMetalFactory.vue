<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
    <!-- 导航栏 -->
    <nav class="sticky top-0 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <span class="text-xl sm:text-2xl font-semibold text-gray-900">{{ companyname }}</span>
          <div class="hidden sm:block">
            <button class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900">产品</button>
            <button class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900">关于我们</button>
            <button class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900">联系方式</button>
          </div>
          <button class="sm:hidden text-gray-600" @click="toggleMobileMenu">
            <menu-icon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen" class="sm:hidden bg-white border-b border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button class="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">产品</button>
        <button class="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">关于我们</button>
        <button class="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">联系方式</button>
      </div>
    </div>

    <!-- 主要内容 -->
    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <!-- 英雄区域 -->
      <section class="text-center mb-12 sm:mb-16 relative p-4">
        <img src="/images/backgroundImg.webp" alt="背景图" class="absolute inset-0 w-full h-full object-cover opacity-1">
        <div class="relative z-10">
          <h1 class="text-4xl sm:text-5xl text-white font-bold mb-4">专业五金制造商</h1>
          <p class="text-lg sm:text-xl text-white mb-6 sm:mb-8">品质卓越 · 技术创新 · 服务至上</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            了解更多
          </button>
        </div>
      </section>

      <!-- 产品特点 -->
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12">
            <component :is="feature.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ feature.desc }}</p>
        </div>
      </section>

      <!-- 产品展示 -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">我们的产品</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div v-for="(product, index) in products" :key="index" class="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img :src="product.image" alt="Product Image" class="bg-gray-200 rounded-lg h-24 sm:h-32 mb-3 sm:mb-4 object-cover" />
            <p class="text-center text-sm sm:text-base font-semibold">{{ product.name }}</p>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">联系我们</h2>
        <p class="text-base sm:text-xl mb-5 sm:mb-6">让我们为您的项目提供最佳五金解决方案</p>
        <a href="tel:+8617683892175" class="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          <phone-icon class="w-5 h-5 inline-block mr-2" />
          立即咨询
        </a>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-12 sm:mt-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <span class="text-gray-500 text-sm sm:text-base mb-4 sm:mb-0">&copy; 2024 {{ companyname }}. 版权所有</span>
          <div class="flex space-x-4 sm:space-x-6">
            <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-gray-500">关于我们</a>
            <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-gray-500">隐私政策</a>
            <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-gray-500">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Wrench, Zap, Shield, Phone as PhoneIcon, Menu as MenuIcon } from 'lucide-vue-next';

const companyname = import.meta.env.VITE_APP_COMPANYNAME
const features = ref([
  { icon: Wrench, title: "优质产品", desc: "采用高级材料，精工制作，确保每件产品的卓越品质。" },
  { icon: Zap, title: "快速交付", desc: "先进的生产线和高效的管理，保证准时交付。" },
  { icon: Shield, title: "品质保证", desc: "严格的质量控制体系，为每一件产品提供可靠保障。" }
]);

const products = ref([
  { name: "铆钉", image: "/images/product.webp" },
  { name: "螺钉", image: "/images/product.webp" },
  { name: "螺栓", image: "/images/product.webp" },
  { name: "非标铆钉螺丝", image: "/images/product.webp" }
]);


const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* 可以在这里添加任何额外的组件特定样式 */
.sticky{
  z-index: 999;
}
</style>
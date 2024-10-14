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
      <section class="text-center mb-8 sm:mb-16 relative p-4">
        <img src="/images/product16.jpg" alt="背景图" class="rounded-3xl absolute inset-0 w-full h-full object-cover opacity-1">
        <div class="relative z-10">
          <h1 class="text-4xl sm:text-5xl text-white font-bold mb-4">专业五金制造商</h1>
          <p class="text-lg sm:text-xl text-white mb-6 sm:mb-8">主营：直线轴承、螺钉、五金配件、铆钉、垫圈、螺栓、数控刀具</p>
          <p class="text-lg sm:text-xl text-white mb-6 sm:mb-8">品质卓越 · 技术创新 · 服务至上</p>
          <a href="tel:+8617683892175" class="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            立即咨询
          </a>
        </div>
      </section>

       <!-- 公司简介 -->
      <section id="关于我们" class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">公司简介</h2>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <img src="/logo.jpeg" alt="公司大楼" class="rounded-3xl shadow-lg w-full h-auto logoImg">
          </div>
          <div class="md:w-1/2 md:pl-8">
            <p class="text-gray-700 mb-4 intro">{{ companyname }}成立于2018年，是一家专业从事高品质五金制品研发、生产和销售的现代化企业。我们拥有先进的生产设备和专业的技术团队，致力于为客户提供优质、可靠的五金解决方案。</p>
            <p class="text-gray-700 mb-4 intro">我们的产品广泛应用于汽车、电子、家电、建筑等多个行业，以其卓越的品质和创新的设计赢得了国内外客户的广泛认可和信赖。</p>
            <p class="text-gray-700 intro">在{{ companyname }}，我们始终坚持"质量第一、客户至上"的经营理念，不断追求卓越，为客户创造更大的价值。</p>
          </div>
        </div>
      </section>

      <!-- 产品特点 -->
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-3xl shadow-lg p-6 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12">
            <component :is="feature.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-lg sm:text-base text-gray-600">{{ feature.desc }}</p>
        </div>
      </section>

      <!-- 产品展示 -->
      <section class="mb-12 sm:mb-16 product max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">产品展示</h2>
        <Swiper
          :slides-per-view="2"
          effect="coverflow"
          :loop="true"
          :pagination="false"
          class="swiper-container w-full"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div class="flex justifyCenter">
              <img
                :src="product.image"
                alt="Product Image"
                class="rounded-3xl object-cover h-40 sm:h-48 w-full"
                @click="openModal(product.image)"
              />
            </div>
            <p class="text-center text-lg font-semibold">
              {{ product.name }}
            </p>
          </SwiperSlide>
        </Swiper>

        <!-- 模态弹窗 -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        @click="closeModal">
          <div class="bg-white w-full h-auto max-w-md md:max-w-2xl rounded-lg shadow-lg relative">
            <img :src="selectedImage" alt="Product Image" class="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <!-- 客户评价 -->
      <section id="评价" class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">客户评价</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(review, index) in customerReviews" :key="index" class="bg-white rounded-3xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
            <div class="flex items-center mb-4">
              <img :src="review.avatar" :alt="review.name" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h3 class="font-semibold">{{ review.name }}</h3>
                <p class="text-lg text-gray-600">{{ review.company }}</p>
              </div>
            </div>
            <p class="text-gray-700">{{ review.comment }}</p>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">联系我们</h2>
        <p class="text-base sm:text-2xl mb-3 sm:mb-3">让我们为您提供最佳五金解决方案</p>
        <p class="text-base sm:text-2xl mb-3 sm:mb-3">公司地址：广东省东莞市虎门镇南栅富民路56号3栋104室</p>
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
            <a href="tel:+8617683892175" class="text-sm sm:text-base text-gray-400 hover:text-gray-500">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css'; // 引入样式
import 'swiper/swiper.min.css';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Wrench, Zap, Shield, Phone as PhoneIcon, Menu as MenuIcon } from 'lucide-vue-next';

// 初始化 Swiper 模块
SwiperCore.use([EffectCoverflow, Pagination]);

const companyname = import.meta.env.VITE_APP_COMPANYNAME
const features = ref([
  { icon: Wrench, title: "优质产品", desc: "采用高级材料，精工制作，确保每件产品的卓越品质。" },
  { icon: Zap, title: "快速交付", desc: "先进的生产线和高效的管理，保证准时交付。" },
  { icon: Shield, title: "品质保证", desc: "严格的质量控制体系，为每一件产品提供可靠保障。" }
]);

const products = ref([
  { name: "铆钉", image: "/images/product1.jpg" },
  { name: "铆钉", image: "/images/product2.jpg" },
  { name: "铆钉", image: "/images/product3.jpg" },
  { name: "铆钉", image: "/images/product4.jpg" },
  { name: "铆钉", image: "/images/product5.jpg" },
  { name: "铆钉", image: "/images/product6.jpg" },
  { name: "铆钉", image: "/images/product7.jpg" },
  { name: "铆钉", image: "/images/product8.jpg" },
  { name: "铆钉", image: "/images/product9.jpg" },
  { name: "铆钉", image: "/images/product10.jpg" },
  { name: "铆钉", image: "/images/product11.jpg" },
  { name: "铆钉", image: "/images/product12.jpg" },
  { name: "铆钉", image: "/images/product13.jpg" },
  { name: "铆钉", image: "/images/product14.jpg" },
  { name: "铆钉", image: "/images/product15.jpg" },
  { name: "铆钉", image: "/images/product16.jpg" },
  { name: "铆钉", image: "/images/product17.jpg" },
  { name: "铆钉", image: "/images/product18.jpg" },
]);

const customerReviews = ref([
  { name: "张三", company: "ABC电子有限公司", comment: "锦名成五金的产品质量非常好，我们已经合作多年了，从未让我们失望。", rating: 5, avatar: "/images/avatar.jpg" },
  { name: "李四", company: "XYZ汽车配件厂", comment: "他们的交付速度很快，产品精度高，非常适合我们的需求。", rating: 4, avatar: "/images/avatar.jpg" },
  { name: "王五", company: "123家电制造商", comment: "客户服务很棒，技术支持团队总是能快速解决我们的问题。", rating: 5, avatar: "/images/avatar.jpg" }
]);

const isModalOpen = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // 禁止背景滚动
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // 恢复背景滚动
};

const form = ref({ name: '', email: '', message: '' });

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
.swiper-container {
  width: 100%;
  height: auto;
}

.swiper-slide {
  transition: transform 0.8s;
}

.swiper-slide-active {
  /* transform: scale(1.1); */
}

.product{
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.justifyCenter{
  justify-content: center;
}

.intro{
  text-indent: 2em;
}

@media (min-width: 768px) {
  .max-w-md {
    width: 50%; /* 在电脑端，图片占屏幕宽度的50% */
  }
}

@media (max-width: 768px) {
  .logoImg {
    height: 128px;
    width: 128px;
  }
}

</style>
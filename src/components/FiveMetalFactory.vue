<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
    <!-- 导航栏 -->
    <nav class="sticky top-0 bg-white/70 backdrop-blur-lg border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <span class="text-xl sm:text-2xl font-semibold text-gray-900">{{ companyname }}</span>
          <div class="hidden sm:flex space-x-4">
            <a href="#products" class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 transition duration-300">产品</a>
            <a href="#about" class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 transition duration-300">关于我们</a>
            <a href="#contact" class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 transition duration-300">联系方式</a>
          </div>
          <button class="sm:hidden text-gray-600" @click="toggleMobileMenu">
            <MenuIcon v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="sm:hidden bg-white border-b border-gray-200 absolute w-full z-40">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#products" class="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition duration-300" @click="toggleMobileMenu">产品</a>
          <a href="#about" class="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition duration-300" @click="toggleMobileMenu">关于我们</a>
          <a href="#contact" class="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition duration-300" @click="toggleMobileMenu">联系方式</a>
        </div>
      </div>
    </transition>

    <!-- 英雄部分 -->
    <section class="relative bg-gradient-to-b from-blue-100 to-white pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="mx-auto max-w-3xl">
          <!-- animate-fade-in-up animation-delay-300 -->
          <h2 class="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-gray-800">
            为您提供优质的五金产品和定制服务
          </h2>
          <!-- animate-fade-in-up animation-delay-600 -->
          <div class="mt-4 sm:mt-6">
            <h3 class="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">主营产品</h3>
            <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl text-gray-600 justify-center">
              <li v-for="product in mainProducts" :key="product" class="flex items-center justify-center">
                <CheckCircle2 class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-500" /> {{ product }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 w-full md:w-1/2 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10 sm:opacity-20 animate-fade-in" style="background-image: url('/placeholder.svg?height=600&width=600');"></div>
    </section>

    <!-- 主要内容 -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <!-- 产品展示 -->
      <section id="products" class="py-8 sm:py-12">
        <h2 class="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">产品案例</h2>
        <div class="relative overflow-hidden rounded-3xl shadow-lg">
          <swiper
            :slides-per-view="1"
            :loop="true"
            :pagination="false"
            effect="cube"
            :navigation="{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            class="mySwiper"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <div class="relative">
                <img :src="product.image" :alt="product.name" class="w-full h-64 sm:h-80 md:h-96 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                  <h3 class="text-lg sm:text-xl font-semibold mb-2 text-white">{{ product.name }}</h3>
                  <p class="text-lg sm:text-xl text-gray-200 mb-3">{{ product.description }}</p>
                  <!-- <button class="bg-white text-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition duration-300">
                    查看详情
                  </button> -->
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div @click="prevSlide" class="swiper-button-prev absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-1 sm:p-2 rounded-full hover:bg-white/50 transition duration-300 z-10">
            <ChevronLeft class="w-8 h-8 sm:w-8 sm:h-8" />
          </div>
          <div @click="nextSlide" class="swiper-button-next absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-1 sm:p-2 rounded-full hover:bg-white/50 transition duration-300 z-10">
            <ChevronRight class="w-8 h-8 sm:w-8 sm:h-8" />
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!-- 特色服务 -->
      <section id="services" class="py-8 sm:py-12 bg-gray-50 rounded-3xl">
        <div class="container mx-auto">
          <h2 class="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">我们的服务</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div
              v-slide
              v-for="(service,index) in services"
              :key="service.title" 
              class="bg-white rounded-3xl shadow-lg p-6 sm:p-8 transition duration-300 hover:shadow-xl flex flex-col items-center text-center"
              :class="{ 'animate-bounce-in': isIntersectingServices[index] }"
              :style="{ transitionDelay: `${index * 100}ms` }"
              ref="serviceCards">
              <div class="text-blue-500 mb-4">
                <component :is="service.icon" class="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 class="text-lg sm:text-xl font-semibold mb-3 text-gray-800">{{ service.title }}</h3>
              <p class="text-lg sm:text-xl text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 客户评价 -->
      <section id="reviews" class="py-8 sm:py-12">
        <h2 class="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">客户评价</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-slide
            v-for="(review, index) in customerReviews"
           :key="index" 
           class="bg-white rounded-3xl shadow-md p-5 sm:p-6 transform transition-all duration-300 hover:scale-105"
           :class="{ 'animate-bounce-in': isIntersectingClients[index] }"
            :style="{ transitionDelay: `${index * 100}ms` }"
            ref="clientCards">
            <div class="flex items-center mb-4">
              <img :src="review.avatar" :alt="review.name" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4">
              <div>
                <h3 class="font-semibold text-lg sm:text-xl">{{ review.name }}</h3>
                <p class="text-lg sm:text-xl text-gray-600">{{ review.company }}</p>
              </div>
            </div>
            <p class="text-lg sm:text-xl text-gray-700">{{ review.comment }}</p>
          </div>
        </div>
      </section>

      <!-- 公司简介 -->
      <section id="about" class="py-6 sm:py-10" v-slide>
        <h2 class="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">公司简介</h2>
        <div class="md:flex items-start">
          <img src="/logo.jpeg" alt="公司大楼" class="float-left mr-6 mb-4 rounded-3xl shadow-lg w-32 h-32 md:w-48 md:h-48 object-cover">
          <div>
            <p class="text-lg sm:text-xl text-gray-700 mb-4 intro">{{ companyname }}成立于2018年，是一家专业从事高品质五金制品研发、生产和销售的现代化企业。我们拥有先进的生产设备和专业的技术团队，致力于为客户提供优质、可靠的五金解决方案。</p>
            <p class="text-lg sm:text-xl text-gray-700 mb-4 intro">我们的产品广泛应用于汽车、电子、家电、建筑等多个行业，以其卓越的品质和创新的设计赢得了国内外客户的广泛认可和信赖。</p>
            <p class="text-lg sm:text-xl text-gray-700 intro">在{{ companyname }}，我们始终坚持"质量第一、客户至上"的经营理念，不断追求卓越，为客户创造更大的价值。</p>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section v-slide id="contact" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">联系我们</h2>
        <p class="text-xl sm:text-2xl mb-4 sm:mb-5">让我们为您提供最佳五金解决方案</p>
        <p class="text-lg sm:text-xl mb-6 sm:mb-8">公司地址：广东省东莞市虎门镇南栅富民路56号3栋104室</p>
        <a href="tel:+8617683892175" class="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          <PhoneIcon class="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          立即咨询
        </a>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <span class="text-gray-500 text-base sm:text-lg mb-3 sm:mb-0">&copy; 2024 {{ companyname }}. 版权所有</span>
          <div class="flex space-x-4 sm:space-x-6">
            <a href="#about" class="text-base sm:text-lg text-gray-400 hover:text-gray-600 transition duration-300">关于我们</a>
            <a href="#" class="text-base sm:text-lg text-gray-400 hover:text-gray-600 transition duration-300">隐私政策</a>
            <a href="#contact" class="text-base sm:text-lg text-gray-400 hover:text-gray-600 transition duration-300">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Wrench, Truck, ShieldCheck, Phone as PhoneIcon, Menu as MenuIcon, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-vue-next';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css'; // 引入样式
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay,EffectCoverflow, Pagination  } from 'swiper';

// 初始化 Swiper 模块
SwiperCore.use([EffectCoverflow, Pagination,Autoplay]);

const companyname = import.meta.env.VITE_APP_COMPANYNAME;

const mainProducts = [
  '直线轴承', '五金配件', '数控刀具', '螺钉', '铆钉',
  '垫圈', '螺栓'
];

const services = [
  {
    icon: Wrench,
    title: '定制生产',
    description: '根据客户需求，提供个性化的五金产品定制服务。我们的专业团队确保每一个定制产品都能满足您的独特要求。'
  },
  {
    icon: Truck,
    title: '快速配送',
    description: '高效的物流网络，确保产品及时送达客户手中。我们的配送系统覆盖全国，让您的订单快速抵达。'
  },
  {
    icon: ShieldCheck,
    title: '品质保证',
    description: '我们严格把控每一个生产环节，确保每件产品都符合高质量标准。为客户提供可靠、耐用的五金产品是我们的承诺。'
  }
];

const products = ref([
  { id: 1, name: '铆钉', description: '高品质不锈钢螺丝，适用于各种精密设备', image: '/images/product2.jpg' },
  { id: 2, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product11.jpg' },
  { id: 3, name: '铆钉', description: '多功能五金配件套装，满足各种家居需求', image: '/images/product3.jpg' },
  { id: 4, name: '铆钉', description: '时尚美观的不锈钢把手，适用于各种门窗', image: '/images/product4.jpg' },
  { id: 5, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product5.jpg' },
  { id: 6, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product6.jpg' },
  { id: 7, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product7.jpg' },
  { id: 8, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product8.jpg' },
  { id: 9, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product9.jpg' },
  { id: 10, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product10.jpg' },
  { id: 11, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product11.jpg' },
  { id: 12, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product12.jpg' },
  { id: 13, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product13.jpg' },
  { id: 14, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product14.jpg' },
  { id: 15, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product15.jpg' },
  { id: 16, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product16.jpg' },
  { id: 17, name: '铆钉', description: '耐用的重型铰链，适合工业门窗使用', image: '/images/product17.jpg' },
]);

const customerReviews = ref([
  { name: '张三', company: 'ABC电子有限公司', comment: '锦名成五金的产品质量非常好，我们已经合作多年了，从未让我们失望。', avatar: '/images/avatar.jpg' },
  { name: '李四', company: 'XYZ汽车配件厂', comment: '他们的交付速度很快，产品精度高，非常适合我们的需求。', avatar: '/images/avatar.jpg' },
  { name: '王五', company: '123家电制造商', comment: '客户服务很棒，技术支持团队总是能快速解决我们的问题。', avatar: '/images/avatar.jpg' }
]);

const isMobileMenuOpen = ref(false);

// 跟踪每个卡片的状态
const serviceCards = ref([]);
const clientCards = ref([]);
const isIntersectingServices = ref([]); // 跟踪每个服务卡片的状态
const isIntersectingClients = ref([]);  // 跟踪每个客户卡片的状态 // 用数组跟踪每个卡片的状态
const swiperInstance = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

onMounted(() => {
  // 服务卡片的 IntersectionObserver
  // const serviceObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     const index = Array.from(serviceCards.value).indexOf(entry.target);
  //     if (entry.isIntersecting && index !== -1) {
  //       isIntersectingServices.value[index] = true;
  //       serviceObserver.unobserve(entry.target); // 一旦可见，停止观察该元素
  //     }
  //   });
  // }, { threshold: 0.1 });

  // serviceCards.value.forEach((card) => {
  //   if (card) serviceObserver.observe(card);
  // });

  // 客户评价卡片的 IntersectionObserver
  // const clientObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     const index = Array.from(clientCards.value).indexOf(entry.target);
  //     if (entry.isIntersecting && index !== -1) {
  //       isIntersectingClients.value[index] = true;
  //       clientObserver.unobserve(entry.target); // 一旦可见，停止观察该元素
  //     }
  //   });
  // }, { threshold: 0.1 });

  // clientCards.value.forEach((card) => {
  //   if (card) clientObserver.observe(card);
  // });
});
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
.transition {
  transition-property: opacity, transform;
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
  animation-fill-mode: both;
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
  animation-fill-mode: both;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animation-delay-300 {
  animation-delay: 300ms;
}
.animation-delay-600 {
  animation-delay: 600ms;
}
.intro {
  text-indent: 2em;
}
@media (max-width: 768px) {
  .logoImg {
    height: 128px;
    width: 128px;
  }
}

/* Swiper 样式覆盖 */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  background-color: rgba(255, 255, 255, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: calc(50% + 20px);
  color: white;
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  /* font-size: 18px; */
  display: none;
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-in {
  animation: bounceIn 2s ease-out forwards;
}
</style>
import { createApp } from "vue";
import type { App } from 'vue';
const DISTANCE = 50;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            // 播放动画
            const animation = map.get(entry.target);
            animation && animation.play();
            ob.unobserve(entry.target);
        }
    }
});

function isBelowViewPort(el) {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
}

export function slideFun(app:App){
    // 注册全局指令
    app.directive('slide', {
        mounted(el) {
            if (!isBelowViewPort(el)) {
                return;
            }
            const animation = el.animate(
                [
                    {
                        transform: `translateY(${DISTANCE}px)`,
                        opacity: 0.5 
                    },
                    {
                        transform: `translateY(0)`,
                        opacity: 1
                    }
                ],
                {
                    duration: DURATION,
                    easing: 'ease-out', 
                    fill: 'forwards'
                }
            );
            animation.pause();
            map.set(el, animation); // 将动画与元素关联起来
            ob.observe(el);
        },
        unmounted(el) {
            ob.unobserve(el);
        }
    });
}

import type { App } from 'vue';
import { slideFun } from '@/directive/vslideIn';

/**
 * 导出指令方法：v-xxx
 * @methods slideFun 用户权限指令，用法：v-slide
 */
export function directive(app: App) {
	// 动画上滑指令
	slideFun(app);
}

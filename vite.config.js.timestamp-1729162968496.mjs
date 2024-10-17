// vite.config.js
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///D:/JMC/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/JMC/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import inject from "file:///D:/JMC/node_modules/@rollup/plugin-inject/dist/es/index.js";
import { createHtmlPlugin } from "file:///D:/JMC/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\JMC";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue(),
    inject({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      BMap: "BMap"
    }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString()
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    outDir: "docs"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxKTUNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEpNQ1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSk1DL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgaW5qZWN0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWluamVjdCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcuLycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBpbmplY3Qoe1xyXG4gICAgICAkOiAnanF1ZXJ5JywgLy8gXHU4RkQ5XHU5MUNDXHU0RjFBXHU4MUVBXHU1MkE4XHU4RjdEXHU1MTY1IG5vZGVfbW9kdWxlcyBcdTRFMkRcdTc2ODQganF1ZXJ5XHJcbiAgICAgIGpRdWVyeTogJ2pxdWVyeScsXHJcbiAgICAgICd3aW5kb3dzLmpRdWVyeSc6ICdqcXVlcnknLFxyXG4gICAgICBCTWFwOiAnQk1hcCdcclxuICAgIH0pLFxyXG4gICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBcdTk3MDBcdTg5ODFcdTZDRThcdTUxNjUgaW5kZXguaHRtbCBlanMgXHU2QTIxXHU3MjQ4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAqIGh0dHBzOi8vYmxvZy5jc2RuLm5ldC9TaWxlbmNlSnVkZS9hcnRpY2xlL2RldGFpbHMvMTI4Mjk3MzcxXHJcbiAgICAgICAqL1xyXG4gICAgICBpbmplY3Q6IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBWSVRFX0FQUF9WRVJTSU9OOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2RvY3MnLCAvLyBcdTYzMDdcdTVCOUFcdThGOTNcdTUxRkFcdThERUZcdTVGODRcclxuICB9XHJcbn0pXHJcblxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdNLFNBQVMsZUFBZTtBQUNoTyxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsd0JBQXdCO0FBSmpDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILFFBQVE7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BS2YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osa0JBQWtCLElBQUksS0FBSyxFQUFFLGVBQWU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

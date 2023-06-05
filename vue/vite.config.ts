import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    base: './',
    assetsDir: '.',
    plugins: [vue()],
  };
});
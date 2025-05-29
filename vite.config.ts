import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 根据环境变量设置不同的 base 路径
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: isProduction ? "/anime-sedai/" : "/", // 生产环境使用 GitHub Pages 路径，开发环境使用根路径
});

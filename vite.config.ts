import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
      // "@": path.resolve(__dirname, "./src"),
      // shadcn/ui에 vite.config.ts 코드 추가사항인데 오류가 나서 일단은 주석처리
    ],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', 
  server: {
    host: '0.0.0.0',  // لكي يستطيع الوصول من أي مكان
    strictPort: false, // لا تحدد المنفذ بشكل صارم
  },
  preview: {
    allowedHosts: ['repo32-5.onrender.com'], // إضافة النطاق الذي تحصل منه على التطبيق
  },
});


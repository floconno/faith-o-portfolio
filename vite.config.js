

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Import resolve from path module

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'), // Add Tailwind CSS plugin
        require('autoprefixer'), // Add Autoprefixer plugin
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Create an alias for the src directory
    }
  },
  build: {
    outDir: 'build', // Specify your build output directory
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.jsx'), // Adjust this to your main entry JavaScript file
      },
    },
  },
});

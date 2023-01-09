import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path'
import { defineConfig } from 'vite';

//import typescript from '@rollup/plugin-typescript';
//import path from 'path'
// import dts from "vite-plugin-dts";
// const resolvePath = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({    
  base: '/chickenslappers',
  build: {
    outDir: './dist',
    minify: true,      
  }
});

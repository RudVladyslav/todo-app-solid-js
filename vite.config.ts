import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from "path";

export default defineConfig({
  plugins: [
    solidPlugin()],
  server: {
    port: 4200,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), // Alias for `src`
    },
  },
});

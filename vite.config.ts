import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/freeToGame/',
    plugins: [react()],
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },
    server: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'https://free-to-play-games-database.p.rapidapi.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api/games'),
            },
        },
    },
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Esto permite que el servidor escuche en todas las interfaces de red
    host: true, 
    // Opcional: define un puerto específico si el 5173 te da problemas
    // port: 3000, 
  }
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
//   base: '/tic-tac-toe/'
// });

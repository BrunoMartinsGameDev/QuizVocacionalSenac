import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/QuizVocacionalSenac/', // Exatamente assim, com a barra no início e fim
})

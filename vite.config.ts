import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import tsconfigPaths from "vite< -tsconfig-paths"< t< < t
import vercel from "vite-plugin-vercel"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vercel(),
        // tsconfigPaths()
    ],
})
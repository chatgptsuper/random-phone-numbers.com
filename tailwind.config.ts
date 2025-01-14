import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#334155",           // 深灰蓝色
          "secondary": "#475569",         // 中灰蓝色
          "accent": "#0f172a",           // 深蓝色
          "neutral": "#1e293b",          // 深灰色
          "base-100": "#ffffff",         // 纯白色
          "base-200": "#f8fafc",         // 浅灰白色
          "base-300": "#e2e8f0",         // 浅灰色
          "base-content": "#0f172a",     // 深色文本
        },
        dark: {
          "primary": "#94a3b8",          // 浅灰色
          "secondary": "#cbd5e1",        // 更浅的灰色
          "accent": "#e2e8f0",          // 最浅的灰色
          "neutral": "#1e293b",         // 深灰色
          "base-100": "#0f172a",        // 深蓝黑色
          "base-200": "#1e293b",        // 深灰蓝色
          "base-300": "#334155",        // 中灰蓝色
          "base-content": "#f8fafc",    // 浅色文本
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
  },
}

export default config;

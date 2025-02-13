// 主题提供者组件，用于管理应用的主题状态（light/dark），并提供主题切换功能

'use client'

import { createContext, useContext, useState, useEffect } from 'react'
// createContext:用于创建一个上下文对象，用于在组件中共享状态
// useContext:用于在组件中访问上下文对象，获取上下文中的状态
// useState:用于管理组件的状态，比如设置和更新主题
// useEffect:用于管理组件的生命周期，处理副作用，比如获取数据、订阅、手动更新DOM等

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // 从 localStorage 获取主题
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    // 获取系统主题
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // 确定初始主题
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext); 
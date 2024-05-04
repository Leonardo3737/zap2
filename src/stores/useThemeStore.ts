import { create } from 'zustand'

type theme = 'dark' | 'light'

interface IUseThemeStore {
  theme: theme,
  toggleTheme: () => void,
}

export const useThemeStore = create<IUseThemeStore>((set) => ({
  theme: 'light',
  toggleTheme: () => set((t) => ({theme: t.theme === 'light' ? 'dark' : 'light'})),
}))
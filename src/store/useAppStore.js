import { create } from 'zustand'

export const useAppStore = create((set) => ({
  isReady: false,
  setReady: () => set({ isReady: true }),
}))

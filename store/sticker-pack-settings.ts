'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  stickerPackOpen: number[];
  isLocked: boolean;
  timer: number;
};

type Action = {
  addOpenStickerPack: (id: number) => void;
  decrementTimer: (ms: number) => void;
  setTimer: (timer: number) => void;
  lock: () => void;
  unlock: () => void;
};

export const useStickerPack = create<State & Action>()(
  persist(
    (set) => ({
      stickerPackOpen: [],
      isLocked: true,
      timer: 0,
      lock: () => set({ isLocked: true }),
      unlock: () => set({ isLocked: false }),
      setTimer: (timer) => set({ timer }),
      decrementTimer: (ms) => set((state) => ({ timer: state.timer - ms })),
      addOpenStickerPack: (id) =>
        set((state) => ({
          stickerPackOpen: [...state.stickerPackOpen, id],
        })),
    }),
    {
      name: 'stickerPackSettings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

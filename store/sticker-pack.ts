"use client"


import { create } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';

type State = {
  stickerPackOpen: number;
  isLocked: boolean;
  timeout: number;
};

type Action = {
  incrementStickerPackOpen: () => void;
};
export const useStickerPack = create<State & Action>()(
  persist(
    (set) => ({
      stickerPackOpen: 0,
      isLocked: false,
      timeout: 0,
      incrementStickerPackOpen: () =>
        set((state) => ({
          stickerPackOpen: state.stickerPackOpen + 1,
          isLocked: true,
        })),
    }),
    {
      name: 'stickerPack',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

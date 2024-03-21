'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  stickerPackOpen: number[];
  isLocked: boolean;
};

type Action = {
  addOpenStickerPack: (id: number) => void;
  lock: () => void;
  unlock: () => void;
};

export const useStickerPack = create<State & Action>()(
  persist(
    (set) => ({
      stickerPackOpen: [],
      isLocked: true,
      lock: () => set({ isLocked: true }),
      unlock: () => set({ isLocked: false }),
      addOpenStickerPack: (id) =>
        set((state) => ({
          stickerPackOpen: [...state.stickerPackOpen, id],
        })),
    }),
    {
      name: 'sticker-pack-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

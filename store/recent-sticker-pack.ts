'use client';

import { Category } from '@/types/album';
import { StickerPack } from '@/types/sticker-pack';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  stickerPack: StickerPack;
};

type Action = {
  setAll: (stickerPack: StickerPack) => void;
  remove: (id: number, category: Category) => void;
  removeAll: () => void;
};

export const useRecentStickerPack = create<State & Action>()(
  persist(
    (set) => ({
      stickerPack: {
        characters: [],
        films: [],
        starships: [],
      },
      setAll: (stickerPack) => set({ stickerPack }),
      remove: (id, category) =>
        set((state) => {
          if (category === Category.CHARACTER) {
            return {
              ...state,
              stickerPack: {
                ...state.stickerPack,
                characters: state.stickerPack.characters.filter(
                  (character) => character.id !== id
                ),
              },
            };
          }
          if (category === Category.FILM) {
            return {
              ...state,
              stickerPack: {
                ...state.stickerPack,
                films: state.stickerPack.films.filter((film) => film.id !== id),
              },
            };
          }
          if (category === Category.STARSHIP) {
            return {
              ...state,
              stickerPack: {
                ...state.stickerPack,
                starships: state.stickerPack.starships.filter(
                  (starship) => starship.id !== id
                ),
              },
            };
          }

          return state;
        }),
      removeAll: () =>
        set({ stickerPack: { characters: [], films: [], starships: [] } }),
    }),
    {
      name: 'recentStickerPack',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

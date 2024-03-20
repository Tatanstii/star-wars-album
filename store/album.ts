'use client';

import { Album, Category } from '@/types/album';
import {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
} from '@/types/sticker-pack';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  album: Album;
};

type Action = {
  addSticker: (
    sticker: FilmSticker | CharacterSticker | StarshipSticker,
    category: Category
  ) => void;
};

export const useAlbum = create<State & Action>()(
  persist(
    (set) => ({
      album: {
        characters: [],
        starships: [],
        films: [],
      },
      addSticker: (sticker, category) =>
        set((state) => {
          if (category === Category.CHARACTER) {
            return {
              ...state,
              album: {
                ...state.album,
                characters: [
                  ...state.album.characters,
                  sticker as CharacterSticker,
                ],
              },
            };
          }
          if (category === Category.FILM) {
            return {
              ...state,
              album: {
                ...state.album,
                films: [...state.album.films, sticker as FilmSticker],
              },
            };
          }
          if (category === Category.STARSHIP) {
            return {
              ...state,
              album: {
                ...state.album,
                starships: [
                  ...state.album.starships,
                  sticker as StarshipSticker,
                ],
              },
            };
          }
          return state;
        }),
    }),
    {
      name: 'album',
      getStorage: () => localStorage,
    }
  )
);

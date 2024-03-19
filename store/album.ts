import { Album, Category, Character, Film, Starship } from '@/types/album';
import {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
} from '@/types/sticker-pack';
import { create } from 'zustand';

type State = Album;

type Action = {
  addSticker: (
    sticker: FilmSticker | CharacterSticker | StarshipSticker,
    category: Category
  ) => void;
};

export const useAlbum = create<State & Action>((set) => ({
  characters: [],
  starships: [],
  films: [],
  addSticker: (sticker, category) =>
    set((state) => {
      if (category === Category.CHARACTER) {
        return {
          ...state,
          characters: [...state.characters, sticker as CharacterSticker],
        };
      }
      if (category === Category.FILM) {
        return {
          ...state,
          films: [...state.films, sticker as FilmSticker],
        };
      }
      if (category === Category.STARSHIP) {
        return {
          ...state,
          starships: [...state.starships, sticker as StarshipSticker],
        };
      }
      return state;
    }),
}));

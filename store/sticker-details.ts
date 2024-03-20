import {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
} from '@/types/sticker-pack';
import { create } from 'zustand';

type State = {
  sticker: FilmSticker | CharacterSticker | StarshipSticker | null;
};

type Action = {
  setSticker: (
    sticker: FilmSticker | CharacterSticker | StarshipSticker
  ) => void;
  removeSticker: () => void;
};

export const useStickerDetails = create<State & Action>((set) => ({
  sticker: null,
  setSticker: (sticker) => set({ sticker }),
  removeSticker: () => set({ sticker: null }),
}));

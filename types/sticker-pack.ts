import { Category, Character, Film, Starship } from './album';

export enum StickerPackType {
  SPECIAL = 'special',
  REGULAR = 'regular',
}

export type StickerPackRule =
  | {
      films: 1;
      characters: 3;
      starships: 1;
    }
  | {
      characters: 3;
      starships: 2;
    };

export type Sticker =
  | {
      type: StickerPackType.SPECIAL | StickerPackType.REGULAR;
      category: Category.FILM;
      content: Film;
    }
  | {
      type: StickerPackType.SPECIAL | StickerPackType.REGULAR;
      category: Category.CHARACTER;
      content: Character;
    }
  | {
      type: StickerPackType.SPECIAL | StickerPackType.REGULAR;
      category: Category.STARSHIP;
      content: Starship;
    };

export type StickerPack = {
  films: Sticker[];
  characters: Sticker[];
  starships: Sticker[];
};

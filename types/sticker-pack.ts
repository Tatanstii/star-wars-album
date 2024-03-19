import { Category, Character, Film, Starship } from './album';

export enum StickerType {
  SPECIAL = 'Especial',
  REGULAR = 'Regular',
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

export type FilmSticker = {
  id: number;
  type: StickerType.SPECIAL | StickerType.REGULAR;
  category: Category.FILM;
  content: Film;
};

export type CharacterSticker = {
  id: number;
  type: StickerType.SPECIAL | StickerType.REGULAR;
  category: Category.CHARACTER;
  content: Character;
};

export type StarshipSticker = {
  id: number;
  type: StickerType.SPECIAL | StickerType.REGULAR;
  category: Category.STARSHIP;
  content: Starship;
};

export type StickerPack = {
  films: FilmSticker[];
  characters: CharacterSticker[];
  starships: StarshipSticker[];
};

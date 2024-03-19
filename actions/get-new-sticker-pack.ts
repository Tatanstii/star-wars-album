'use server';

import { getFilm } from '@/data/films';
import { getCharacter } from '@/data/people';
import {
  MAX_CHARACTERS_LENGTH,
  MAX_FILMS_LENGTH,
  MAX_STARSHIPS_LENGTH,
} from '@/lib/const';
import { checkIsSpecialStickerPack, getRandomInt } from '@/lib/utils';
import { Category } from '@/types/album';
import {
  Sticker,
  StickerPack,
  StickerPackRule,
  StickerPackType,
} from '@/types/sticker-pack';

const ERROR_MESSAGE = 'Error al obtener el paquete de stickers';

export default async function getNewStickerPack(rule: StickerPackRule) {
  try {
    let films: Sticker[] = [];
    let characters: Sticker[] = [];
    let starships: Sticker[] = [];

    if ('films' in rule && typeof rule.films === 'number') {
      const randomFilmId = getRandomInt(1, MAX_FILMS_LENGTH);
      const film = await getFilm(randomFilmId);

      films = [
        ...films,
        {
          type: checkIsSpecialStickerPack(randomFilmId, Category.FILM)
            ? StickerPackType.SPECIAL
            : StickerPackType.REGULAR,
          category: Category.FILM,
          content: film,
        },
      ];
    }

    for (let i = 0; i < rule.characters; i++) {
      const randomCharacterId = getRandomInt(1, MAX_CHARACTERS_LENGTH);
      const character = await getCharacter(randomCharacterId);

      characters = [
        ...characters,
        {
          type: checkIsSpecialStickerPack(randomCharacterId, Category.CHARACTER)
            ? StickerPackType.SPECIAL
            : StickerPackType.REGULAR,
          category: Category.CHARACTER,
          content: character,
        },
      ];
    }

    for (let i = 0; i < rule.starships; i++) {
      const randomStarshipId = getRandomInt(1, MAX_STARSHIPS_LENGTH);
      const starship = await getCharacter(randomStarshipId);

      starships = [
        ...starships,
        {
          type: checkIsSpecialStickerPack(randomStarshipId, Category.STARSHIP)
            ? StickerPackType.SPECIAL
            : StickerPackType.REGULAR,
          category: Category.STARSHIP,
          content: starship,
        },
      ];
    }

    return {
      data: {
        films,
        characters,
        starships,
      } as StickerPack,
    };
  } catch (error) {
    return {
      error: ERROR_MESSAGE,
    };
  }
}

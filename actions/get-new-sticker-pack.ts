'use server';

import { getFilms } from '@/data/films';
import { getPeople } from '@/data/people';
import { getStarships } from '@/data/starships';
import { EXTRACT_ID_REGEX } from '@/lib/const';
import { checkIsSpecialStickerPack, getRandomInt } from '@/lib/utils';
import { Category } from '@/types/album';
import {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
  StickerPack,
  StickerPackRule,
  StickerType,
} from '@/types/sticker-pack';

const ERROR_MESSAGE = 'Error al obtener el paquete de stickers';

const generateStiker = (data: any, category: Category) => {
  const all = data;
  const randomItem = getRandomInt(1, data.length);

  const item = all[randomItem];
  const match = item.url.match(EXTRACT_ID_REGEX);
  const id = match ? Number(match[1]) : null;

  if (!id) {
    return {
      error: ERROR_MESSAGE,
    };
  }

  return {
    id: id,
    type: checkIsSpecialStickerPack(id, category)
      ? StickerType.SPECIAL
      : StickerType.REGULAR,
    category: category,
    content: item,
  };
};

export default async function getNewStickerPack(rule: StickerPackRule) {
  let films: FilmSticker[] = [];
  let characters: CharacterSticker[] = [];
  let starships: StarshipSticker[] = [];

  try {
    if ('films' in rule && typeof rule.films === 'number') {
      const sticker = await generateStiker(await getFilms(), Category.FILM);

      films = [...films, sticker as FilmSticker];
    }

    for (let i = 0; i < rule.characters; i++) {
      const sticker = await generateStiker(await getPeople(), Category.CHARACTER);

      characters = [...characters, sticker as CharacterSticker];
    }

    for (let i = 0; i < rule.starships; i++) {
      const sticker = await generateStiker(await getStarships(), Category.STARSHIP);

      starships = [...starships, sticker as StarshipSticker];
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

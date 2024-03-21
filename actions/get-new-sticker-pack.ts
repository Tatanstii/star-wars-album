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

const ERROR_MESSAGE =
  'Error al obtener el paquete de láminas, intenta de nuevo.';

const generateSticker = (data: any, category: Category) =>
  new Promise((resolve, reject) => {
    const all = data;
    const randomItem = getRandomInt(1, data.length);

    const item = all[randomItem];
    const match = item.url.match(EXTRACT_ID_REGEX);
    const id = match ? Number(match[1]) : null;

    if (id) {
      resolve({
        id: id,
        type: checkIsSpecialStickerPack(id, category)
          ? StickerType.SPECIAL
          : StickerType.REGULAR,
        category: category,
        content: item,
      });
    }

    reject({
      error: ERROR_MESSAGE,
    });
  });

export default async function getNewStickerPack(rule: StickerPackRule) {
  let films: FilmSticker[] = [];
  let characters: CharacterSticker[] = [];
  let starships: StarshipSticker[] = [];

  const data = await Promise.all([getFilms(), getPeople(), getStarships()]);

  const allFilms = data[0];
  const allPeople = data[1];
  const allStarships = data[2];

  try {
    if ('films' in rule && typeof rule.films === 'number') {
      if (allFilms) {
        const sticker = await generateSticker(allFilms, Category.FILM);

        films = [...films, sticker as FilmSticker];
      }
    }

    for (let i = 0; i < rule.characters; i++) {
      if (allPeople) {
        const sticker = await generateSticker(allPeople, Category.CHARACTER);
        characters = [...characters, sticker as CharacterSticker];
      }
    }

    for (let i = 0; i < rule.starships; i++) {
      if (allStarships) {
        const sticker = await generateSticker(allStarships, Category.STARSHIP);
        starships = [...starships, sticker as StarshipSticker];
      }
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

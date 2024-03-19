import { StickerPackType } from '@/types/sticker-pack';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  MAX_CHARACTER_SPECIAL_STICKER_PACK,
  MAX_FILM_SPECIAL_STICKER_PACK,
  MAX_FILMS_LENGTH,
  MAX_STARSHIP_SPECIAL_STICKER_PACK,
} from './const';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkIsSpecialStickerPack(
  id: number,
  type: 'film' | 'character' | 'starship'
) {
  if (type === 'film') {
    return id >= 1 && id <= MAX_FILM_SPECIAL_STICKER_PACK;
  }
  if (type === 'character') {
    return id >= 1 && id <= MAX_CHARACTER_SPECIAL_STICKER_PACK;
  }

  if (type === 'starship') {
    return id >= 1 && id <= MAX_STARSHIP_SPECIAL_STICKER_PACK;
  }

  return false;
}

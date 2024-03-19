'use server';

import { stickersPackRules } from '@/lib/rules';
import { getRandomInt } from '@/lib/utils';
import { StickersPackRule } from '@/types/rules';

const MAX_STICKERS_PACK = 4;

export const getStickersPack = async (): Promise<StickersPackRule[]> => {
  const sitkcerPacks = new Array(MAX_STICKERS_PACK).fill(null);
  
  return sitkcerPacks.map(
    () => stickersPackRules[getRandomInt(0, stickersPackRules.length - 1)]
  );
};

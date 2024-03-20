'use server';

import type { StickerPackRule } from '@/types/sticker-pack';
import { stickersPackRules } from '@/lib/rules';
import { getRandomInt } from '@/lib/utils';
import { MAX_STICKERS_PACK } from '@/lib/const';



export default async function getStickerPackRules(): Promise<
  StickerPackRule[]
> {
  const emptyRules = new Array(MAX_STICKERS_PACK).fill(null);

  return emptyRules.map(
    () => stickersPackRules[getRandomInt(0, stickersPackRules.length - 1)]
  );
}

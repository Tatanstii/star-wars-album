import { StickerPack } from '@/types/sticker-pack';
import { create } from 'zustand';

type State = {
  stickerPack: StickerPack | null;
};

type Action = {
  setStickerPack: (stickerPack: StickerPack) => void;
};

export const useRecentStickerPack = create<State & Action>((set) => ({
  stickerPack: null,
  setStickerPack: (stickerPack) => set({ stickerPack }),
}));

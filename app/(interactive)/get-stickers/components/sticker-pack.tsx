'use client';

import { StickerPackRule } from '@/types/sticker-pack';

type Props = {
  isOpen: boolean;
  isLocked: boolean;
  rule: StickerPackRule;
  onClick: (rule: StickerPackRule) => void;
};

export default function StickerPack({
  rule,
  isOpen,
  isLocked,
  onClick,
}: Props) {
  const handleOnClick = () => {
    onClick(rule);
  };

  if (isLocked) {
    return (
      <div className='h-[400px] w-full max-w-lg rounded-md bg-gradient-to-b from-gray-600 to-primary'></div>
    );
  }

  if (isOpen) {
    return (
      <div className='h-[400px] w-full max-w-lg rounded-md bg-gradient-to-b from-green-600 to-primary'></div>
    );
  }

  return (
    <div
      className='h-[400px] w-full max-w-lg rounded-md bg-gradient-to-b from-orange-600 to-primary'
      onClick={handleOnClick}
    ></div>
  );
}

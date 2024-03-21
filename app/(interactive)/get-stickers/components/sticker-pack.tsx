'use client';

import { StickerPackRule } from '@/types/sticker-pack';
import Image from 'next/image';
import Logo from '@/public/assets/images/logo.png';
import { cn } from '@/lib/utils';

type Props = {
  index: number;
  isOpen: boolean;
  isLocked: boolean;
  rule: StickerPackRule;
  onClick: (rule: StickerPackRule, index: number) => void;
};

export default function StickerPack({
  index,
  rule,
  isOpen,
  isLocked,
  onClick,
}: Props) {
  const handleOnClick = () => {
    if (isLocked || isOpen) return;
    onClick(rule, index);
  };

  return (
    <div
      className={cn(
        'grid h-[400px] w-full max-w-lg place-items-center rounded-md border-rose-800 bg-gradient-to-b from-gray-900 to-gray-700 px-10 py-5 shadow-lg transition hover:cursor-pointer hover:border-2 hover:shadow-rose-800',
        {
          'saturate-0 hover:cursor-not-allowed hover:border-none hover:shadow-none':
            isLocked || isOpen,
        }
      )}
      onClick={handleOnClick}
    >
      <div>
        <Image
          src={Logo.src}
          alt='logo'
          width={200}
          height={200}
          className='aspect-square'
          priority
        />
        <p className='text-center font-starjedi text-primary'>Album</p>
      </div>
    </div>
  );
}

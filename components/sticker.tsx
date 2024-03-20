"use client"

import { cn } from '@/lib/utils';
import { Category } from '@/types/album';
import { StickerType } from '@/types/sticker-pack';
import { GiAlienBug, GiFilmSpool, GiSpaceShuttle } from 'react-icons/gi';
import { Button } from './ui/button';

type Props = {
  id: number;
  stickerType: StickerType;
  stickerCategory: Category;
  stickerNumber: number;
  title: string;
  actionText?: string;
  onClick?: () => void;
};

export default function Sticker({
  stickerType,
  stickerCategory,
  stickerNumber,
  title,
  actionText,
  onClick,
}: Props) {
  return (
    <div
      className={cn(
        'relative flex h-full max-h-[500px] min-h-[400px] w-full max-w-[400px] flex-col rounded-md bg-slate-800',
        {
          'bg-rose-800': stickerType === StickerType.SPECIAL,
        }
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between rounded-t-md bg-slate-900 p-4',
          { 'bg-rose-900': stickerType === StickerType.SPECIAL }
        )}
      >
        <div className='flex w-full flex-row justify-between font-bold'>
          <p className='text-small'>{stickerCategory}</p>
          <p className='font-starjedi text-xl'>
            <span className='mr-2'>#</span>
            {stickerNumber}
          </p>
        </div>
      </div>
      <div className={cn('relative flex h-full flex-col justify-between p-5')}>
        <div className='flex w-full justify-end'>
          <div
            className={cn(
              'z-20 flex w-fit rounded-md px-5 py-2 text-center font-bold uppercase',
              {
                'text-primary ring ring-primary':
                  stickerType === StickerType.SPECIAL,
                'bg-slate-900': stickerType === StickerType.REGULAR,
              }
            )}
          >
            {stickerType}
          </div>
        </div>
        <div className='z-20 grid h-full w-full place-items-center font-starjedi text-3xl'>
          {title}
        </div>
        <span className='absolute inset-0 z-10 grid h-full w-full place-items-center'>
          {stickerCategory === Category.CHARACTER && (
            <GiAlienBug size={300} className='text-slate-900' />
          )}
          {stickerCategory === Category.STARSHIP && (
            <GiSpaceShuttle size={300} className='text-slate-900' />
          )}
          {stickerCategory === Category.FILM && (
            <GiFilmSpool size={300} className='text-slate-900' />
          )}
        </span>
        <div className='z-30 flex w-full flex-row'>
          {actionText && onClick && (
            <Button
              type='button'
              className='w-full text-lg text-secondary-foreground'
              size='lg'
              onClick={onClick}
            >
              {actionText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

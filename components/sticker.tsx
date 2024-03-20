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
  alreadyExist: boolean;
  onClick?: (id: number, category: Category, alreadyExist: boolean) => void;
};

export default function Sticker({
  id,
  stickerType,
  stickerCategory,
  stickerNumber,
  title,
  alreadyExist,
  onClick,
}: Props) {
  return (
    <article
      className={cn(
        'relative flex h-full max-h-[500px] min-h-[400px] w-[400px] flex-col rounded-md bg-slate-800',
        {
          'bg-rose-800': stickerType === StickerType.SPECIAL,
        }
      )}
    >
      <header
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
      </header>
      <div className={cn('relative flex h-full flex-col justify-between p-5')}>
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
        <div className='z-30 flex w-full flex-row justify-between'>
          <div
            className={cn(
              'w-fit rotate-6 rounded-md px-5 py-2 font-bold uppercase',
              {
                'bg-primary text-secondary-foreground':
                  stickerType === StickerType.SPECIAL,
                'bg-slate-900': stickerType === StickerType.REGULAR,
              }
            )}
          >
            {stickerType}
          </div>
          <Button
            type='button'
            className='text-lg text-secondary-foreground'
            onClick={() => onClick && onClick(id, stickerCategory, alreadyExist)}
          >
            {alreadyExist ? 'Descartar' : 'Agregar al album'}
          </Button>
        </div>
      </div>
    </article>
  );
}

'use client';

import { homeNavItems } from '@/data/nav';
import { cn, formatMsToMinutes } from '@/lib/utils';
import { useNewStickerPackCounter } from '@/store/new-sticker-pack-counter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const { timer, interval } = useNewStickerPackCounter((state) => state);

  return (
    <nav>
      <div className='flex flex-col justify-between gap-5 rounded-md border border-primary p-5 md:flex-row'>
        <ul className='flex flex-col gap-5 md:flex-row'>
          {homeNavItems.map((item, index) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={cn(
                  'flex flex-row items-center transition hover:text-primary',
                  {
                    'text-primary':
                      item.link !== '/'
                        ? pathname.includes(item.link)
                        : pathname === item.link,
                  }
                )}
              >
                <span className='mr-2'>
                  <item.icon size={20} />
                </span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {interval && (
          <p>
            Nuevo paquete de láminas en{' '}
            <span className='ml-1 font-starjedi'>
              {formatMsToMinutes(timer)}
            </span>
          </p>
        )}
      </div>
    </nav>
  );
}

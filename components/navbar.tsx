'use client';

import { homeNavItems } from '@/data/nav';
import { cn, formatMsToMinutes } from '@/lib/utils';
import { useStickerPack } from '@/store/sticker-pack-settings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const { timer } = useStickerPack((state) => state);

  return (
    <nav>
      <div className='flex flex-row justify-between rounded-md border border-primary p-5'>
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
        {timer != 0 && (
          <p>
            Nuevo paquete de pegatinas en{' '}
            <span className='ml-1 font-starjedi'>
              {formatMsToMinutes(timer)}
            </span>
          </p>
        )}
      </div>
    </nav>
  );
}

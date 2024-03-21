'use client';

import { homeNavItems } from '@/data/nav';
import { cn, formatMsToMinutes } from '@/lib/utils';
import { useNewStickerPackCounter } from '@/store/new-sticker-pack-counter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAppLoaded } from '@/store/app-loaded';

export default function Navbar() {
  const pathname = usePathname();
  const { timer, interval, startTimer } = useNewStickerPackCounter(
    (state) => state
  );
  const { appLoaded, setAppLoaded } = useAppLoaded((state) => state);

  useEffect(() => {
    if (appLoaded && interval) {
      console.log('going to start', { interval, appLoaded });
      startTimer();
      setAppLoaded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, appLoaded]);

  useEffect(() => {
    if (appLoaded) {
      const timeout = setTimeout(() => {
        setAppLoaded(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appLoaded]);
  return (
    <>
      <nav>
        <div className='flex flex-col justify-between gap-5 rounded-md border border-primary p-5 md:flex-row'>
          <ul className='flex flex-col gap-5 md:flex-row'>
            {homeNavItems.map((item) => (
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
            <div>
              <p>
                Nuevo paquete de láminas en{' '}
                <span className='ml-1 font-starjedi'>
                  {formatMsToMinutes(timer)}
                </span>
              </p>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

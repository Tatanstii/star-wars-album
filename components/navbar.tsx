'use client';

import { navigationItems } from '@/data/navigation-items';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className='rounded-md border px-4 py-2'>
        <ul className='flex flex-row gap-5'>
          {navigationItems.map((item, index) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={cn('transition hover:text-primary', {
                  'text-primary': pathname === item.link,
                })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

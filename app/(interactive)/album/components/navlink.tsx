'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  link: string;
  children: React.ReactNode;
};

export default function NavLink({ link, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={cn(
        'rounded-md p-2 underline underline-offset-2 transition hover:bg-primary hover:text-gray-900',
        {
          'bg-primary text-gray-900 no-underline hover:text-gray-600':
            pathname.includes(link),
        }
      )}
    >
      {children}
    </Link>
  );
}

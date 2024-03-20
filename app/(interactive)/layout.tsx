import Navbar from '@/components/navbar';
import React from 'react';

export default function InteractiveLayot({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className='px-20 py-10'>
      <header>
        <Navbar />
      </header>
      <main className='mt-10'>{children}</main>
    </div>
  );
}

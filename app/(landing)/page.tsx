'use client';

import { navigationItems } from '@/data/navigation-items';
import NavigationButton from './components/navigation-button';

const menuItems = navigationItems.filter((item) => item.title !== 'Inicio');

export default function Home() {
  return (
    <main className='grid place-items-center md:h-dvh'>
      <section>
        <h1 className='font-starjedi mb-5 text-center text-4xl text-primary'>
          Star wars album
        </h1>
        <div className='flex w-full flex-col justify-center gap-5 md:flex-row'>
          {menuItems.map((item) => (
            <NavigationButton
              key={item.title}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

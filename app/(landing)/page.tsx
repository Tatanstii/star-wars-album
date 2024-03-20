'use client';

import { homeNavItems } from '@/data/nav';
import NavigationButton from './components/navigation-button';

const menuItems = homeNavItems.filter((item) => item.title !== 'Inicio');

export default function Home() {
  return (
    <section className='grid place-items-center md:h-dvh'>
      <div>
        <h1 className='mb-5 text-center font-starjedi text-4xl text-primary'>
          Star wars album
        </h1>
        <div className='flex flex-col justify-center gap-10 md:flex-row'>
          {menuItems.map((item) => (
            <NavigationButton
              key={item.title}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

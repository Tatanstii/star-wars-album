'use client';

import { albumNavItems } from '@/data/nav';
import NavLink from './navlink';

export default function CategoryNav() {
  return (
    <div>
      <h2 className='mb-4'>Categorías</h2>
      <ul className='flex flex-row gap-5'>
        {albumNavItems.map((item, index) => (
          <li key={item.link}>
            <NavLink link={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

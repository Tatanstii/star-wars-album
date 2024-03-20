import { BiSolidPhotoAlbum } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { TbCardsFilled } from 'react-icons/tb';

export const homeNavItems = [
  {
    title: 'Inicio',
    icon: FaHome,
    link: '/',
  },
  {
    title: 'Obtener láminas',
    icon: TbCardsFilled,
    link: '/get-stickers',
  },
  {
    title: 'Mi álbum',
    icon: BiSolidPhotoAlbum,
    link: '/album',
  },
];

export const albumNavItems = [
  {
    title: 'Peliculas',
    link: '/album/films',
  },
  {
    title: 'Personajes',
    link: '/album/characters',
  },
  {
    title: 'Naves',
    link: '/album/starships',
  },
];

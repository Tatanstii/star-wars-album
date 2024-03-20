'use client';

import Album from '@/components/album';
import { useAlbum } from '@/store/album';
import { Film } from '@/types/album';
import React from 'react';

type Props = {
  placeholderItems: Film[];
};

export default function FilmsAlbum({ placeholderItems }: Props) {
  const { album } = useAlbum((state) => state);

  return (
    <Album items={album.films} placeholderItems={placeholderItems}></Album>
  );
}

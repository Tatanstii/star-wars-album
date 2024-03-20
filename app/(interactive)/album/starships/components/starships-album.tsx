'use client';

import Album from '@/components/album';
import { useAlbum } from '@/store/album';
import { Starship } from '@/types/album';
import React from 'react';

type Props = {
  placeholderItems: Starship[];
};

export default function StarhsipsAlbum({ placeholderItems }: Props) {
  const { album } = useAlbum((state) => state);
  return (
    <Album items={album.starships} placeholderItems={placeholderItems}></Album>
  );
}

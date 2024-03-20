"use client"

import Album from '@/components/album';
import { useAlbum } from '@/store/album';
import { Character } from '@/types/album';
import React from 'react';
type Props = {
  placeholderItems: Character[];
};

export default function CharacterAlbum({ placeholderItems }: Props) {
  const { album } = useAlbum((state) => state);
  return (
    <Album items={album.characters} placeholderItems={placeholderItems}></Album>
  );
}

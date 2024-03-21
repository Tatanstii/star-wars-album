"use client"

import React from 'react';

type Props = {
  id?: number | string | null;
};

export default function Placeholder({ id }: Props) {
  if (!id) return null;
  return (
    <div className='h-auto min-h-[400px] w-full rounded-md bg-slate-800'>
      <div className='grid h-full place-items-center'>
        <p className='font-starjedi text-4xl text-slate-600'>
          <span className='mr-2'>#</span>
          {id}
        </p>
      </div>
    </div>
  );
}

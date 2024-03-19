'use client';

import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  link: string;
};

export default function NavigationButton({ title, link }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(link);
  };

  return (
    <button
      type='button'
      className='group relative mx-auto h-[300px] w-[250px] rounded-t-md bg-gray-700 shadow-primary transition hover:scale-105'
      onClick={onClick}
    >
      <div className='absolute inset-5 flex flex-row gap-2'>
        <span className=' block h-1 w-[100px] rounded-full bg-background transition group-hover:bg-primary' />
        <span className='h-1 w-2  bg-background transition group-hover:bg-primary' />
      </div>
      <div className='grid h-full place-items-center'>
        <p className='text-lg uppercase tracking-wider transition group-hover:text-primary'>
          {title}
        </p>
      </div>
      <span className='block h-[10px] w-full rounded-b-md bg-gray-700 before:absolute before:right-5 before:block before:h-[10px] before:w-1/4 before:rounded-t-md before:bg-background' />
    </button>
  );
}

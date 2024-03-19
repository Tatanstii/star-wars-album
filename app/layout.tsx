import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Lato } from 'next/font/google';
import favicon from '@/public/assets/images/favicon/favicon.ico';
import { cn } from '@/lib/utils';

const lato = Lato({ subsets: ['latin'], weight: '400' });

const Starjhol = localFont({
  src: '../public/assets/fonts/Starjedi/Starjhol.ttf',
  variable: '--font-starjhol',
});

const Starjedi = localFont({
  src: '../public/assets/fonts/Starjedi/Starjedi.ttf',
  variable: '--font-starjedi',
});

export const metadata: Metadata = {
  title: 'Star Wars Album',
  description:
    'Un álbum virtual donde podrás ver a tus personajes favoritos de Star Wars y mucho más.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <link rel='icon' href={favicon.src} type='image/x-icon' />
      <body
        className={cn(lato.className, Starjedi.variable, Starjhol.variable)}
      >
        {children}
      </body>
    </html>
  );
}

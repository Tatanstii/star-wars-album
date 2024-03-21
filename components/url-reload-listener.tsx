'use client';

import { useEffect } from 'react';

type Props = {
  callback: () => void;
};

export default function UrlReloadListener({ callback }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', callback);
      return () => window.removeEventListener('beforeunload', callback);
    }
  }, [callback]);

  return null;
}

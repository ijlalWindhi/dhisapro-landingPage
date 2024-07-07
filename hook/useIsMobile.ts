'use client';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(width < 769);

  useEffect(() => {
    if (width < 769) {
      setIsMobile(true);
    }
  }, [width]);

  return { isMobile };
};

export default useIsMobile;

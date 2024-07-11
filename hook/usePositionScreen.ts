"use client";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

interface IPositionScreen {
  threshold?: number;
}

const usePositionScreen = ({ threshold = 0 }: IPositionScreen) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > threshold);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
};

export default usePositionScreen;

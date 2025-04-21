"use client";

import { useEffect, useState } from "react";

export function useDisableOnWidth(threshold = 640, onNavOpen) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setDisabled(window.innerWidth > threshold);
      onNavOpen();
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [threshold]);

  return disabled;
}

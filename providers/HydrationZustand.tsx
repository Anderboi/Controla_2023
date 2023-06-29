"use client";

import React from "react";
import { useEffect, useState } from "react";

interface ZustandProps {
  children: React.ReactNode;
}

const HydrationZustand = ({ children }: ZustandProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <>{children}</> : null}</>;
};

export default HydrationZustand;

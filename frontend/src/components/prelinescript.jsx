"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";


const PrelineScript = () => {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline");

      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}

export default PrelineScript;
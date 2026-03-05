"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  return (
    <motion.div
      key={pathname}
      initial={isFirstRender ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

import { useState, useEffect } from "react";

export type Viewport = {
  width: number;
  height: number;
};

const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState<Viewport>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return viewport;
};

export default useViewport;

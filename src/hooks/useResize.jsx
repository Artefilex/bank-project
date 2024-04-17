import { useState, useEffect } from "react";

function useResize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 799);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 799);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}

export default useResize;

import { useState, useEffect } from 'react';

export const useIsMobile = (mobileBreakpoint = 768, tinyBreakpoint = 400) => {
  const [breakpoints, setBreakpoints] = useState({
    Big: false,
    Tiny: false
  });

  useEffect(() => {
    const checkBreakpoints = () => {
      const width = window.innerWidth;
      setBreakpoints({
        Big: width > tinyBreakpoint && width <= mobileBreakpoint, 
        Tiny: width <= tinyBreakpoint 
      });
    };

    checkBreakpoints();
    window.addEventListener('resize', checkBreakpoints);

    return () => {
      window.removeEventListener('resize', checkBreakpoints);
    };
  }, [mobileBreakpoint, tinyBreakpoint]);

  return breakpoints;
};

export const useIsTablet = (tableBreakpoint = 1120, mobileBreakpoint = 768) => {
  const [breakpoints, setBreakpoints] = useState(false);

  useEffect(() => {
    const checkBreakpoints = () => {
      const width = window.innerWidth;
      setBreakpoints(
        width > mobileBreakpoint && width <= tableBreakpoint 
      );
    };

    checkBreakpoints();
    window.addEventListener('resize', checkBreakpoints);

    return () => {
      window.removeEventListener('resize', checkBreakpoints);
    };
  }, [tableBreakpoint, mobileBreakpoint]);

  return breakpoints;
};


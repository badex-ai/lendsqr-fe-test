import { useState, useEffect } from 'react';

const UseIsMobile = (mobileBreakpoint = 768, tinyBreakpoint = 400) => {
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

export default UseIsMobile;
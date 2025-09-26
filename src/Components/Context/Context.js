import React, {useEffect, useRef} from 'react'

const ScrollOpacity = ({ children }) => {
    const elementRef = useRef(null);
    const animationRef = useRef(null);
    useEffect(() => {
      const element = elementRef.current;
      const keyframes = [
        {opacity: 0},
        {opacity: 1}
      ];

      const options = {
        duration: 1000,
        fill: 'forwards'
      };
      
      animationRef.current = element.animate(keyframes, options);
      animationRef.current.pause();

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const elementHeight = element.offsetHeight;

        const start = elementTop - windowHeight * 0.8;
        const end = elementTop + elementHeight * 0.2;
        const progress = Math.min(1, Math.max(0, (scrollY - start) / (end - start)));

        animationRef.current.currenTime = progress * options.duration;
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener('scroll', handleScroll);
        animationRef.current.cancel();
      }
    }, []);
    return (
        <div ref={elementRef} style={{opacity: 1}}>{children}</div>
    )
  }

export default ScrollOpacity;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    function handleMouseOut() {
      cursorRef.current.classList.add('hidden');
      followerRef.current.classList.add('hidden');
    }

    function handleMouseMove(e) {
      if (e.target.closest('[data-mouseattract="dark"]')) {
        cursorRef.current.classList.add('active_light');
        followerRef.current.classList.add('active_light');
      } else if (e.target.closest('[data-mouseattract="light"]')) {
        cursorRef.current.classList.add('active_dark');
        followerRef.current.classList.add('active_dark');
      } else {
        cursorRef.current.classList.remove(
          'active_dark',
          'active_light',
          'hidden'
        );
        followerRef.current.classList.remove(
          'active_dark',
          'active_light',
          'hidden'
        );
      }

      mouseX = e.pageX;
      mouseY = e.pageY;
    }

    gsap.to(
      {},
      {
        duration: 0.01,
        repeat: -1,
        onRepeat: () => {
          posX += (mouseX - posX) / 5;
          posY += (mouseY - posY) / 5;

          gsap.set('#cursor', {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });

          gsap.set('#aura', {
            css: {
              left: posX - 24,
              top: posY - 24,
            },
          });
        },
      }
    );

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorRef, followerRef]);

  return (
    <>
      <div ref={cursorRef} id="cursor"></div>
      <div ref={followerRef} id="aura"></div>
    </>
  );
}

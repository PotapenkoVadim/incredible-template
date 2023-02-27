import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './fade-container.module.scss';

export default function FadeContainer({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 0.75,
        y: 0,
        scrollTrigger: {
          trigger: ref.current,
        },
      }
    );
  }, [ref]);

  return (
    <div ref={ref} className={styles['fade-container']}>
      {children}
    </div>
  );
}

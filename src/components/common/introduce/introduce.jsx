import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './introduce.module.scss';
import Button from '@/components/ui-kit/button/button';

export default function Introduce() {
  useLayoutEffect(() => {
    gsap.to(`.${styles['introduce__title']}`, {
      delay: 1.25,
      opacity: 1,
    });

    gsap.fromTo(
      `.${styles['introduce__actions']}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        delay: 1.25,
        y: 0,
      }
    );
  }, []);

  return (
    <section className={styles['introduce']}>
      <div className={styles['introduce__content']}>
        <h1 className={styles['introduce__title']}>
          Welcome to the incredible
        </h1>

        <div className={styles['introduce__actions']}>
          <Button variant="outline">Button Text</Button>
          <Button>Button Text</Button>
        </div>
      </div>
    </section>
  );
}

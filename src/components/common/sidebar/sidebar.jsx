import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './sidebar.module.scss';

export default function Sidebar() {
  useEffect(() => {
    gsap.fromTo(
      '[data-title]',
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      '[data-link]',
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        stagger: 0.15,
        duration: 0.55,
      }
    );
  }, []);

  return (
    <div className={styles['sidebar']}>
      <div data-title className={styles['sidebar__title']}>
        INCREDIBLE
      </div>

      <nav className={styles['sidebar__nav']}>
        <a
          data-link
          className={`${styles['sidebar__nav-item']} ${styles['sidebar__nav-item_active']}`}
          href="#"
        >
          Home
        </a>
        <a data-link className={styles['sidebar__nav-item']} href="#">
          About
        </a>
        <a data-link className={styles['sidebar__nav-item']} href="#">
          Gallery
        </a>
        <a data-link className={styles['sidebar__nav-item']} href="#">
          Contact
        </a>
      </nav>
    </div>
  );
}

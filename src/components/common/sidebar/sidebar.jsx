import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './sidebar.module.scss';
import Icon from '@/components/ui-kit/icon/icon';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles['sidebar__title']}`,
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
      `.${styles['sidebar__nav-item']}`,
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

  const openMobileMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles['sidebar']} ${isOpen && styles['sidebar_open']}`}>
      <div className={styles['sidebar__mobile-menu']} onClick={openMobileMenu}>
        <Icon variant={isOpen ? 'close' : 'menu'} color="red" />
      </div>

      <div className={styles['sidebar__title']}>INCREDIBLE</div>

      <nav className={styles['sidebar__nav']}>
        <a
          data-mouseattract="light"
          className={`${styles['sidebar__nav-item']} ${styles['sidebar__nav-item_active']}`}
          href="#"
        >
          Home
        </a>
        <a
          data-mouseattract="light"
          className={styles['sidebar__nav-item']}
          href="#"
        >
          About
        </a>
        <a
          data-mouseattract="light"
          className={styles['sidebar__nav-item']}
          href="#"
        >
          Gallery
        </a>
        <a
          data-mouseattract="light"
          className={styles['sidebar__nav-item']}
          href="#"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

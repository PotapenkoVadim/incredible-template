import React from 'react';
import styles from './app.module.scss';
import Sidebar from '@/components/common/sidebar/sidebar';
import Introduce from '@/components/common/introduce/introduce';
import Benefits from '@/components/common/benefits/benefits';
import Attention from '@/components/common/attention/attention';
import Works from '@/components/common/works/works';
import Contact from '@/components/common/contact/contact';
import MouseCursor from '@/components/common/mouse-cursor/mouse-cursor';

export default function App() {
  return (
    <>
      <MouseCursor />
      <main className={styles['app']}>
        <Sidebar />

        <div className={styles['app__container']}>
          <Introduce />
          <Benefits />
          <Attention />
          <Works />
          <Contact />

          <footer className={styles['app__footer']}>
            Copyright Incredible. Made in Webflow.
          </footer>
        </div>
      </main>
    </>
  );
}

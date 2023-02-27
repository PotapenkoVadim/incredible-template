import React from 'react';
import styles from './app.module.scss';
import Sidebar from '@/components/common/sidebar/sidebar';
import Introduce from '@/components/common/introduce/introduce';

export default function App() {
  return (
    <main className={styles['app']}>
      <Sidebar />

      <div className={styles['app__container']}>
        <Introduce />
      </div>
    </main>
  );
}

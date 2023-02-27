import React from 'react';
import styles from './app.module.scss';
import Sidebar from '@/components/common/sidebar/sidebar';
import Introduce from '@/components/common/introduce/introduce';
import Benefits from '@/components/common/benefits/benefits';
import Attention from '@/components/common/attention/attention';

export default function App() {
  return (
    <main className={styles['app']}>
      <Sidebar />

      <div className={styles['app__container']}>
        <Introduce />
        <Benefits />
        <Attention />
      </div>
    </main>
  );
}

import React from 'react';
import styles from './subtitle.module.scss';

export default function Subtitle({ children }) {
  return <div className={styles['subtitle']}>{children}</div>;
}

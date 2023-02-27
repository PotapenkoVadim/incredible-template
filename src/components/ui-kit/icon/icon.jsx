import React from 'react';
import styles from './icon.module.scss';

export default function Icon({ variant, className, color = 'black' }) {
  return (
    <span
      className={`
      ${styles['icon']}
      ${styles[`icon__${variant}`]}
      ${styles[`icon_${color}`]}
      ${className ?? ''}
    `}
    />
  );
}

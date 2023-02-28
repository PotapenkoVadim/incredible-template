import React from 'react';
import styles from './button.module.scss';

export default function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      data-mouseattract="dark"
      className={`
        ${styles['button']}
        ${styles[`button__${variant}`]}
        ${className ?? ''}
      `}
      {...props}
    />
  );
}

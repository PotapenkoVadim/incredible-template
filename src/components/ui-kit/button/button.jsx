import React from 'react';
import styles from './button.module.scss';

export default function Button({ variant = 'primary', ...props }) {
  return (
    <button
      className={`
        ${styles['button']}
        ${styles[`button__${variant}`]}
      `}
      {...props} />
  );
}
import React from 'react';
import styles from './benefits.module.scss';
import Icon from '@/components/ui-kit/icon/icon';

export default function BenefitsItem({ benefit }) {
  return (
    <div className={styles['benefits__item']}>
      <Icon variant={benefit.icon} className={styles['benefits__item-icon']} />

      <div className={styles['benefits__item-title']}>{benefit.title}</div>
      <div className={styles['benefits__item-text']}>{benefit.text}</div>
      <a className={styles['benefits__item-link']} href="#">
        Text Link
      </a>
    </div>
  );
}

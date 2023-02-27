import React from 'react';
import styles from './attention.module.scss';
import Title from '@/components/ui-kit/title/title';
import Button from '@/components/ui-kit/button/button';
import FadeContainer from '@/components/common/fade-container/fade-container';

export default function Attetion() {
  return (
    <section className={styles['attention']}>
      <FadeContainer>
        <Title className={styles['attention__title']}>
          Here you can put some text
        </Title>
      </FadeContainer>

      <FadeContainer>
        <Button variant="outline">Call To Action</Button>
      </FadeContainer>
    </section>
  );
}

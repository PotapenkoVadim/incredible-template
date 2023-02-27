import React from 'react';
import styles from './contact.module.scss';
import FadeContainer from '@/components/common/fade-container/fade-container';
import Title from '@/components/ui-kit/title/title';
import Subtitle from '@/components/ui-kit/subtitle/subtitle';
import Form from '@/components/common/form/form';

export default function Contact() {
  return (
    <section className={styles['contact']}>
      <FadeContainer>
        <Title>Contact Form</Title>
      </FadeContainer>

      <FadeContainer>
        <Subtitle>This is some text inside of a div block.</Subtitle>
      </FadeContainer>

      <FadeContainer>
        <Form className={styles['contact__form']} />
      </FadeContainer>
    </section>
  );
}

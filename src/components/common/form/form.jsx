import React from 'react';
import styles from './form.module.scss';
import FormField from '@/components/ui-kit/form/_field';
import FormTextarea from '@/components/ui-kit/form/_textarea';
import Button from '@/components/ui-kit/button/button';

export default function Form({ className }) {
  return (
    <form className={`${styles['form']} ${className ?? ''}`}>
      <div className={styles['form__fields']}>
        <FormField placeholder="Name" />
        <FormField placeholder="Email" />
      </div>

      <FormTextarea placeholder="Message" />
      <Button type="button" className={styles['form__button']}>
        Send
      </Button>
    </form>
  );
}

import React, { useRef, useState } from 'react';
import styles from './form.module.scss';

export default function FormTextarea({ placeholder }) {
  const textareaRef = useRef(null);

  const [value, setValue] = useState('');

  const focusToField = () => textareaRef.current.focus();
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div data-mouseattract="dark" className={styles['form__control']}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        className={`${styles['form__field']} ${styles['form__textarea']}`}
      ></textarea>

      <span
        onClick={focusToField}
        className={`${styles['form__label']} ${
          value ? styles['form__label_active'] : ''
        }`}
      >
        {placeholder}
      </span>
    </div>
  );
}

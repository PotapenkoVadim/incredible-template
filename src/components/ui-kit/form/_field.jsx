import React, { useRef, useState } from 'react';
import styles from './form.module.scss';

export default function FormField({ placeholder }) {
  const fieldRef = useRef(null);

  const [value, setValue] = useState('');

  const focusToField = () => fieldRef.current.focus();
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div className={styles['form__control']}>
      <input
        onChange={handleChange}
        ref={fieldRef}
        className={styles['form__field']}
        type="text"
        value={value}
      />

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

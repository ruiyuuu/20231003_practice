import React from 'react';
import { DatePicker } from 'antd';
import styles from './datepicker.module.scss'


export default function datepicker(){
  

  return (
    <DatePicker
      className={styles.datepicker}
      placeholder="YYYY-MM-DD"
    />
  );
}
import React from 'react';
import styles from './center.module.css';

export default function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.center}>
      {children}
    </div>
  );
}

import { useEffect, useState } from 'react';
import styles from './site-loader.module.css';

export function SiteLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.loader} data-hidden={hidden} aria-hidden>
      <div className={styles.logo}>
        <span className={styles.letter}>N</span>
        <span className={styles.bar} />
        <span className={styles.letter}>A</span>
      </div>
    </div>
  );
}

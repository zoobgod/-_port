import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Contact Nick Arkhipov.',
  });
};

export const Contact = () => {
  return (
    <div className={styles.page}>
      <Section className={styles.content} as="section">
        <p className={styles.kicker}>Contact</p>
        <h1 className={styles.title}>Direct Contacts</h1>
        <p className={styles.body}>Use email or phone for project and partnership inquiries.</p>
        <div className={styles.channels}>
          <a className={styles.channel} href="mailto:nickarkhipov.wv@gmail.com">
            <span className={styles.channelLabel}>Email</span>
            <span className={styles.channelValue}>nickarkhipov.wv@gmail.com</span>
          </a>
          <a className={styles.channel} href="tel:+16828628639">
            <span className={styles.channelLabel}>Phone</span>
            <span className={styles.channelValue}>+1-682-862-8639</span>
          </a>
        </div>
        <p className={styles.location}>Dallas, Texas</p>
      </Section>
      <Footer />
    </div>
  );
};

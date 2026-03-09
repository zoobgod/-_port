import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
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
        <h1 className={styles.title}>Open for projects.</h1>
        <p className={styles.body}>For campaign, branding, and marketing work.</p>
        <a className={styles.email} href="mailto:nickarkhipov.wv@gmail.com">
          nickarkhipov.wv@gmail.com
        </a>
        <a
          className={styles.email}
          href="https://t.me/nickwangann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram: @nickwangann
        </a>
        <p className={styles.note}>{config.name}</p>
      </Section>
      <Footer />
    </div>
  );
};

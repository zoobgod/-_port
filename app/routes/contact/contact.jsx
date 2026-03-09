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
        <a className={styles.email} href="mailto:hello@nickarkhipov.com">
          hello@nickarkhipov.com
        </a>
        <p className={styles.note}>{config.name}</p>
      </Section>
      <Footer />
    </div>
  );
};

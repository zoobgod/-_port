import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Contact Nick Arkhipov for fashion marketing and campaign collaborations.',
  });
};

export const Contact = () => {
  return (
    <div className={styles.page}>
      <Section className={styles.content} as="section">
        <p className={styles.kicker}>Contact</p>
        <h1 className={styles.title}>Open for selected collaborations.</h1>
        <p className={styles.body}>
          If you are building a fashion brand, launching a collection, or refining a campaign
          direction, I would be glad to talk.
        </p>
        <a className={styles.email} href="mailto:hello@nickarkhipov.com">
          hello@nickarkhipov.com
        </a>
        <p className={styles.note}>Portfolio owner: {config.name}</p>
      </Section>
      <Footer />
    </div>
  );
};

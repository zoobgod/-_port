import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { baseMeta } from '~/utils/meta';
import styles from './about.module.css';

export const meta = () => {
  return baseMeta({
    title: 'About',
    description: 'About Nick Arkhipov.',
  });
};

export const About = () => {
  return (
    <div className={styles.page}>
      <Section className={styles.content} as="section">
        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src="https://www.dropbox.com/scl/fi/wxkjcqo18h4dymwfew0qo/main.jpg?rlkey=my2dp54w0jzxp6ckkgz5voetf&st=jl3b3rej&raw=1"
            alt="Nick Arkhipov"
            loading="lazy"
          />
        </div>
        <div className={styles.bio}>
          <p className={styles.kicker}>About Me</p>
          <h1 className={styles.title}>Nick Arkhipov</h1>
          <p className={styles.text}>
            Born in Moscow, Russia in 1999, Nick is a 26-year-old fashion marketer.
          </p>
          <p className={styles.text}>
            He lived most of his life in Russia, then moved to the United States to pursue
            fashion, where he studied Fashion Marketing in Dallas, Texas.
          </p>
          <p className={styles.text}>
            His focus is fashion strategy, brand positioning, and colour-led storytelling for
            footwear and accessories.
          </p>
          <p className={styles.text}>
            Outside work, he is a jet skiing enthusiast and keeps close ties to fashion culture,
            trends, and visual direction.
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

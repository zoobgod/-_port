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
          <p className={styles.lead}>
            Emerging Fashion Merchandising Professional | Fashion Merchandising BBA Student |
            Visual Merchandising, Consumer Insight, Product Analysis & Trend Alignment
          </p>
          <p className={styles.text}>
            I am a senior Fashion Merchandising student at LIM College with hands-on experience in
            visual merchandising, styling, and inventory support at PFH Resale. I have developed a
            strong foundation in analyzing product data, identifying trend opportunities, and
            aligning merchandise with customer demand.
          </p>
          <p className={styles.text}>
            My technical proficiency in Adobe Creative Suite, Microsoft Excel, PowerBi, and PLM
            systems allows me to create concise reporting, organize assortments, and support
            merchandising workflow. I am motivated by the analytical side of corporate
            merchandising and how data informs product planning and buying decisions.
          </p>
          <p className={styles.text}>
            My goal is to contribute to a merchandising team where I can apply my analytical
            mindset, teamwork, and creative understanding of fashion to support brand growth.
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

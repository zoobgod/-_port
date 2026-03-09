import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { projects } from '~/data/projects';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export const links = () => [
  {
    rel: 'prefetch',
    href: '/draco/draco_wasm_wrapper.js',
    as: 'script',
    type: 'text/javascript',
    importance: 'low',
  },
  {
    rel: 'prefetch',
    href: '/draco/draco_decoder.wasm',
    as: 'fetch',
    type: 'application/wasm',
    importance: 'low',
  },
];

export const meta = () => {
  return baseMeta({
    title: 'Fashion Marketing Portfolio',
    description:
      'Portfolio website for Nick Arkhipov, a fashion marketer focused on brand storytelling, campaigns, and creative direction.',
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef, aboutRef, featuredRef];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setVisibleSections(prev => {
            if (prev.includes(entry.target.id)) return prev;
            return [...prev, entry.target.id];
          });
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach(section => {
      if (section.current) observer.observe(section.current);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className={styles.home}>
      <Section
        as="section"
        className={styles.hero}
        id="hero"
        ref={heroRef}
        data-visible={visibleSections.includes('hero')}
      >
        <Suspense>
          <DisplacementSphere />
        </Suspense>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{config.name.toUpperCase()}</p>
          <h1 className={styles.title}>Fashion Marketing with Clarity, Taste, and Impact.</h1>
          <p className={styles.description}>
            I help fashion brands shape stories, craft campaigns, and position ideas that move
            people.
          </p>
          <div className={styles.actions}>
            <RouterLink unstable_viewTransition prefetch="intent" className={styles.cta} to="/projects">
              View Projects
            </RouterLink>
            <RouterLink
              unstable_viewTransition
              prefetch="intent"
              className={styles.secondaryCta}
              to="/contact"
            >
              Contact
            </RouterLink>
          </div>
        </div>
      </Section>

      <Section
        as="section"
        className={styles.about}
        id="about"
        ref={aboutRef}
        data-visible={visibleSections.includes('about')}
      >
        <p className={styles.sectionLabel}>About</p>
        <h2 className={styles.sectionTitle}>Built for modern brands and long-term relevance.</h2>
        <p className={styles.aboutText}>
          From launch campaigns to ongoing brand systems, I combine cultural awareness with
          execution. The focus is always the same: make each touchpoint feel intentional.
        </p>
      </Section>

      <Section
        as="section"
        className={styles.featured}
        id="featured"
        ref={featuredRef}
        data-visible={visibleSections.includes('featured')}
      >
        <div className={styles.featuredHead}>
          <p className={styles.sectionLabel}>Featured</p>
          <RouterLink unstable_viewTransition prefetch="intent" className={styles.inlineLink} to="/projects">
            All projects
          </RouterLink>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map(project => (
            <RouterLink
              unstable_viewTransition
              prefetch="intent"
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={styles.card}
            >
              <p className={styles.cardMeta}>
                {project.category}
                <span>{project.year}</span>
              </p>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardBody}>{project.summary}</p>
              <p className={styles.cardStatus}>{project.status}</p>
            </RouterLink>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
};

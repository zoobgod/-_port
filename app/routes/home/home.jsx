import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { projects } from '~/data/projects';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Portfolio',
    description: 'Minimal portfolio website for Nick Arkhipov.',
  });
};

export const links = () => [];

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

  const featuredProjects = projects
    .filter(project => project.showInIndex !== false)
    .slice(0, 3);

  return (
    <div className={styles.home}>
      <Section
        as="section"
        className={styles.hero}
        id="hero"
        ref={heroRef}
        data-visible={visibleSections.includes('hero')}
      >
        <div className={styles.heroMedia} aria-hidden="true">
          <video
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={config.heroVideoUrl}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{config.heroSummary}</p>
          <h1 className={styles.title}>{config.name}</h1>
          <div className={styles.actions}>
            <RouterLink prefetch="intent" className={styles.cta} to="/projects">
              View Projects
            </RouterLink>
            <RouterLink
              prefetch="intent"
              className={styles.secondaryCta}
              to="/about"
            >
              About Me
            </RouterLink>
            <RouterLink
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
        <p className={styles.sectionLabel}>Profile</p>
        <h2 className={styles.sectionTitle}>Professional Background</h2>
        <p className={styles.aboutText}>
          Nick Arkhipov is a fashion marketer from Moscow, Russia. He was born in 1999 and
          studied Fashion Marketing in Dallas, Texas.
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
          <p className={styles.sectionLabel}>Project</p>
          <RouterLink prefetch="intent" className={styles.inlineLink} to="/projects">
            View all
          </RouterLink>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map(project => (
            <RouterLink
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

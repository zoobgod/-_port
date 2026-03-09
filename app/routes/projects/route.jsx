import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { projects } from '~/data/projects';
import styles from './projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects',
    description: 'Project index for Nick Arkhipov.',
  });
};

export default function ProjectsRoute() {
  const visibleProjects = projects.filter(project => project.showInIndex !== false);

  return (
    <div className={styles.page}>
      <Section className={styles.header} as="header">
        <p className={styles.kicker}>Projects</p>
        <h1 className={styles.title}>Current Focus</h1>
        <p className={styles.copy}>One active case study.</p>
      </Section>
      <Section className={styles.gridWrap} as="section">
        <div className={styles.grid}>
          {visibleProjects.map(project => (
            <RouterLink
              prefetch="intent"
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={styles.card}
            >
              <p className={styles.meta}>
                {project.category}
                <span>{project.year}</span>
              </p>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.summary}>{project.summary}</p>
              <p className={styles.status}>{project.status}</p>
            </RouterLink>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

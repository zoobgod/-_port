import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { baseMeta } from '~/utils/meta';
import { getProjectBySlug } from '~/data/projects';
import styles from './project-detail.module.css';

export async function loader({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    throw new Response(null, { status: 404, statusText: 'Not found' });
  }

  return json({ project });
}

export function meta({ data }) {
  const projectTitle = data?.project?.title ?? 'Project';

  return baseMeta({
    title: projectTitle,
    description: `${projectTitle} project page.`,
  });
}

export default function ProjectDetailRoute() {
  const { project } = useLoaderData();

  return (
    <div className={styles.page}>
      <Section as="article" className={styles.content}>
        <p className={styles.kicker}>
          {project.category}
          <span>{project.year}</span>
        </p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.metaLine}>
          {project.author} · {project.published} · {project.readTime} · {project.source}
        </p>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Need to Know</p>
          <p className={styles.placeholderBody}>{project.needToKnow}</p>
        </div>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Opportunity</p>
          <p className={styles.placeholderBody}>{project.opportunity}</p>
        </div>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Key Colours</p>
          <ul className={styles.list}>
            {project.keyColours.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Design Strategies</p>
          <ul className={styles.list}>
            {project.designStrategies.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Proof Points</p>
          <ul className={styles.list}>
            {project.proofPoints.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Status</p>
          <p className={styles.placeholderValue}>{project.status}</p>
          <p className={styles.placeholderBody}>Expanded report and visual boards are in progress.</p>
        </div>
        <RouterLink unstable_viewTransition prefetch="intent" className={styles.back} to="/projects">
          Back to Projects
        </RouterLink>
      </Section>
      <Footer />
    </div>
  );
}

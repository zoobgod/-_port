import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
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
    description: `Project placeholder page for ${projectTitle}. Full case study will be added soon.`,
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
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Case Study Status</p>
          <p className={styles.placeholderValue}>{project.status}</p>
          <p className={styles.placeholderBody}>
            Detailed narrative, media assets, and campaign outcomes will be published here.
          </p>
        </div>
        <RouterLink unstable_viewTransition prefetch="intent" className={styles.back} to="/projects">
          Back to Projects
        </RouterLink>
      </Section>
      <Footer />
    </div>
  );
}

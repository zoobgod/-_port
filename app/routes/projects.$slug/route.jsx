import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { baseMeta } from '~/utils/meta';
import { getProjectBySlug, projects } from '~/data/projects';
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
  const relatedProjects = projects
    .filter(item => item.slug !== project.slug)
    .slice(0, 2);
  const keyColours = project.keyColours ?? [];
  const designStrategies = project.designStrategies ?? [];
  const proofPoints = project.proofPoints ?? [];
  const showMetaLine =
    project.author && project.published && project.readTime && project.source;

  return (
    <div className={styles.page}>
      <Section as="article" className={styles.content}>
        <p className={styles.kicker}>
          {project.category}
          <span>{project.year}</span>
        </p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
        {showMetaLine && (
          <p className={styles.metaLine}>
            {project.author} · {project.published} · {project.readTime} · {project.source}
          </p>
        )}
        {!!project.needToKnow && (
          <div className={styles.placeholder}>
            <p className={styles.placeholderLabel}>Need to Know</p>
            <p className={styles.placeholderBody}>{project.needToKnow}</p>
          </div>
        )}
        {!!project.opportunity && (
          <div className={styles.placeholder}>
            <p className={styles.placeholderLabel}>Opportunity</p>
            <p className={styles.placeholderBody}>{project.opportunity}</p>
          </div>
        )}
        {!!keyColours.length && (
          <div className={styles.placeholder}>
            <p className={styles.placeholderLabel}>Key Colours</p>
            <ul className={styles.list}>
              {keyColours.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {!!designStrategies.length && (
          <div className={styles.placeholder}>
            <p className={styles.placeholderLabel}>Design Strategies</p>
            <ul className={styles.list}>
              {designStrategies.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {!!proofPoints.length && (
          <div className={styles.placeholder}>
            <p className={styles.placeholderLabel}>Proof Points</p>
            <ul className={styles.list}>
              {proofPoints.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles.placeholder}>
          <p className={styles.placeholderLabel}>Status</p>
          <p className={styles.placeholderValue}>{project.status}</p>
          <p className={styles.placeholderBody}>
            {project.showInIndex === false
              ? 'More information will be added.'
              : 'Expanded report and visual boards are in progress.'}
          </p>
        </div>
        {!!relatedProjects.length && (
          <div className={styles.related}>
            <p className={styles.placeholderLabel}>Suggested Projects</p>
            <div className={styles.relatedGrid}>
              {relatedProjects.map(item => (
                <RouterLink
                  key={item.slug}
                  prefetch="intent"
                  className={styles.relatedCard}
                  to={`/projects/${item.slug}`}
                >
                  <p className={styles.relatedMeta}>
                    {item.category}
                    <span>{item.year}</span>
                  </p>
                  <h2 className={styles.relatedTitle}>{item.title}</h2>
                  <p className={styles.relatedSummary}>{item.summary}</p>
                  <p className={styles.relatedStatus}>{item.status}</p>
                </RouterLink>
              ))}
            </div>
          </div>
        )}
        <RouterLink prefetch="intent" className={styles.back} to="/projects">
          Back to Projects
        </RouterLink>
      </Section>
      <Footer />
    </div>
  );
}

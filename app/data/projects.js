export const projects = [
  {
    slug: 'runway-pulse',
    title: 'Runway Pulse',
    category: 'Campaign Strategy',
    year: '2026',
    status: 'To be added',
    summary:
      'A cross-channel campaign framework for seasonal fashion launches and audience growth.',
  },
  {
    slug: 'atelier-notes',
    title: 'Atelier Notes',
    category: 'Editorial Direction',
    year: '2026',
    status: 'To be added',
    summary:
      'A storytelling format for brand editorials that connects product drops with culture.',
  },
  {
    slug: 'street-signal',
    title: 'Street Signal',
    category: 'Trend Research',
    year: '2026',
    status: 'To be added',
    summary:
      'An insights engine to capture style movements, consumer sentiment, and timing opportunities.',
  },
  {
    slug: 'house-index',
    title: 'House Index',
    category: 'Brand Positioning',
    year: '2026',
    status: 'To be added',
    summary:
      'A brand intelligence playbook to map differentiation, voice, and collaboration strategy.',
  },
];

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

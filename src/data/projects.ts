export type Project = {
  title: string;
  type: string;
  description: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'Waymarked Trails Explorer',
    type: 'iOS route app',
    description: 'Kaartlagen, routehiërarchie, etappes, detailweergave en een snelle tap-flow op de kaart.',
    accent: 'route',
  },
  {
    title: 'Map Poster Builder',
    type: 'Design tool',
    description: 'Thema’s, GPX-routes, export en posterwaardige kaartstijlen voor print en social.',
    accent: 'poster',
  },
  {
    title: 'Père-Lachaise Guide',
    type: 'iOS travel guide',
    description: 'Een compacte gids met kaart, route, biografieën, Wikimedia-afbeeldingen en detailpagina’s.',
    accent: 'guide',
  },
];

export const processSteps = [
  ['01', 'Concept', 'Doel, publiek, kernscherm en publicatiepad scherp maken.'],
  ['02', 'Prototype', 'Werkende eerste versie met echte data en een duidelijke route door de interface.'],
  ['03', 'Polish', 'Typografie, spacing, motion, responsive gedrag en performance verbeteren.'],
  ['04', 'Publish', 'GitHub Pages, Vercel, TestFlight of App Store klaarzetten.'],
] as const;

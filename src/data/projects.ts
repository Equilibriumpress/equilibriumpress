export type Project = {
  title: string;
  type: string;
  description: string;
  accent: string;
  image?: string;
  metrics?: string[];
};

export const projects: Project[] = [
  {
    title: 'Waymarked Trails Explorer',
    type: 'iOS route app',
    description: 'Een interactieve route-app met Europese wandel- en fietsroutes, kaartlagen, zoekflow, favorieten en detailpagina’s voor routes en etappes.',
    accent: 'route',
    image: '/equilibriumpress/projects/waymarked-trails-map.PNG',
    metrics: ['Apple Maps + OSM', 'Route layers', 'iOS'],
  },
  {
    title: 'Map Poster Builder',
    type: 'Design tool',
    description: 'Kaartposters met thema’s, GPX-routes, export en posterwaardige kaartstijlen voor print en social.',
    accent: 'poster',
    metrics: ['GPX', 'SVG export', 'Print'],
  },
  {
    title: 'Père-Lachaise Guide',
    type: 'iOS travel guide',
    description: 'Een compacte gids met kaart, route, biografieën, Wikimedia-afbeeldingen en detailpagina’s.',
    accent: 'guide',
    metrics: ['Wikimedia', 'Map guide', 'Audio'],
  },
];

export const processSteps = [
  ['01', 'Concept', 'Doel, publiek, kernscherm en publicatiepad scherp maken.'],
  ['02', 'Prototype', 'Werkende eerste versie met echte data en een duidelijke route door de interface.'],
  ['03', 'Polish', 'Typografie, spacing, motion, responsive gedrag en performance verbeteren.'],
  ['04', 'Publish', 'GitHub Pages, Vercel, TestFlight of App Store klaarzetten.'],
] as const;

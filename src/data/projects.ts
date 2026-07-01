export type Project = {
  title: string;
  type: string;
  description: string;
  accent: string;
  image?: string;
  metrics?: string[];
  status?: string;
};

export const projects: Project[] = [
  {
    title: 'Waymarked Trails Explorer',
    type: 'iOS route app',
    description: 'Een route-app voor wandel- en fietsroutes met kaartlagen, zoekflow, favorieten en detailpagina’s voor routes en etappes.',
    accent: 'route',
    image: '/equilibriumpress/projects/waymarked-trails-map.PNG',
    metrics: ['iOS', 'Apple Maps', 'OSM', '2026'],
    status: 'In development',
  },
  {
    title: 'Map Poster Builder',
    type: 'Design tool',
    description: 'Een app om kaartposters te maken met thema’s, GPX-routes, export en posterwaardige stijlen voor print en social.',
    accent: 'poster',
    metrics: ['Maps', 'GPX', 'Export', 'Design'],
    status: 'Prototype',
  },
  {
    title: 'Père-Lachaise Guide',
    type: 'Travel guide',
    description: 'Een compacte iOS-gids met kaart, route, biografieën, Wikimedia-afbeeldingen en detailpagina’s.',
    accent: 'guide',
    metrics: ['iOS', 'Wikimedia', 'Guide', 'Audio'],
    status: 'TestFlight',
  },
];

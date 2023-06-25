export const BASE_URL = 'https://orbitgrowth.de';

import { Project, TeamMember } from './types';

import TravelExplorerHeader from '../../public/projects/travel-explorer/SomeImage.png';

export const PROJECTS: Project[] = [
  {
    date: 'Januar 2023',
    title: 'Travel Explorer Website Redesign',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, reprehenderit in? Eligendi eaque ex nobis provident, iusto, sint eos quasi officia ipsam voluptate fugit nihil commodi. Dicta, perspiciatis! Numquam, mollitia.',
    id: 'travel-explorer',
    company: 'Konzept Projekt',
    url: null,
    headerImage: TravelExplorerHeader,
    thumbnailImage: TravelExplorerHeader,
  },
];

import ChrisPB from '../../public/people/Chris.jpg';
import PaulPB from '../../public/people/Paul.jpg';

const TEAM: TeamMember[] = [
  {
    email: 'p.kosche@orbitgrowth.de',
    imageSrc: PaulPB,
    name: 'Paul Kosche',
    position: 'Kundenbetreuung, Projektleitung',
  },
  {
    email: 'c.langer@orbitgrowth.de',
    imageSrc: ChrisPB,
    name: 'Christoph Langer',
    position: 'Design, Frontendentwicklung',
  },
];

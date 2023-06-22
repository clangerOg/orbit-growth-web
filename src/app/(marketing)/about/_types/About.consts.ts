import ChrisPB from '../../../../../public/people/Chris.jpg';
import PaulPB from '../../../../../public/people/Paul.jpg';
import { TeamMember } from './TeamMember.types';

export const TEAM: TeamMember[] = [
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

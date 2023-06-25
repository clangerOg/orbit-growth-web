import { Project, TeamMember } from '@/types';
import ChrisPB from '../../public/people/Chris.jpg';
import PaulPB from '../../public/people/Paul.jpg';
import TravelExplorerHeader from '../../public/projects/travel-explorer/SomeImage.png';

const teamMembers: TeamMember[] = [
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

const projects: Project[] = [
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

export const itemsConfig = {
  skillItems: [
    {
      title: 'Pixelperfect Design.',
      description:
        'Als junges Team sind wir in der Lage, frische und kreative Ideen zu entwicklen, die sich von der Masse abheben und auf deine Bedürfnisse maßgeschneidert sind.',
      className: 'col-span-1 md:col-span-2 lg:col-span-1',
    },
    {
      title: 'High-End-Webentwicklung.',
      description:
        ' Wir setzen auf moderne Webtechnologien, wie Webflow, mit denen wir sicherstellen können, dass du immer eine technisch einwandfreie und optimierte Webseite erhalten wirst.',
      className: '',
    },
    {
      title: 'Faire Preise.',
      description:
        'Wir glauben, dass jedes Unternehmen Zugang zu einer einwandfreien Webseite haben und dass Kosten keine Blockade sein sollten.',
      className: '',
    },
  ],
  processItems: [
    {
      title: 'Kostenlose Erstberatung.',
      description:
        'Wir beginnen mit einem persönlichen Gespräch, um deine Anforderungen, Ziele und Vorstellungen zu verstehen.',
    },
    {
      title: 'Konzeptentwicklung.',
      description:
        'Unser Team erstellt ein maßgeschneidertes Konzept für deine Website, das deine Marke und Zielgruppe berücksichtigt.',
    },
    {
      title: 'Designphase.',
      description:
        'Wir gestalten ein ansprechendes und benutzerfreundliches Design, das deine Markenidentität widerspiegelt und eine positive Nutzererfahrung bietet.',
    },
    {
      title: 'Entwicklung und Umsetzung.',
      description:
        'Unsere erfahrenen Entwickler setzen das Design in eine funktionierende Website um und integrieren erforderliche Funktionen und Inhalte.',
    },
    {
      title: 'Feinabstimmung und Optimierung.',
      description:
        'Wir nehmen deine Anmerkungen und Anpassungswünsche entgegen und optimieren die Website für ein optimales Ergebnis.',
    },
    {
      title: 'Ongoing Support.',
      description:
        'Wir bieten dir kontinuierlichen Support und stehen dir auch nach dem Launch mit Updates, Wartung und technischem Support zur Seite.',
    },
  ],
  teamMembers: teamMembers,
  projects: projects,
};

export type ItemsConfig = typeof itemsConfig;

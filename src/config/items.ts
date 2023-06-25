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

const faqs: { question: string; answer: string }[] = [
  {
    question:
      'Welche Art von Unternehmen können von Ihrer Webdesign-Agentur profitieren?',
    answer:
      'Unsere Webdesign-Agentur ist darauf spezialisiert, Webseiten für lokale Unternehmen zu erstellen. Egal ob Restaurants, Einzelhändler, Dienstleister oder andere lokale Unternehmen - wir helfen Ihnen gerne dabei, eine herausragende Online-Präsenz aufzubauen.',
  },
  {
    question:
      'Welche Informationen benötigen Sie von mir, um mit der Erstellung meiner Webseite zu beginnen?',
    answer:
      'Um mit der Erstellung Ihrer Webseite zu beginnen, benötigen wir grundlegende Informationen über Ihr Unternehmen, wie z.B. Ihr Logo, Ihre Farbpräferenzen, den gewünschten Umfang der Webseite und den Inhalt, den Sie bereitstellen möchten. Je mehr Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihre Anforderungen erfüllen.',
  },
  {
    question:
      'Können Sie auch ein Logo oder Grafiken für meine Webseite entwerfen?',
    answer:
      'Ja, wir bieten auch Logo-Design und Grafikdesign-Services an. Unsere talentierten Designer können ein einzigartiges und professionelles Logo für Ihr Unternehmen erstellen und bei Bedarf auch andere Grafiken für Ihre Webseite gestalten.',
  },
  {
    question:
      'Bieten Sie auch Suchmaschinenoptimierung (SEO) für Webseiten an?',
    answer:
      'Ja, wir legen großen Wert auf eine suchmaschinenoptimierte Webseitenentwicklung. Wir optimieren Ihre Webseite für Suchmaschinen, indem wir relevante Keywords, gut strukturierten Code und andere bewährte SEO-Praktiken verwenden. Dadurch wird Ihre Webseite besser in den Suchergebnissen sichtbar und kann mehr potenzielle Kunden erreichen.',
  },
  {
    question:
      'Kann ich meine Webseite nach der Fertigstellung selbst aktualisieren?',
    answer:
      'Ja, wir können Ihre Webseite so konfigurieren, dass Sie sie nach der Fertigstellung selbst aktualisieren können. Wir verwenden intuitive Content-Management-Systeme (CMS), die es Ihnen ermöglichen, Inhalte, Bilder und andere Elemente Ihrer Webseite ohne Programmierkenntnisse zu bearbeiten und zu aktualisieren.',
  },
  {
    question: 'Bieten Sie auch Webhosting und Domain-Registrierung an?',
    answer:
      'Wir bieten keine Webhosting- oder Domain-Registrierungsdienste direkt an. Allerdings können wir Ihnen bei der Auswahl eines zuverlässigen Webhosting-Unternehmens und bei der Registrierung Ihrer Domain helfen. Wir beraten Sie gerne zu den besten Optionen, die Ihren Anforderungen entsprechen.',
  },
  {
    question:
      'Was passiert, wenn ich mit dem Design meiner Webseite nicht zufrieden bin?',
    answer:
      'Unser Ziel ist es, sicherzustellen, dass Sie mit dem Design Ihrer Webseite vollständig zufrieden sind. Wir arbeiten eng mit Ihnen zusammen und berücksichtigen Ihr Feedback während des gesamten Entwicklungsprozesses. Falls Sie dennoch mit dem Design nicht zufrieden sind, werden wir unser Bestes tun, um Anpassungen vorzunehmen und sicherzustellen, dass Ihre Vision umgesetzt wird.',
  },
  {
    question: 'Wie lange dauert es, bis meine Webseite online geht?',
    answer:
      'Die Zeit, die benötigt wird, um Ihre Webseite online zu bringen, hängt von verschiedenen Faktoren ab, einschließlich des Umfangs des Projekts und der Zusammenarbeit bei der Bereitstellung von Inhalten und Feedback. Wir bemühen uns jedoch, den Prozess effizient zu gestalten und Ihre Webseite so schnell wie möglich online zu stellen, ohne die Qualität zu beeinträchtigen.',
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
  faqs: faqs,
};

export type ItemsConfig = typeof itemsConfig;

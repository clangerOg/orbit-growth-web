import React, { ReactElement } from 'react';
import TravelExplorer from '../../p/travel-explorer.mdx';

type Project = {
  title: string;
  desc: string;
  id: string;
  content: ReactElement<any, any>;
};

const projects: Project[] = [
  {
    title: 'Travel Explorer Website Redesign',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia temporibus id dolore doloribus reiciendis debitis fuga officia eius? Voluptates hic dolore illum nobis, placeat non blanditiis! Atque obcaecati odit tempora.',
    id: '',
    content: <TravelExplorer />,
  },
];

const ProjectSwitch: React.FC = () => {
  return <div>{projects[0].content}</div>;
};

export default ProjectSwitch;

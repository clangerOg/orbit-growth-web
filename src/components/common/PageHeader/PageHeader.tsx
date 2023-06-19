import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Section, Typography } from '..';
import HeaderBG from '../../../../public/Header.png';
import { PageHeaderProps } from './PageHeader.types';

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, desc, className, ...other } = props;

  return (
    <Section
      {...other}
      className={classNames(
        'bg-slate-900 border-b border-slate-200',
        className
      )}
    >
      <Image src={HeaderBG} alt="" fill className="object-cover object-right" />
      <Section.Wrapper className="py-24">
        <Section.Content className="relative z-20">
          <Typography variant={'h1'} className="text-white">
            {title}
          </Typography>
          <Typography variant={'h2'} className="mt-6 text-slate-300">
            {desc}
          </Typography>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default PageHeader;

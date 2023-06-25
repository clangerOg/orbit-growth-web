import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import BackgroundImage from '../../public/images/header-background.png';
import { Typography } from './common';
import { Container } from './container';
import { Shell } from './shell';

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { title: string; desc?: string };

export const Header: React.FC<HeaderProps> = (props) => {
  const { title, desc, className, ...other } = props;

  return (
    <Shell {...other} className={cn('bg-slate-900', className)}>
      <Image
        src={BackgroundImage}
        alt="Background Image for Page Header"
        fill
        className="object-cover object-right"
      />
      <Container className="py-24">
        <Typography variant={'h1'} className="text-white">
          {title}
        </Typography>
        <Typography variant={'h2'} className="mt-6 text-slate-300">
          {desc}
        </Typography>
      </Container>
    </Shell>
  );
};

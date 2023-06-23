import Image from 'next/image';
import React from 'react';
import BackgroundImage from '../../public/images/header-background.png';
import { Typography } from './common';
import Container from './container';
import Shell from './shell';

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { title: string; desc?: string };

export default async function Header(props: HeaderProps) {
  const { title, desc, className, ...other } = props;

  return (
    <Shell {...other}>
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
}

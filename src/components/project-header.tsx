import { cn } from '@/lib/utils';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Typography, buttonVariants } from './common';
import { Container } from './container';
import { Shell } from './shell';

type ProjectHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { project: Project };

export const ProjectHeader: React.FC<ProjectHeaderProps> = (props) => {
  const { className, project, ...other } = props;
  const { company, date, headerImage, url, desc, title } = project;

  return (
    <Shell {...other} className={cn(className)}>
      <div className="w-full border-y overflow-hidden border-slate-200 bg-slate-100">
        <Container>
          <Image
            src={headerImage}
            alt="Main Image for Travel Explorer"
            className="border-x border-inherit"
          />
        </Container>
      </div>
      <Container className="grid grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4 mb-24">
        <div className="border-l border-b border-inherit p-6 lg:p-8">
          <p className="text-sm font-bold text-slate-900">Date</p>
          <p className="mt-1 text-sm text-slate-500">{date}</p>
        </div>
        <div className="!border-r p-6 lg:!border-r-0 lg:p-8 border-b">
          <p className="text-sm font-bold text-slate-900">URL</p>
          {url ? (
            <Link href={url}>
              <p className="mt-1 text-sm text-slate-500">{url}</p>
            </Link>
          ) : (
            <>
              <p className="mt-1 text-sm text-slate-500">
                Nicht veröffentlicht
              </p>
            </>
          )}
        </div>
        <div className="border-b border-inherit p-6 lg:p-8">
          <p className="text-sm font-bold text-slate-900">Unternehmen</p>
          <p className="mt-1 text-sm text-slate-500">{company}</p>
        </div>
        <div className="flex items-center justify-center !border-r border-b border-inherit p-4 lg:p-8">
          {url ? (
            <Button variant={'default'} href={url || '#'}>
              Seite aufrufen
            </Button>
          ) : (
            <button
              className={buttonVariants({
                variant: 'default',
                className:
                  'disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-slate-900',
              })}
              disabled
            >
              Seite aufrufen
            </button>
          )}
        </div>
      </Container>
      <Container>
        <Typography variant={'h1'}>{title}</Typography>
        <Typography variant={'h2'} className="mt-6">
          {desc}
        </Typography>
      </Container>
    </Shell>
  );
};

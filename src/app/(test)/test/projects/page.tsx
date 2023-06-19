import { PageHeader, Section } from '@/components/common';
import Link from 'next/link';

type Project = {
  date: string;
  title: string;
  desc: string;
  path: string;
};

const projects: Project[] = [
  {
    date: 'Januar 2023',
    title: 'Travel Explorer Website Redesign',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, reprehenderit in? Eligendi eaque ex nobis provident, iusto, sint eos quasi officia ipsam voluptate fugit nihil commodi. Dicta, perspiciatis! Numquam, mollitia.',
    path: '/sdf',
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Projekte"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus ab corrupti doloribus, nihil officia dolorum quasi,"
      />
      {/* <Section className="antialiased border-b border-slate-200/90 border-dashed">
       */}
      <Section>
        {/* <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit"> */}
        <Section.Wrapper className="py-52">
          <Section.Content>
            <ol className="relative border-l border-slate-200">
              {projects.map((p, index) => {
                return (
                  <li className="mb-20 ml-4 last:mb-0" key={`${index}`}>
                    <Link href={'#'} className="group ">
                      <div>
                        <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-slate-400 ">
                          {p.date}
                        </time>
                        <h3 className="text-lg font-semibold text-slate-900 ">
                          {p.title}
                        </h3>
                        <p className="mb-4 text-base font-normal text-slate-500 ">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
}

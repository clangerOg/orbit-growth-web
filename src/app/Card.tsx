'use client';

import { Typography } from '@/components/common';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SkillsBrowserWindow from '../../public/landing/Skills_Design_Browser.png';

const Card: React.FC = () => {
  const [coords, setCoords] = useState<string>('0 | 0');

  const divRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (ev: any) => {
    setCoords(`${ev.clientX} | ${ev.clientY}`);
    console.log(ev.clientX, '|', ev.clientY);

    const x = ev.clientX;
    const y = ev.clientY;
    const constrain = 400;

    if (divRef.current != null) {
      const box = divRef.current.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;

      const card = document.getElementById('custom-card');

      if (card != null) {
        card.style.transform = `
        perspective(100px) 
        rotateX(${calcX}deg) 
        rotateY(${calcY}deg)`;
      }
    }
  };

  const onMouseOut = () => {
    const card = document.getElementById('custom-card');

    if (card != null) {
      card.style.transform = `
      perspective(100px) 
      rotateX(0deg) 
      rotateY(0deg)`;
    }
  };

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  return (
    <div
      ref={divRef}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      id="custom-card"
      className="relative row-span-1 cursor-default overflow-hidden rounded-lg border border-slate-200 bg-white p-8 pb-52 shadow-lg transition-transform duration-75 md:row-span-2 md:pb-0"
    >
      <div className="absolute bottom-0 right-0 z-20 h-1/2 w-3/4">
        <div className="relative z-20 h-full w-full">
          <Image
            fill
            src={SkillsBrowserWindow}
            alt="Example Design made by Orbitgrowth.de"
            className=" z-20 h-full w-full rounded-tl-lg border-l border-t border-slate-200 object-cover object-left-top shadow-lg"
          />
        </div>
      </div>
      <p id="demo"></p>
      <Typography>
        <span className="font-semibold text-slate-900">
          Pixelperfect Design.
        </span>{' '}
        Als junges Team sind wir in der Lage, frische und kreative Ideen zu
        entwicklen, die sich von der Masse abheben und auf deine Bedürfnisse
        maßgeschneidert sind.
      </Typography>
    </div>
  );
};

export default Card;

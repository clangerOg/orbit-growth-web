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
      className="transition-transform duration-75 cursor-default row-span-1 md:row-span-2 bg-white border border-slate-200 rounded-lg p-8 shadow-lg overflow-hidden relative pb-52 md:pb-0"
    >
      <div className="absolute w-3/4 h-1/2 bottom-0 right-0 z-20">
        <div className="relative z-20 w-full h-full">
          <Image
            fill
            src={SkillsBrowserWindow}
            alt="Example Design made by Orbitgrowth.de"
            className=" w-full h-full object-left-top object-cover z-20 shadow-lg border-l border-t border-slate-200 rounded-tl-lg"
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

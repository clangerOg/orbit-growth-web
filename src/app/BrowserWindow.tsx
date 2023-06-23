'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useEffect } from 'react';
import PreviewImage from '../../public/landing/Hero_Design_Preview.png';
import styles from './BrowserWindow.module.css';

const DEFAULT_ROTATION = 30;

const BrowserWindow: React.FC = () => {
  const onScroll = () => {
    console.log(window.scrollY);

    const rotation = DEFAULT_ROTATION - window.scrollY / 20;
    console.log('rotation: ', rotation);
    setRotation(Math.max(rotation, 0));
    // document.documentElement.style.setProperty(
    //   '--prev-rotate-x',
    //   `${DEFAULT_ROTATION - window.scrollY / 20}deg`
    // );
  };

  const setRotation = (degree: number) => {
    document.documentElement.style.setProperty(
      '--prev-rotate-x',
      `${degree}deg`
    );
  };

  useEffect(() => {
    setRotation(DEFAULT_ROTATION);
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={classNames(
        'aspect-video w-full max-w-full rounded-lg bg-slate-300 shadow-lg',
        styles.browserPreview
      )}
    >
      <Image src={PreviewImage} alt="" className=" rounded-lg" />
    </div>
  );
};

BrowserWindow.displayName = 'BrowserWindow';

export default BrowserWindow;

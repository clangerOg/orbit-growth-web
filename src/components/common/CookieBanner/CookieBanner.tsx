'use client';

// components/cookiebanner.tsx
import { useEffect, useState } from 'react';
import { buttonVariants } from '../Button';

const CookieBanner: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    // const storedCookieConsent = getLocalStorage('cookie_consent', null);
    // if (storedCookieConsent == null) {
    //   setLocalStorage('cookie_consent', false);
    // }
  });

  useEffect(() => {
    // window.gtag('consent', 'update', {
    //   analytics_storage: cookieConsent ? 'granted' : 'denied',
    // });
    // console.log('consent changed ', cookieConsent);
  }, [cookieConsent]);

  useEffect(() => {
    // const storedCookieConsent = getLocalStorage('cookie_consent', false);
    // console.log('storedCookieConsent', storedCookieConsent);
    // window.gtag('consent', 'update', {
    //   analytics_storage: storedCookieConsent ? 'granted' : 'denied',
    // });
    // setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  //   useEffect(() => {
  //     const newValue = cookieConsent ? 'granted' : 'denied';

  //     window.gtag('consent', 'update', {
  //       analytics_storage: newValue,
  //     });

  //     setLocalStorage('cookie_consent', cookieConsent);

  //     //For Testing
  //     console.log('Cookie Consent: ', cookieConsent);
  //   }, [cookieConsent]);

  const allowCookies = () => {
    // setLocalStorage('cookie_consent', true);
    // setCookieConsent(true);
  };

  const denieCookies = () => {
    // setLocalStorage('cookie_consent', false);
    // setCookieConsent(false);
    // document.cookie = 'peter=false';
  };

  return (
    <div className="fixed w-full left-0 right-0 z-50 bg-transparent flex justify-center items-center bottom-14 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl left-20 right-20 w-full border border-slate-200 flex gap-8 items-center justify-between">
        <p>Accept all cookies?</p>
        <div className=" flex flex-wrap gap-6">
          <button
            className={buttonVariants({ variant: 'default', size: 'sm' })}
            onClick={allowCookies}
          >
            Accept
          </button>
          <button
            className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            onClick={denieCookies}
          >
            Decline Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

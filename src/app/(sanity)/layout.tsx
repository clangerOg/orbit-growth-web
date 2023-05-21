import React from 'react';

import './globals.css';

export const metadata = {
  title: 'Orbit Growth Studio',
  description: 'Sanity CMS Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

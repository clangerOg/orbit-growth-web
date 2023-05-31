import { Imprint, PrivacyPolicy } from '@/components/legal';
import { Metadata } from 'next';

// store values to prevent redundancies
const title = 'Rechtliches';
const description =
  'Rechtliche Informationen wie unser Impressum und Datenschutzvereinbarung.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function LegalPage() {
  return (
    <>
      {/* Imprint */}
      <Imprint />

      {/* Privacy Policy */}
      <PrivacyPolicy />
    </>
  );
}

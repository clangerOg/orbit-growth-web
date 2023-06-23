import { ContactPersonSection, FormSection } from '@/components/contact';
import { Metadata } from 'next';

// store values to prevent redundancies
const title = 'Kontak';
const description =
  'Trete in Kotakt mit uns, um noch heute die ersten Schritte in Richtung einer neuen Webseite einzuleiten.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default async function Page() {
  return (
    <>
      <FormSection />

      <ContactPersonSection />
    </>
  );
}

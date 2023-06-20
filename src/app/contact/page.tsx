import { Metadata } from 'next';
import { ContactForm, Headings } from './_components';

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
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Wrapper */}
        <Headings />
        {/* Right Side Wrapper */}
        <div
          id="contact-form"
          className="flex justify-start items-start py-32 md:py-40 xl:py-52 border-b border-slate-200"
        >
          {/* Right Side */}
          <div className="md:max-w-xl w-full px-6 lg:pl-24 flex items-center justify-center md:block">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

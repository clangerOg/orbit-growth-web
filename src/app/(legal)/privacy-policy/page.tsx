import { PageHeader } from '@/components/common';
import { PrivacyPolicy } from '@/components/legal';

export default async function Page() {
  return (
    <>
      <PageHeader title="Datenschutzerklärung" desc="" />

      <PrivacyPolicy />
    </>
  );
}

import { PageHeader } from '@/components/common';
import { Imprint } from '@/components/legal';

export default async function Page() {
  return (
    <>
      <PageHeader title="Impressum" desc="" />

      <Imprint />
    </>
  );
}

export default function TestPage() {
  return (
    <div className="px-36 py-56">
      <div className="flex flex-col gap-16">
        <h1 className="sm:text-6xl sm:leading-none text-4xl leading-10 text-neutral-900 font-bold tracking-tight">
          Headline 1
        </h1>
        <h2 className="text-lg leading-8 text-neutral-600 max-w-2xl">
          Headline 2
        </h2>
        <h3 className="sm:text-4xl text-3xl text-neutral-900 font-bold tracking-tight">
          Headline 3
        </h3>
        <h4 className="text-lg leading-8 text-neutral-600 max-w-2xl">
          Headline 4
        </h4>
        {/* Header link */}
        <p className="leading-6 font-semibold text-sm text-neutral-900">
          Header Link
        </p>
        {/* Paragraph */}
        <p className="leading-7 font-normal text-neutral-700 text-base">
          This is a paragraph
        </p>
        {/* Overline */}
        <p className="leading-7 font-semibold text-blue-600 text-base">
          Overline
        </p>
      </div>
    </div>
  );
}

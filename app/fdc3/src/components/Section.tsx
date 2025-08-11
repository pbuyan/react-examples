import React from 'react';
const Section: React.FC<
  React.PropsWithChildren<{ id?: string; title: string; subtitle?: string }>
> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="mx-auto my-10 max-w-5xl px-4">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
};
export default Section;

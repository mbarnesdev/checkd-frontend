import type { ReactNode } from 'react';

interface IPaneWrapperProps {
  name: string;
  children: ReactNode;
}

function PaneWrapper({ name, children }: IPaneWrapperProps) {
  return (
    <div className="flex flex-col justify-start">
      <div className="grid place-items-center py-4 text-white">
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>
      {children}
    </div>
  );
}

export default PaneWrapper;

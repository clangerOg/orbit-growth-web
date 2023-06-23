import React, { PropsWithChildren, createContext, useContext } from 'react';

type SectionContextProps = {};

const SectionContext = createContext<SectionContextProps>({});

type SectionContextProviderProps = PropsWithChildren & SectionContextProps;

const SectionContextProvider: React.FC<SectionContextProviderProps> = ({
  children,
}) => {
  return (
    <SectionContext.Provider value={{}}>{children}</SectionContext.Provider>
  );
};

const useSectionContext = (): SectionContextProps => {
  const context = useContext(SectionContext);

  if (context == null) {
    throw new Error(
      'StepperContext can only be used within a Section component.'
    );
  }

  return context;
};

export { SectionContextProvider, useSectionContext };

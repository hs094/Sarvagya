import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Define a custom render function that includes providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        {children}
      </>
    );
  };
  
  return render(ui, { wrapper: AllProviders, ...options });
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override render method
export { customRender as render };

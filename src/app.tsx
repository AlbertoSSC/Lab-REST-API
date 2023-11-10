import React from 'react';

import { ThemeProviderComponent, RouterComponent } from 'core';
import { SearchCharacterProvider } from 'pods';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <SearchCharacterProvider>
        <App />
      </SearchCharacterProvider>
    </ThemeProviderComponent>
  );
};

export default AppProviders;
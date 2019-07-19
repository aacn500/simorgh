import React from 'react';
import Loadable from 'react-loadable';

const createLoadableContext = (
  Context: React.Context<Service>,
  loadableConfig: LoadableConfig,
) =>
  Loadable({
    ...loadableConfig,
    loading: () => null,
    render(loaded, { children }) {
      return (
        <Context.Provider value={loaded.default}>{children}</Context.Provider>
      );
    },
  });

export default createLoadableContext;

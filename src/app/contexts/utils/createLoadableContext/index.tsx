import React from 'react';
import Loadable from 'react-loadable';

import { Service } from '../../ServiceContext';

import { LoadableConfig } from '../../../lib/config/services/loadableConfig';

const createLoadableContext = (Context: React.Context<Service>, loadableConfig: LoadableConfig) =>
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

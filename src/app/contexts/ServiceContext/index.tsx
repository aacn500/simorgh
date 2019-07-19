import React from 'react';
import services from '../../lib/config/services/loadableConfig';
import defaultService from '../../lib/config/services/default';
import createLoadableContext from '../utils/createLoadableContext';

/* Create ServiceContext using the default service */
export const ServiceContext = React.createContext<Service>(defaultService);

type Loadableish =
  // LoadableExport is the namespace for ReactLoadable. Why? I have no idea.
  | (React.FunctionComponent<unknown> & LoadableExport.LoadableComponent)
  | (React.ComponentClass<unknown, any> & LoadableExport.LoadableComponent);

interface LoadableContextStore {
  [serviceName: string]: Loadableish;
}

/*
 *
 * It's important that we declare all the loadableContexts when modules
 * are initialized rather than when the app is being rendered.
 *
 * This is why an object of loadableContexts is created on initialisation,
 * rather than dynamically creating them on demand.
 *
 * https://github.com/jamiebuilds/react-loadable#loadablepreloadall
 *
 */
const loadableContexts: LoadableContextStore = {};

Object.keys(services).forEach(service => {
  loadableContexts[service] = createLoadableContext(
    ServiceContext,
    services[service],
  );
});

interface ServiceContextProviderProps {
  service: string;
}

export const ServiceContextProvider: React.FC<ServiceContextProviderProps> = ({
  children,
  service,
}) => {
  const LoadableServiceContextProvider = loadableContexts[service];

  if (!LoadableServiceContextProvider) {
    return null;
  }

  return (
    <LoadableServiceContextProvider>{children}</LoadableServiceContextProvider>
  );
};

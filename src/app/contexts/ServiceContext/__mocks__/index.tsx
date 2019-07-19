import React from 'react';
import services from '../../../lib/config/services';

/*
 * This file is mocked by default to avoid having to handle
 * async behavior in tests across the application when
 * using service contexts.
 */
export const ServiceContext = React.createContext(services.default);

interface ServiceContextProviderProps {
  service: string;
}

export const ServiceContextProvider: React.FC<ServiceContextProviderProps> = ({
  children,
  service,
}) => (
  <ServiceContext.Provider value={services[service]}>
    {children}
  </ServiceContext.Provider>
);

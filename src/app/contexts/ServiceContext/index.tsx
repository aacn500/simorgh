import React from 'react';
import ReactLoadable from 'react-loadable';
import { node, string } from 'prop-types';
import services, { LoadableConfig } from '../../lib/config/services/loadableConfig';
import defaultService from '../../lib/config/services/default';
import createLoadableContext from '../utils/createLoadableContext';

export interface Translations {
  currentPage: string,
  skipLinkText: string,
  home?: string,
  // TODO not this
  error: any,
  consentBanner: any,
  media: {
    audio: string,
    video: string,
  },
};

export interface NavigationConfig {
  title: string,
  url: string,
};

// TODO not this
export type FooterConfig = any;

export interface Service {
  product: string,
  articleTimestampPrefix: string,
  atiAnalyticsAppName: string,
  brandName: string,
  locale: string,
  isoLang: string,
  datetimeLocale: string,
  service: string,
  serviceName: string,
  serviceLocalizedName: string,
  defaultImage: string,
  defaultImageAltText: string,
  dir: string,
  // TODO type for brandSVG
  brandSVG: any,
  // TODO type script
  script: any,
  manifestPath: string,
  swPath: string,
  // TODO are fonts strings?
  fonts: any[],
  noBylinesPolicy: string,
  publishingPrinciples: string,
  // TODO can refine this? or enum it?
  themeColor: string,
  twitterCreator: string,
  twitterSite: string,
  translations: Translations,
  navigation: NavigationConfig[],
  footer: FooterConfig,
};

/* Create ServiceContext using the default service */
export const ServiceContext = React.createContext<Service>(defaultService);

type Loadableish = (React.FunctionComponent<unknown> & ReactLoadable.LoadableComponent) | (React.ComponentClass<unknown, any> & ReactLoadable.LoadableComponent);

interface LoadableContextStore {
  [serviceName: string]: Loadableish,
};

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
  service: string,
};

export const ServiceContextProvider: React.FC<ServiceContextProviderProps> = ({ children, service }) => {
  const LoadableServiceContextProvider = loadableContexts[service];

  if (!LoadableServiceContextProvider) {
    return null;
  }

  return (
    <LoadableServiceContextProvider>{children}</LoadableServiceContextProvider>
  );
};

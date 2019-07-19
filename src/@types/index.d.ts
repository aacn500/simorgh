declare interface Service {}

declare interface Translations {
  currentPage: string;
  skipLinkText: string;
  home?: string;
  // TODO not this
  error: any;
  consentBanner: any;
  media: {
    audio: string;
    video: string;
  };
}

declare interface NavigationConfig {
  title: string;
  url: string;
}

// TODO not this
declare type FooterConfig = any;

declare interface Service {
  product: string;
  articleTimestampPrefix: string;
  atiAnalyticsAppName: string;
  brandName: string;
  locale: string;
  isoLang: string;
  datetimeLocale: string;
  service: string;
  serviceName: string;
  serviceLocalizedName: string;
  defaultImage: string;
  defaultImageAltText: string;
  dir: string;
  // TODO type for brandSVG
  brandSVG: any;
  // TODO type script
  script: any;
  manifestPath: string;
  swPath: string;
  // TODO are fonts strings?
  fonts: any[];
  noBylinesPolicy: string;
  publishingPrinciples: string;
  // TODO can refine this? or enum it?
  themeColor: string;
  twitterCreator: string;
  twitterSite: string;
  translations: Translations;
  navigation: NavigationConfig[];
  footer: FooterConfig;
}

declare interface LoadableConfig {
  loader: () => Promise<WrappyThing<Service>>;
  webpack: () => number[];
}

declare interface LoadableConfigStore {
  [serviceName: string]: LoadableConfig;
}

// TODO actually name this
declare interface WrappyThing<T> {
  default: T;
}

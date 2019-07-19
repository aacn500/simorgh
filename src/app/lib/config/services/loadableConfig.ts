import { Service } from '../../../contexts/ServiceContext';

export interface LoadableConfig {
  loader: () => Promise<WrappyThing<Service>>,
  webpack: () => number[],
};

interface LoadableConfigStore {
  [serviceName: string]: LoadableConfig,
};

// TODO actually name this
export interface WrappyThing<T> {
  default: T,
};

/*
 * This config is used by `createLoadableContext`
 * to dynamically load each service's config.
 */
const loadableConfig: LoadableConfigStore = {
  afaanoromoo: {
    // This is GROSS but also typescript really doesn't like dynamic imports being treated as generic so
    loader: () =>
      import(/* webpackChunkName: 'afaanoromoo' */ './afaanoromoo') as unknown as Promise<WrappyThing<Service>>,
    // This looks similarly gross at first glance, but resolveWeak should
    // always return a number with our webpack config.
    // See also: https://webpack.js.org/api/module-methods/#requireresolve
    webpack: () => [require.resolveWeak('./afaanoromoo') as number],
  },
  afrique: {
    loader: () => import(/* webpackChunkName: 'afrique' */ './afrique') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./afrique') as number],
  },
  amharic: {
    loader: () => import(/* webpackChunkName: 'amharic' */ './amharic') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./amharic') as number],
  },
  arabic: {
    loader: () => import(/* webpackChunkName: 'arabic' */ './arabic') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./arabic') as number],
  },
  azeri: {
    loader: () => import(/* webpackChunkName: 'azeri' */ './azeri') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./azeri') as number],
  },
  bengali: {
    loader: () => import(/* webpackChunkName: 'bengali' */ './bengali') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./bengali') as number],
  },
  burmese: {
    loader: () => import(/* webpackChunkName: 'burmese' */ './burmese') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./burmese') as number],
  },
  cymrufyw: {
    loader: () => import(/* webpackChunkName: 'cymrufyw' */ './cymrufyw') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./cymrufyw') as number],
  },
  gahuza: {
    loader: () => import(/* webpackChunkName: 'gahuza' */ './gahuza') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./gahuza') as number],
  },
  gujarati: {
    loader: () => import(/* webpackChunkName: 'gujarati' */ './gujarati') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./gujarati') as number],
  },
  hausa: {
    loader: () => import(/* webpackChunkName: 'hausa' */ './hausa') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./hausa') as number],
  },
  hindi: {
    loader: () => import(/* webpackChunkName: 'hindi' */ './hindi') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./hindi') as number],
  },
  igbo: {
    loader: () => import(/* webpackChunkName: 'igbo' */ './igbo') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./igbo') as number],
  },
  indonesia: {
    loader: () => import(/* webpackChunkName: 'indonesia' */ './indonesia') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./indonesia') as number],
  },
  japanese: {
    loader: () => import(/* webpackChunkName: 'japanese' */ './japanese') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./japanese') as number],
  },
  korean: {
    loader: () => import(/* webpackChunkName: 'korean' */ './korean') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./korean') as number],
  },
  kyrgyz: {
    loader: () => import(/* webpackChunkName: 'kyrgyz' */ './kyrgyz') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./kyrgyz') as number],
  },
  marathi: {
    loader: () => import(/* webpackChunkName: 'marathi' */ './marathi') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./marathi') as number],
  },
  mundo: {
    loader: () => import(/* webpackChunkName: 'mundo' */ './mundo') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./mundo') as number],
  },
  naidheachdan: {
    loader: () =>
      import(/* webpackChunkName: 'naidheachdan' */ './naidheachdan') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./naidheachdan') as number],
  },
  nepali: {
    loader: () => import(/* webpackChunkName: 'nepali' */ './nepali') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./nepali') as number],
  },
  news: {
    loader: () => import(/* webpackChunkName: 'news' */ './news') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./news') as number],
  },
  pashto: {
    loader: () => import(/* webpackChunkName: 'pashto' */ './pashto') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./pashto') as number],
  },
  persian: {
    loader: () => import(/* webpackChunkName: 'persian' */ './persian') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./persian') as number],
  },
  pidgin: {
    loader: () => import(/* webpackChunkName: 'pidgin' */ './pidgin') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./pidgin') as number],
  },
  portuguese: {
    loader: () =>
      import(/* webpackChunkName: 'portuguese' */ './portuguese') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./portuguese') as number],
  },
  punjabi: {
    loader: () => import(/* webpackChunkName: 'punjabi' */ './punjabi') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./punjabi') as number],
  },
  russian: {
    loader: () => import(/* webpackChunkName: 'russian' */ './russian') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./russian') as number],
  },
  serbian: {
    loader: () => import(/* webpackChunkName: 'serbian' */ './serbian') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./serbian') as number],
  },
  sinhala: {
    loader: () => import(/* webpackChunkName: 'sinhala' */ './sinhala') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./sinhala') as number],
  },
  somali: {
    loader: () => import(/* webpackChunkName: 'somali' */ './somali') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./somali') as number],
  },
  swahili: {
    loader: () => import(/* webpackChunkName: 'swahili' */ './swahili') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./swahili') as number],
  },
  tamil: {
    loader: () => import(/* webpackChunkName: 'tamil' */ './tamil') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./tamil') as number],
  },
  telugu: {
    loader: () => import(/* webpackChunkName: 'telugu' */ './telugu') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./telugu') as number],
  },
  thai: {
    loader: () => import(/* webpackChunkName: 'thai' */ './thai') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./thai') as number],
  },
  tigrinya: {
    loader: () => import(/* webpackChunkName: 'tigrinya' */ './tigrinya') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./tigrinya') as number],
  },
  turkce: {
    loader: () => import(/* webpackChunkName: 'turkce' */ './turkce') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./turkce') as number],
  },
  ukchina: {
    loader: () => import(/* webpackChunkName: 'ukchina' */ './ukchina') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./ukchina') as number],
  },
  ukrainian: {
    loader: () => import(/* webpackChunkName: 'ukrainian' */ './ukrainian') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./ukrainian') as number],
  },
  urdu: {
    loader: () => import(/* webpackChunkName: 'urdu' */ './urdu') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./urdu') as number],
  },
  uzbek: {
    loader: () => import(/* webpackChunkName: 'uzbek' */ './uzbek') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./uzbek') as number],
  },
  vietnamese: {
    loader: () =>
      import(/* webpackChunkName: 'vietnamese' */ './vietnamese') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./vietnamese') as number],
  },
  yoruba: {
    loader: () => import(/* webpackChunkName: 'yoruba' */ './yoruba') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./yoruba') as number],
  },
  zhongwen: {
    loader: () => import(/* webpackChunkName: 'zhongwen' */ './zhongwen') as unknown as Promise<WrappyThing<Service>>,
    webpack: () => [require.resolveWeak('./zhongwen') as number],
  },
};

export default loadableConfig;

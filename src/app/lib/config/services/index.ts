/*
  Do not import this file into the primary application.
  This file is intended for use by tests only where needed.
  Including this file in the application will cause the
  bundle splitting to stop working.
*/
import defaultConfig from './default';

import afaanoromoo from './afaanoromoo';
import afrique from './afrique';
import amharic from './amharic';
import arabic from './arabic';
import azeri from './azeri';
import bengali from './bengali';
import burmese from './burmese';
import cymrufyw from './cymrufyw';
import gahuza from './gahuza';
import gujarati from './gujarati';
import hausa from './hausa';
import hindi from './hindi';
import igbo from './igbo';
import indonesia from './indonesia';
import japanese from './japanese';
import korean from './korean';
import kyrgyz from './kyrgyz';
import marathi from './marathi';
import mundo from './mundo';
import naidheachdan from './naidheachdan';
import nepali from './nepali';
import news from './news';
import pashto from './pashto';
import persian from './persian';
import pidgin from './pidgin';
import portuguese from './portuguese';
import punjabi from './punjabi';
import russian from './russian';
import serbian from './serbian';
import sinhala from './sinhala';
import somali from './somali';
import swahili from './swahili';
import tamil from './tamil';
import telugu from './telugu';
import thai from './thai';
import tigrinya from './tigrinya';
import turkce from './turkce';
import ukchina from './ukchina';
import ukrainian from './ukrainian';
import urdu from './urdu';
import uzbek from './uzbek';
import vietnamese from './vietnamese';
import yoruba from './yoruba';
import zhongwen from './zhongwen';

interface ServiceStore {
  [serviceName: string]: Service;
}

// hoo boy this is really gross huh
// at least these casts should be unneeded when all the service configs have all
// the values and are converted to typescript
const services: ServiceStore = {
  default: defaultConfig as Service,

  afaanoromoo: (afaanoromoo as unknown) as Service,
  afrique: (afrique as unknown) as Service,
  amharic: (amharic as unknown) as Service,
  arabic: (arabic as unknown) as Service,
  azeri: (azeri as unknown) as Service,
  bengali: (bengali as unknown) as Service,
  burmese: (burmese as unknown) as Service,
  cymrufyw: (cymrufyw as unknown) as Service,
  gahuza: (gahuza as unknown) as Service,
  gujarati: (gujarati as unknown) as Service,
  hausa: (hausa as unknown) as Service,
  hindi: (hindi as unknown) as Service,
  igbo: (igbo as unknown) as Service,
  indonesia: (indonesia as unknown) as Service,
  japanese: (japanese as unknown) as Service,
  korean: (korean as unknown) as Service,
  kyrgyz: (kyrgyz as unknown) as Service,
  marathi: (marathi as unknown) as Service,
  mundo: (mundo as unknown) as Service,
  naidheachdan: (naidheachdan as unknown) as Service,
  nepali: (nepali as unknown) as Service,
  news: (news as unknown) as Service,
  pashto: (pashto as unknown) as Service,
  persian: (persian as unknown) as Service,
  pidgin: (pidgin as unknown) as Service,
  portuguese: (portuguese as unknown) as Service,
  punjabi: (punjabi as unknown) as Service,
  russian: (russian as unknown) as Service,
  serbian: (serbian as unknown) as Service,
  sinhala: (sinhala as unknown) as Service,
  somali: (somali as unknown) as Service,
  swahili: (swahili as unknown) as Service,
  tamil: (tamil as unknown) as Service,
  telugu: (telugu as unknown) as Service,
  thai: (thai as unknown) as Service,
  tigrinya: (tigrinya as unknown) as Service,
  turkce: (turkce as unknown) as Service,
  ukchina: (ukchina as unknown) as Service,
  ukrainian: (ukrainian as unknown) as Service,
  urdu: (urdu as unknown) as Service,
  uzbek: (uzbek as unknown) as Service,
  vietnamese: (vietnamese as unknown) as Service,
  yoruba: (yoruba as unknown) as Service,
  zhongwen: (zhongwen as unknown) as Service,
};

export default services;

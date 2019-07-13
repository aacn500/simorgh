import React from 'react';
import { storiesOf } from '@storybook/react';
import { ServiceContextProvider } from '../../contexts/ServiceContext';
import { RequestContextProvider } from '../../contexts/RequestContext';
import StoryPromoContainer from '.';
import fixture from '../../../../data/pidgin/frontpage';
import deepGet from '../../lib/utilities/deepGet';
import AmpDecorator from '../../../../.storybook/helpers/ampDecorator';

const mediaFixture = type =>
  deepGet(['content', 'groups'], fixture)
    .flatMap(group => deepGet(['items'], group))
    .find(
      item =>
        deepGet(['cpsType'], item) === 'MAP' &&
        deepGet(['media', 'format'], item) === type,
    );

const firstFixture = deepGet(['content', 'groups', '0', 'items', '0'], fixture);
const audioFixture = mediaFixture('audio');
const videoFixture = mediaFixture('video');

const getStoryPromo = platform => item => (
  <ServiceContextProvider service="news">
    <RequestContextProvider
      bbcOrigin="https://www.test.bbc.co.uk"
      id="c0000000000o"
      isAmp={platform === 'amp'}
      pageType="article"
      service="news"
    >
      <StoryPromoContainer item={item} />
    </RequestContextProvider>
  </ServiceContextProvider>
);

const getCanonicalStoryPromo = getStoryPromo('canonical');
const getAmpStoryPromo = getStoryPromo('amp');

storiesOf('Story Promo/canonical', module)
  .add('default', () => getCanonicalStoryPromo(firstFixture))
  .add('audio promo', () => getCanonicalStoryPromo(audioFixture))
  .add('video promo', () => getCanonicalStoryPromo(videoFixture));

storiesOf('Story Promo/amp', module)
  .addDecorator(AmpDecorator)
  .add('default', () => getAmpStoryPromo(firstFixture))
  .add('audio promo', () => getAmpStoryPromo(audioFixture))
  .add('video promo', () => getAmpStoryPromo(videoFixture));

import React from 'react';

import { shouldShallowMatchSnapshot, isNull } from '../../../../testHelpers';
import MediaIndicator from '.';

const item = {
  headlines: {
    headline: 'A video item',
  },
  locators: {
    assetUri: 'https://www.bbc.co.uk',
  },
  cpsType: 'MAP',
  media: {
    format: 'video',
    versions: [
      {
        duration: 5600,
      },
    ],
  },
};

const nonMediaItem = {
  cpsType: '🤔',
};

const noDurationItem = {
  headlines: {
    headline: 'A video item',
  },
  locators: {
    assetUri: 'https://www.bbc.co.uk',
  },
  cpsType: 'MAP',
  media: {
    format: 'video',
    versions: [{}],
  },
};

const noMediaObject = {
  headlines: {
    headline: 'A video item',
  },
  locators: {
    assetUri: 'https://www.bbc.co.uk',
  },
  cpsType: 'MAP',
};

const noMediaFormat = {
  headlines: {
    headline: 'A video item',
  },
  locators: {
    assetUri: 'https://www.bbc.co.uk',
  },
  cpsType: 'MAP',
  media: {
    versions: [
      {
        duration: 5600,
      },
    ],
  },
};

describe('Story Promo Media Indicator', () => {
  shouldShallowMatchSnapshot(
    'should render correctly',
    <MediaIndicator item={item} service="news" />,
  );

  shouldShallowMatchSnapshot(
    'should render correctly even without duration',
    <MediaIndicator item={noDurationItem} service="news" />,
  );

  shouldShallowMatchSnapshot(
    'should not render if item media object has no format',
    <MediaIndicator item={noMediaFormat} service="news" />,
  );

  isNull(
    'should not render if item is not media',
    <MediaIndicator item={nonMediaItem} service="news" />,
  );

  isNull(
    'should not render if item media object is missing',
    <MediaIndicator item={noMediaObject} service="news" />,
  );
});

import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import { withKnobs } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import {
  AudioClipGlobalGuidanceWithCaption,
  AudioClipNonUk,
  AudioClipUk,
  VideoClipNonUk,
  VideoClipGlobalPortrait,
  VideoClipGlobalWithCaption,
  VideoClipUkWithGuidance,
  VideoClipGlobalWithoutCaption,
} from './helpers/fixtureData';
import AmpDecorator from '../../../../.storybook/helpers/ampDecorator';
import { ServiceContextProvider } from '../../contexts/ServiceContext';
import AudioVideoContainer from '.';

storiesOf('Audio Video Container', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add('story', ({ service }) => {
    /* eslint-disable no-unused-expressions */
    <ServiceContextProvider service={service}>
      <AudioVideoContainer />
    </ServiceContextProvider>;
  })
  .add('video, clip, global, with guidance, with caption', () =>
    VideoClipGlobalWithCaption({ platform: 'canonical' }),
  )
  .add('video, clip, global, with guidance, without caption', () =>
    VideoClipGlobalWithoutCaption({ platform: 'canonical' }),
  )
  .add('video, clip, UK, with guidance', () =>
    VideoClipUkWithGuidance({ platform: 'canonical' }),
  )
  .add('video, clip, non-UK, without guidance', () =>
    VideoClipNonUk({ platform: 'canonical' }),
  )
  .add('video, clip, global, without guidance, portrait', () =>
    VideoClipGlobalPortrait({ platform: 'canonical' }),
  )
  .add('audio, clip, global, with guidance', () =>
    AudioClipGlobalGuidanceWithCaption({ platform: 'canonical' }),
  )
  .add('audio, clip, UK, without guidance', () =>
    AudioClipUk({ platform: 'canonical' }),
  )
  .add('audio, clip, non-UK, without guidance', () =>
    AudioClipNonUk({ platform: 'canonical' }),
  );

storiesOf('Audio Video Container - AMP', module)
  .addDecorator(AmpDecorator)
  .add('video, clip, global, with guidance, with caption', () =>
    VideoClipGlobalWithCaption({ platform: 'amp' }),
  )
  .add('video, clip, global, with guidance, without caption', () =>
    VideoClipGlobalWithoutCaption({ platform: 'amp' }),
  )
  .add('video, clip, UK, with guidance', () =>
    VideoClipUkWithGuidance({ platform: 'amp' }),
  )
  .add('video, clip, non-UK, without guidance', () =>
    VideoClipNonUk({ platform: 'amp' }),
  )
  .add('video, clip, global, without guidance, portrait', () =>
    VideoClipGlobalPortrait({ platform: 'amp' }),
  )
  .add('audio, clip, global, with guidance', () =>
    AudioClipGlobalGuidanceWithCaption({ platform: 'amp' }),
  )
  .add('audio, clip, UK, without guidance', () =>
    AudioClipUk({ platform: 'amp' }),
  )
  .add('audio, clip, non-UK, without guidance', () =>
    AudioClipNonUk({ platform: 'amp' }),
  );

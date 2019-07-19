import React, { Fragment, useContext } from 'react';
import { number, oneOf, string, shape } from 'prop-types';
import Helmet from 'react-helmet';
import { ServiceContext } from '../../contexts/ServiceContext';
import ErrorPageComponent from '../../components/ErrorPage';

/*
 * MVP Metadata for the error
 * This will be refactored out in https://github.com/bbc/simorgh/issues/1350
 */
const ErrorMetadata = ({ dir, lang, messaging, brandName, themeColor }) => {
  const { title } = messaging;

  return (
    <Helmet htmlAttributes={{ lang, dir }}>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="theme-color" content={themeColor} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <title>
        {title} - {brandName}
      </title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
};

const ErrorMain = ({ status }) => {
  const {
    brandName,
    dir,
    lang,
    script,
    service,
    themeColor,
    translations,
  } = useContext(ServiceContext);
  const messaging = translations.error[status] || translations.error[500];

  return (
    <Fragment>
      <ErrorMetadata
        brandName={brandName}
        dir={dir}
        lang={lang}
        messaging={messaging}
        themeColor={themeColor}
      />
      <ErrorPageComponent {...messaging} script={script} service={service} />
    </Fragment>
  );
};

ErrorMain.propTypes = {
  status: number.isRequired,
};

ErrorMetadata.propTypes = {
  dir: oneOf(['rtl', 'ltr']).isRequired,
  lang: string.isRequired,
  messaging: shape({ title: string.isRequired }).isRequired,
  brandName: string.isRequired,
  themeColor: string.isRequired,
};

export default ErrorMain;

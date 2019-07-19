import React, { useContext } from 'react';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { ServiceContext } from '../../contexts/ServiceContext';

const NavigationContainer = () => {
  const { script, translations, navigation, service } = useContext(
    ServiceContext,
  );
  const { currentPage, skipLinkText } = translations;

  if (!navigation || navigation.length === 0) {
    return null;
  }

  return (
    <Navigation script={script} skipLinkText={skipLinkText} service={service}>
      <NavigationUl>
        {navigation.map((item: NavigationConfig, index: number) => {
          const { title, url } = item;
          const active = index === 0;

          return (
            <NavigationLi
              key={title}
              url={url}
              script={script}
              active={active}
              currentPageText={currentPage}
              service={service}
            >
              {title}
            </NavigationLi>
          );
        })}
      </NavigationUl>
    </Navigation>
  );
};

export default NavigationContainer;

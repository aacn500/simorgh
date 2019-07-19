declare module '@bbc/psammead-navigation' {
  export const NavigationUl: React.FC;

  interface NavigationLiProps {
    url: string;
    dir?: string;
    active?: boolean;
    currentPageText?: string;
    script: any;
    service: string;
  }

  export const NavigationLi: React.FC<NavigationLiProps>;

  interface NavigationProps {
    script: any;
    service: string;
    skipLinkText: string;
  }

  const Navigation: React.FC<NavigationProps>;
  export default Navigation;
}

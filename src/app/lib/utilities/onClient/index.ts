const onClient = (): boolean =>
  !!(typeof window !== 'undefined' && window.location);

export default onClient;

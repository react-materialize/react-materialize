export default (name, mock) => {
  const actual = M[name];
  M[name] = mock;

  return () => {
    M[name] = actual;
  };
};

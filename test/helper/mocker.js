export default (name, mock) => {
  const actual = $.fn[name];
  $.fn[name] = mock;

  return () => {
    $.fn[name] = actual;
  };
};

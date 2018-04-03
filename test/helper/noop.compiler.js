function noop() {
  return null;
}

require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.gif'] = noop;
require.extensions['.jpg'] = noop;

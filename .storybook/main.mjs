/** @type {import('@storybook/react-vite').StorybookConfig} */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: { viteConfigPath: '.storybook/vite.config.mjs' },
      // Render stories in StrictMode, so dev mode mounts, unmounts and
      // remounts every component as React apps in StrictMode do.
      strictMode: true
    }
  },
  staticDirs: ['./public']
};

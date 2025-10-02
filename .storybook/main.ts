import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // ...
  stories: ['../src/app/previews/**/*.stories.tsx', '../src/app/ui/**/*.stories.tsx'],
  framework: '@storybook/nextjs', // 👈 Add this
};

export default config;
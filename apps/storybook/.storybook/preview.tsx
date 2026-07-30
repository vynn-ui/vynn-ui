import type { Preview } from '@storybook/react';
import '@vynn/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  globalTypes: {
    theme: {
      description: 'vynn-ui theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'classic', title: 'Classic' },
          { value: 'neobrutalism', title: 'Neobrutalism' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'classic',
  },
  decorators: [
    (Story, context) => {
      if (typeof document !== 'undefined') {
        document.documentElement.dataset.theme = context.globals.theme || 'classic';
      }
      return (
        <div className="bg-page text-ink min-h-screen p-6">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

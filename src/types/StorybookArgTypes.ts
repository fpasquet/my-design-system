export type StorybookArgTypes = {
  description?: string;
  table?: {
    category?: string;
    subcategory?: string;
    type?: {
      summary?: string;
    };
  };
  /*
   * See https://storybook.js.org/docs/react/essentials/controls#annotation
   */
  control?: 'text' | 'number' | 'boolean' | 'radio' | 'select';
  options?: readonly string[];
};

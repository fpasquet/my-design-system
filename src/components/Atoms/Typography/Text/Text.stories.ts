import type { Meta, StoryObj } from '@storybook/react';

import { boxArgTypes } from '@/constants/storybook';
import { createArgTypes } from '@/helpers/storybook';

import { Text, textSize } from './Text';

const meta = {
  title: 'Components/Atoms/Typography/Text',
  component: Text,
  args: {
    size: 'm',
    children: `I'm a Text ;`,
  },
  tags: ['autodocs'],
  argTypes: {
    ...boxArgTypes,
    size: createArgTypes({
      values: textSize,
    }),
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

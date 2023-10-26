import type { Meta, StoryObj } from '@storybook/react';

import { boxArgTypes } from '@/constants/storybook';

import { Box } from './Box';

const meta = {
  title: 'Components/Atoms/Layout/Box',
  component: Box,
  args: {
    p: 'm',
    bg: 'primary',
    color: 'white',
    children: `I'm a div Box ;`,
  },
  tags: ['autodocs'],
  argTypes: {
    ...boxArgTypes,
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

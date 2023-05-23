import { boxArgTypes } from '@/constants/storybook';
import { createArgTypes } from '@/helpers/storybook';
import { Heading, headingSize } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  args: {
    size: 'l',
    children: `I'm a Heading ;`,
  },
  tags: ['autodocs'],
  argTypes: {
    ...boxArgTypes,
    size: createArgTypes({
      values: headingSize,
    }),
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

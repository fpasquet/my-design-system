import { boxArgTypes } from '@/constants/storybook';
import { Link } from './Link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Atoms/Link',
  component: Link,
  args: {
    children: `I'm a Link ;`,
  },
  tags: ['autodocs'],
  argTypes: {
    ...boxArgTypes,
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

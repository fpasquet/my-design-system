import type { Meta, StoryObj } from '@storybook/react';

import { boxArgTypes } from '@/constants/storybook';

import { PostPreview } from './PostPreview';

const meta = {
  title: 'Components/Molecules/PostPreview',
  component: PostPreview,
  args: {
    title: `Titre de l'article`,
    date: '09 fév. 2021',
    readingTime: '24mn',
    authors: [{ username: 'jdoe', name: 'J. Doe' }],
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
    link: {
      as: 'a',
      href: '#',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ...boxArgTypes,
  },
} satisfies Meta<typeof PostPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

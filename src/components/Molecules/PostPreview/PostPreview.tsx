import './PostPreview.scss';

import * as React from 'react';
import { Box, BoxProps, Heading, Link, LinkProps, Text } from '@/components';
import { polyRef } from '@/helpers';
import { PropsPolymorphicWithoutRef } from '@/types';

export interface PostPreviewProps extends Omit<BoxProps, 'children'> {
  title: React.ReactNode;
  excerpt: React.ReactNode;
  date: React.ReactNode;
  readingTime: React.ReactNode;
  authors: { username: string; name: string }[];
  link: PropsPolymorphicWithoutRef<'a', Omit<LinkProps, 'children'>>;
}

export const PostPreview = polyRef<'div', PostPreviewProps>(
  ({ title, excerpt, date, readingTime, authors, link = {}, ...boxProps }, ref) => (
    <Box as="article" className="post-preview" {...boxProps} ref={ref}>
      <Heading as="h2" size="s" mb={{ xs: 'xs', md: 's' }}>
        <Link {...link}>{title}</Link>
      </Heading>
      <Text size="s">{excerpt}</Text>
      <Text as="div" mt={{ xs: 'xs', md: 's' }} size="xs" className="post-preview__meta">
        {date && <Text as="span">{date}</Text>}
        {readingTime && <Text as="span">{readingTime}</Text>}
        {authors?.map((author, authorIndex) => (
          <Text key={author.username} as="span">
            {author.name}
            {authorIndex !== authors.length - 1 ? ' & ' : ''}
          </Text>
        ))}
      </Text>
    </Box>
  )
);

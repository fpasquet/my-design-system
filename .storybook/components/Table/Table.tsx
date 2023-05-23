import './Table.scss';

import * as React from 'react';

import { Box, BoxProps, Heading } from '@/components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableProps<TRow = any> extends BoxProps {
  title: string;
  columns: {
    name: string;
    label: string;
  }[];
  rows: TRow[];
}

export const Table: React.FC<TableProps> = ({ title, columns, rows, ...boxProps }) => (
  <Box {...boxProps}>
    <Heading as="p" size="s">
      {title}
    </Heading>
    <Box
      mt="m"
      className="storybook-table"
      style={
        {
          '--storybook-table-grid-cols': columns.length,
        } as React.CSSProperties
      }
    >
      <Box py="s" bg="neutral" className="storybook-table__head">
        {columns.map((column) => (
          <Box key={column.name} px="s">
            {column.label}
          </Box>
        ))}
      </Box>
      {rows.map((row, index) => (
        <Box key={index} py="s" className="storybook-table__row">
          {columns.map((column) => (
            <Box key={column.name} px="s">
              {row[column.name] || '-'}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

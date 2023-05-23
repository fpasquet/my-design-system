import * as React from 'react';

import { Text } from '@/components';
import { Table, TableProps } from '../Table';

export interface DesignTokenTableProps extends TableProps {
  title: string;
  tokens: Record<string, { value: string }>;
}

export const DesignTokenTable: React.FC<DesignTokenTableProps> = ({ title, tokens, ...props }) => (
    <Table
        {...props}
      title={title}
      columns={[
        {
          name: 'name',
          label: 'Name',
        },
        {
          name: 'value',
          label: 'Value',
        },
      ]}
      rows={Object.entries(tokens).map(([tokenName, token]) => ({
        name: <Text weight="medium">{tokenName}</Text>,
        value: token.value,
      }))}
    />
);

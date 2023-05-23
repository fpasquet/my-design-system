import { linkTo } from '@storybook/addon-links';
import * as React from 'react';

import { getLinkMdnByCssProperty } from '@/helpers/storybook';
import { SystemPropConfig } from '@/types';

import { Table, TableProps } from '../Table';
import { Text, Link, Box } from '@/components';
import { capitalize } from '@/helpers';

export interface SystemPropsTableProps extends TableProps {
  title: string;
  systemProps: Record<string, SystemPropConfig>;
}

export const SystemPropsTable: React.FC<SystemPropsTableProps> = ({ title, systemProps, ...props }) => (
  <Table
    {...props}
    title={title}
    columns={[
      {
        name: 'propName',
        label: 'Prop Name',
      },
      {
        name: 'cssProperties',
        label: 'CSS Properties',
      },
      {
        name: 'value',
        label: 'Reference or values',
      },
    ]}
    rows={Object.entries(systemProps).map(([propName, propOption]) => {
      return {
        propName,
          cssProperties: propOption.cssProperties.map((cssProperty, index) => (
              <>
                  <Link href={getLinkMdnByCssProperty(cssProperty)} target="_blank">
                      {cssProperty}
                  </Link>
                  {propOption.cssProperties.length - 1 !== index && <Text as="span">, </Text>}
              </>
          )),
        value: propOption.tokenCategory ? (
            <Link onClick={linkTo(`Foundations/Design Tokens/${capitalize(propOption.tokenCategory)}`)}>
                {propOption.tokenCategory}
            </Link>
        ): propOption.cssValues ? (
            <>
                {Object.entries(propOption.cssValues).map(([name, cssValue]) => (
                    <Text>
                        {name}: <Text as="span" italic>{cssValue}</Text>
                    </Text>
                ))}
            </>
        ) : <Text as="span" italic>boolean</Text>,
      };
    })}
  />
);

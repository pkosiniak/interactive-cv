import { FC } from 'react';
import { Description, List, ListItem, Text } from '@/components';
import { usePrefix } from '@/utils/functions';

export const Acoustician: FC = () => {
  const s = usePrefix('acoustician.description');

  return (
    <Description>
      <List>
        <ListItem>{s('1')}</ListItem>
        <ListItem>{s('2')}</ListItem>
      </List>

      <Text>cooperation</Text>
      <Text>{s('companies')}</Text>
    </Description>
  );
};

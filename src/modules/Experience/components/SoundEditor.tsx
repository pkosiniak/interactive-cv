import { FC } from 'react';
import { Description, List, ListItem, Text } from '@/components';
import { usePrefix } from '@/utils/functions';


export const SoundEditor: FC = () => {
  const s = usePrefix('soundEditor.description');

  return (
    <Description>
      <List>
        <ListItem>{s('1')}</ListItem>
      </List>

      <Text>cooperation</Text>
      <Text>{s('companies')}</Text>
    </Description>
  );
};

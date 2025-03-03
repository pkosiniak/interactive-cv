import { FC } from 'react';
import { Description, List, ListItem, Text } from '@/components';
import { usePrefix } from '@/utils/functions';

const PREFIX = 'xkom.projects.xkom';

export const Xkom: FC = () => {
  const s = usePrefix(PREFIX);
  const description = usePrefix(PREFIX + '.description');

  return (
    <Description>
      <List>
        <ListItem>{description('1')}</ListItem>
        <ListItem>{description('2')}</ListItem>
        <ListItem>{description('3')}</ListItem>
        <ListItem>{description('4')}</ListItem>
        <ListItem>{description('5')}</ListItem>
      </List>

      <Text>{'usedTechnologies'}</Text>
      <Text>{s('tech')}</Text>
    </Description>
  );
};

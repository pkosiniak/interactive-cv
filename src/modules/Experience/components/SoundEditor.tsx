import { Description, List, ListItem, Text } from '@/components';
import { FC } from 'react';

type Props = {};

export const SoundEditor: FC<Props> = ({}) => {
  return (
    <Description>
      <List>
        <ListItem>acousticianBullet</ListItem>
      </List>

      <Text>cooperation</Text>
      <Text>acousticianCooperation</Text>
    </Description>
  );
};

import { FC } from 'react';
import { Description, List, ListItem, Text } from '@/components';

type Props = {};

export const Acoustician: FC<Props> = ({}) => {
  return (
    <Description>
      <List>
        <ListItem>acousticianBullet1</ListItem>
        <ListItem>acousticianBullet2</ListItem>
      </List>

      <Text>cooperation</Text>
      <Text>acousticianCooperation</Text>
    </Description>
  );
};

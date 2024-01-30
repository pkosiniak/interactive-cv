import { Description, List, ListItem, Text } from '@/components';
import { FC } from 'react';

type Props = {};

export const Xkom: FC<Props> = ({}) => {
  return (
    <Description>
      <List>
        <ListItem>xkomBullet1</ListItem>
        <ListItem>xkomBullet2</ListItem>
        <ListItem>xkomBullet3</ListItem>
        <ListItem>xkomBullet4</ListItem>
        <ListItem>xkomBullet5</ListItem>
      </List>

      <Text>usedTechnologies</Text>
      <Text>xkomUsedTechnologies</Text>
    </Description>
  );
};

import { FC } from 'react';
import { Section, H2, List, Text, Description, ListItem } from '@/components';
import { PRINT_BREAK } from '@/styles';
import { Job } from '../Job';

type Props = {};

export const Education: FC<Props> = ({}) => {
  return (
    <Section className={PRINT_BREAK}>
      <H2>education</H2>

      <Job
        company='agh'
        position='engineer'
        duration='aghDuration'
        imgSrc='./assets/agh_university_of_science_and_technology_logo.jfif'
      >
        <Description>
          <Text>thesisTopic</Text>
          <Text>thesisTopicText</Text>

          <Text>thesisRequirements</Text>
          <List>
            <ListItem>thesisBullet1</ListItem>
            <ListItem>thesisBullet2</ListItem>
            <ListItem>thesisBullet3</ListItem>
            <ListItem>thesisBullet4</ListItem>
            <ListItem>thesisBullet5</ListItem>
          </List>

          <Text>usedTechnologies</Text>
          <Text>thesisUsedTechnologies</Text>
        </Description>
      </Job>
    </Section>
  );
};

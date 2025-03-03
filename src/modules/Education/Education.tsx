import { FC } from 'react';
import { Section, H2, List, Text, Description, ListItem } from '@/components';
import { PRINT_BREAK } from '@/styles';
import { usePrefix } from '@/utils/functions';
import { Job } from '../Job';

const PREFIX = 'agh';
const THESIS_PREFIX = 'projects.thesis';

export const Education: FC = () => {
  const s = usePrefix(PREFIX);
  const thesis = usePrefix(PREFIX, THESIS_PREFIX);
  const description = usePrefix(PREFIX, THESIS_PREFIX, 'description');
  return (
    <Section className={PRINT_BREAK}>
      <H2>education</H2>

      <Job company='agh' imgSrc='./assets/agh_university_of_science_and_technology_logo.jfif'>
        <Description>
          <Text>{s('description')}</Text>
          <Text>{thesis('name')}</Text>

          <Text>{description('requirements')}</Text>
          <List>
            <ListItem>{description('1')}</ListItem>
            <ListItem>{description('2')}</ListItem>
            <ListItem>{description('3')}</ListItem>
            <ListItem>{description('4')}</ListItem>
            <ListItem>{description('5')}</ListItem>
          </List>

          <Text>usedTechnologies</Text>
          <Text>{thesis('tech')}</Text>
        </Description>
      </Job>
    </Section>
  );
};

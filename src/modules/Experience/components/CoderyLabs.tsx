import { FC } from 'react';
import styled from '@emotion/styled';
import { Description, H5, Paragraph, List, Text, Box, ListItem, PrintBreak } from '@/components';
import { usePrefix } from '@/utils/functions';

const P = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const PREFIX = 'coderyLabs.projects.';

export const CoderyLabs: FC = () => {
  const adminPanel = usePrefix(PREFIX + 'adminPanel');
  const customMade = usePrefix(PREFIX + 'customMade');
  const vse = usePrefix(PREFIX + 'vse');
  const zdolniaki = usePrefix(PREFIX + 'zdolniaki');
  return (
    <Description>
      <H5>projects</H5>

      <Box>
        <P>
          <Text>{adminPanel()}</Text>
          <List>
            <ListItem>{adminPanel('position')}</ListItem>
            <ListItem>{adminPanel('tech')}</ListItem>
            <ListItem>{adminPanel('tests')}</ListItem>
          </List>
        </P>

        <PrintBreak />

        <P>
          <Text>{customMade()}</Text>
          <List>
            <ListItem>{customMade('position')}</ListItem>
            <ListItem>{customMade('tech')}</ListItem>
          </List>
        </P>

        <P>
          <Text>{vse()}</Text>
          <List>
            <ListItem>{vse('position')}</ListItem>
            <ListItem>{vse('tech')}</ListItem>
          </List>
        </P>

        <P>
          <Text>{zdolniaki()}</Text>
          <List>
            <ListItem>{zdolniaki('position')}</ListItem>
            <ListItem>{zdolniaki('tech')}</ListItem>
            <ListItem>{zdolniaki('tests')}</ListItem>
          </List>
        </P>
      </Box>
    </Description>
  );
};

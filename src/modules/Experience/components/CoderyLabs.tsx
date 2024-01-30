import { Description, H5, Paragraph, List, Text, Box, ListItem } from '@/components';
import { FC } from 'react';
import styled from '@emotion/styled';

type Props = {};

const P = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CoderyLabs: FC<Props> = ({}) => {
  return (
    <Description>
      <H5>projects</H5>

      <Box>
        <P>
          <Text>adminPanel</Text>
          <List>
            <ListItem>adminPanelPosition</ListItem>
            <ListItem>adminPanelTechs</ListItem>
            <ListItem>adminPanelTests</ListItem>
          </List>
        </P>

        <P>
          <Text>customMade</Text>
          <List>
            <ListItem>customMadePosition</ListItem>
            <ListItem>customMadeTechs</ListItem>
          </List>
        </P>

        <P>
          <Text>vse</Text>
          <List>
            <ListItem>vsePosition</ListItem>
            <ListItem>vseTechs</ListItem>
          </List>
        </P>

        <P>
          <Text>zdolniaki</Text>
          <List>
            <ListItem>zdolniakiPosition</ListItem>
            <ListItem>zdolniakiTechs</ListItem>
            <ListItem>zdolniakiTests</ListItem>
          </List>
        </P>
      </Box>
    </Description>
  );
};

import { FC } from 'react';
import styled from '@emotion/styled';
import { Description, H5, Paragraph, List, Text, Box, ListItem } from '@/components';
import { usePrefix } from '@/utils/functions';

const P = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Ibm: FC = () => {
  const s = usePrefix('ibm.projects.apptioBi');

  return (
    <Description>
      <H5>projects</H5>

      <Box>
        <P>
          <Text>{s('name')}</Text>
          <List>
            <ListItem>{s('description')}</ListItem>
            <ListItem>{s('tech')}</ListItem>
            <ListItem>{s('tests')}</ListItem>
          </List>
        </P>
      </Box>
    </Description>
  );
};

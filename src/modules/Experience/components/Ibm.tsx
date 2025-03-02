import { FC } from 'react';
import styled from '@emotion/styled';
import { Description, H5, Paragraph, List, Text, Box, ListItem } from '@/components';

type Props = {};

const P = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Ibm: FC<Props> = ({}) => {
  return (
    <Description>
      <H5>projects</H5>

      <Box>
        <P>
          <Text>apptioBi</Text>
          <List>
            <ListItem>abiDescription</ListItem>
            <ListItem>abiTech</ListItem>
            <ListItem>abiTests</ListItem>
          </List>
        </P>
      </Box>
    </Description>
  );
};

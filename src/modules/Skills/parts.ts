import styled from '@emotion/styled';
import { List, ListItem } from '@/components';

export const HorizontalList = styled(List)`
  margin-left: -1rem;
`;

export const HItem = styled(ListItem)`
  margin-left: 1rem;
  float: left;
`;

export const DiscreetList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const DiscreetLi = styled.li`
  color: ${({ theme }) => theme.colors.contrast};
  line-height: 1.5rem;
`;

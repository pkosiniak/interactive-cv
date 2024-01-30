import styled from '@emotion/styled';
import { FC } from 'react';
import { Contact } from '../Contact';
import { Languages } from '../Languages';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 6.5cm;
  padding-top: 2.5cm;
  padding-left: 1cm;
  padding-right: 0.5cm;
  background-color: ${({ theme }) => theme.colors.main};
  &, div, h4 {
    color: ${({ theme }) => theme.colors.contrast};
  }
  gap: 30px;
`;

type Props = {};

export const SidePanel: FC<Props> = ({}) => {
  return (
    <Aside>
      <Contact isOnSide />

      <Languages />
    </Aside>
  );
};

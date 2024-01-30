import { LightsToggle } from '@/components/LightsToggle';
import styled from '@emotion/styled';
import { FC } from 'react';

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: solid 1px ${({ theme }) => theme.colors.light};
  padding: 5px 10px;
`;

type Props = {};

export const ControlPanel: FC<Props> = ({}) => {
  return (
    <MenuWrapper>
      <LightsToggle />
    </MenuWrapper>
  );
};

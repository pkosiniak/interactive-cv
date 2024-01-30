import { LightsToggle } from './components';
import styled from '@emotion/styled';
import { FC } from 'react';
import { FontSizeControls } from './components/FontSizeControls';

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.veryLight};
  border-bottom: solid 1px ${({ theme }) => theme.colors.mediumLight};
  padding: 5px 10px;
  display: flex;
  justify-content: space-evenly;
`;

type Props = {};

export const ControlPanel: FC<Props> = ({}) => {
  return (
    <MenuWrapper>
      <FontSizeControls />
      <LightsToggle />
    </MenuWrapper>
  );
};

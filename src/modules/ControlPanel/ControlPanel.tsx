import { FontSizeToggle, LanguageSwitch, LightsToggle, SidePanelToggle, ViewToggle } from './components';
import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { Navigation24Filled } from '@fluentui/react-icons';
import { css } from '@emotion/react';
import { ToggleButton } from '@/components';

const toRight = css`
  left: auto;
  right: calc(41px - 100%);
  flex-direction: row;
`;

type WrapperProps = {
  toLeft: boolean;
};

const MenuWrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.veryLight};
  border-bottom: solid 1px ${({ theme }) => theme.colors.mediumLight};
  padding: 5px 10px;
  display: flex;
  flex-direction: row-reverse;

  ${({ toLeft }) => (toLeft ? '' : toRight)}
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  @media print {
    * {
      display: none;
    }
  }
`;

type Props = {};

export const ControlPanel: FC<Props> = ({}) => {
  const [showControlPanel, setShowControlPanel] = useState(false);

  return (
    <Wrapper>
      <MenuWrapper toLeft={showControlPanel}>
        <ToggleButton openIcon={<Navigation24Filled />} onChange={setShowControlPanel} />
        <ControlsWrapper>
          <ViewToggle />
          <SidePanelToggle />
          <FontSizeToggle />
          <LightsToggle />
          <LanguageSwitch />
        </ControlsWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};

import { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { ChevronLeft24Filled } from '@fluentui/react-icons';
import { css } from '@emotion/react';
import { ToggleButton } from '@/components';
import { flagsSelector } from '@/store';
import { FontSizeToggle, LanguageSwitch, LightsToggle, SidePanelToggle, ViewToggle } from './components';

const CONTROL_PANEL = 'CONTROL_PANEL';

const toRight = css`
  left: auto;
  right: calc(41px - 100%);
  @media only screen and (max-width: 800px) {
    right: calc(44px - 100%);
  }
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
    #${CONTROL_PANEL} {
      display: none;
    }
  }
`;

type Props = {};

export const ControlPanel: FC<Props> = ({}) => {
  const [showControlPanel, setShowControlPanel] = useState(false);
  const { isMobile } = useRecoilValue(flagsSelector);

  return (
    <Wrapper>
      <MenuWrapper toLeft={showControlPanel} id={CONTROL_PANEL}>
        <ToggleButton openIcon={<ChevronLeft24Filled />} onChange={setShowControlPanel} />

        <ControlsWrapper>
          {!isMobile && <ViewToggle />}

          <FontSizeToggle />

          {!isMobile && <SidePanelToggle />}

          <LightsToggle />

          <LanguageSwitch />
        </ControlsWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};

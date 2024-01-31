import { FC, useCallback, useMemo } from 'react';
import {
  PanelLeftContract20Regular,
  PanelLeftContract20Filled,
  PanelLeftExpand20Regular,
  PanelLeftExpand20Filled,
} from '@fluentui/react-icons';
import { IconContainer, Toggle } from './parts';
import { useRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';
import { sidePanelAtom } from '@/store';

type Props = {};

export const SidePanelToggle: FC<Props> = ({}) => {
  const [isExpanded, setIsExpanded] = useRecoilState(sidePanelAtom);

  const theme = useTheme();

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.main, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  const handleClick = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <Toggle onClick={handleClick}>
      <IconContainer style={!isExpanded ? highlight : undefined}>
        {isExpanded ? <PanelLeftContract20Regular /> : <PanelLeftContract20Filled />}
      </IconContainer>

      <IconContainer style={isExpanded ? highlight : undefined}>
        {isExpanded ? <PanelLeftExpand20Filled /> : <PanelLeftExpand20Regular />}
      </IconContainer>
    </Toggle>
  );
};

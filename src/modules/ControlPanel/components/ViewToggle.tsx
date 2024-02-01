import { FC, useCallback, useMemo } from 'react';
import {
  DocumentPrint20Regular,
  DocumentPrint20Filled,
  DocumentWidth20Regular,
  DocumentWidth20Filled,
} from '@fluentui/react-icons';
import { IconContainer, Toggle } from './parts';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';
import { VIEW, fontSizeAtom, largeFontStateAtom, responsiveViewAtom, viewAtom } from '@/store';
import { FONT_SIZE } from '@/styles';

type Props = {};

export const ViewToggle: FC<Props> = ({}) => {
  const setView = useSetRecoilState(viewAtom);
  const [isRegular, setIsRegular] = useRecoilState(responsiveViewAtom);
  const setFontSize = useSetRecoilState(fontSizeAtom);
  const setIsLarge = useSetRecoilState(largeFontStateAtom);

  const theme = useTheme();

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.main, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  const handleClick = useCallback(() => {
    const next = !isRegular;
    setIsRegular(next);
    setView(next ? VIEW.PRINT : VIEW.RESPONSIVE);
    setIsLarge(next);
    setFontSize(next ? FONT_SIZE.LARGE : FONT_SIZE.SMALL);
  }, [isRegular]);

  return (
    <Toggle onClick={handleClick}>
      <IconContainer style={!isRegular ? highlight : undefined}>
        {isRegular ? <DocumentPrint20Regular /> : <DocumentPrint20Filled />}
      </IconContainer>

      <IconContainer style={isRegular ? highlight : undefined}>
        {isRegular ? <DocumentWidth20Filled /> : <DocumentWidth20Regular />}
      </IconContainer>
    </Toggle>
  );
};

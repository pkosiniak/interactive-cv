import { FC, useCallback, useMemo } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  DocumentPrint20Regular,
  DocumentPrint20Filled,
  DocumentWidth20Regular,
  DocumentWidth20Filled,
} from '@fluentui/react-icons';
import { useTheme } from '@emotion/react';
import { fontSizeAtom, largeFontStateAtom, viewAtom } from '@/store';
import { FONT_SIZE } from '@/styles';
import { IconContainer, Toggle } from './parts';

type Props = {};

export const ViewToggle: FC<Props> = ({}) => {
  const [isRegular, setIsRegular] = useRecoilState(viewAtom);
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

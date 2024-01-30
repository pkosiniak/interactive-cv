import { FC, useCallback, useMemo } from 'react';
import {
  FontDecrease20Regular,
  FontIncrease20Regular,
  FontDecrease20Filled,
  FontIncrease20Filled,
} from '@fluentui/react-icons';
import { IconContainer, Toggle } from './parts';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { fontSizeAtom, largeFontStateAtom } from '@/store';
import { FONT_SIZE } from '@/styles';
import { useTheme } from '@emotion/react';

type Props = {};

export const FontSizeControls: FC<Props> = ({}) => {
  const setFontSize = useSetRecoilState(fontSizeAtom);
  const [isLarge, setIsLarge] = useRecoilState(largeFontStateAtom);

  const theme = useTheme();

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.main, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  const handleClick = useCallback(() => {
    setIsLarge(prev => !prev);
    setFontSize(prev => (prev === FONT_SIZE.LARGE ? FONT_SIZE.SMALL : FONT_SIZE.LARGE));
  }, []);

  return (
    <Toggle onClick={handleClick}>
      {/* <TextFontSize20Regular /> */}

      <IconContainer style={!isLarge ? highlight : undefined}>
        {isLarge ? (
          <FontDecrease20Regular width={16} style={{ fontSize: 16 }} />
        ) : (
          <FontDecrease20Filled width={16} style={{ fontSize: 16 }} />
        )}

        {/* <TextFontRegular /> */}
      </IconContainer>

      <IconContainer style={isLarge ? highlight : undefined}>
        {isLarge ? (
          <FontIncrease20Filled width={16} style={{ fontSize: 16 }} />
        ) : (
          <FontIncrease20Regular width={16} style={{ fontSize: 16 }} />
        )}
        {/* <TextFont16Regular /> */}
      </IconContainer>
    </Toggle>
  );
};

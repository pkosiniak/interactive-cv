import { FC, useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import {
  WeatherSunny20Regular,
  WeatherSunny20Filled,
  WeatherMoon20Regular,
  WeatherMoon20Filled,
} from '@fluentui/react-icons';
import { useTheme } from '@emotion/react';
import { darkModeAtom } from '@/store';
import { IconContainer, Toggle } from './parts';

type Props = {};

export const LightsToggle: FC<Props> = ({}) => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  const theme = useTheme();

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.main, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  const handleClick = useCallback(() => {
    const next = !isDarkMode;
    setIsDarkMode(next);
  }, [isDarkMode]);

  return (
    <Toggle onClick={handleClick}>
      <IconContainer style={!isDarkMode ? highlight : undefined}>
        {isDarkMode ? <WeatherSunny20Filled /> : <WeatherSunny20Regular />}
      </IconContainer>
      <IconContainer style={isDarkMode ? highlight : undefined}>
        {!isDarkMode ? <WeatherMoon20Regular /> : <WeatherMoon20Filled />}
      </IconContainer>
    </Toggle>
  );
};

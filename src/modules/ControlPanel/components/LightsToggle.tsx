import { FC, useCallback, useMemo } from 'react';
import {
  WeatherSunny20Regular,
  WeatherSunny20Filled,
  WeatherMoon20Regular,
  WeatherMoon20Filled,
} from '@fluentui/react-icons';
import { useTheme } from '@emotion/react';
import { themeDark, themeLight } from '@/styles/theme';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { darkModeAtom, themeAtom } from '@/store';
import { IconContainer, Toggle } from './parts';



type Props = {};

export const LightsToggle: FC<Props> = ({}) => {
  const setCurrentTheme = useSetRecoilState(themeAtom);
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  const theme = useTheme();

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.main, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  const handleClick = useCallback(() => {
    const next = !isDarkMode;
    setCurrentTheme(next ? themeDark : themeLight);
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

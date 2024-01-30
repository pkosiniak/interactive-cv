import styled from '@emotion/styled';
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { Button } from './Button';
import {
  WeatherSunny16Regular,
  WeatherSunny16Filled,
  WeatherMoon16Regular,
  WeatherMoon16Filled,
} from '@fluentui/react-icons';
import { useTheme } from '@emotion/react';
import { ThemeContext } from '@/store';
import { themeDark, themeLight } from '@/styles/theme';

const Toggle = styled(Button)`
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.light};
  border-radius: 50px;
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 4px;
`;

type Props = {};

export const LightsToggle: FC<Props> = ({}) => {
  const { dispatch, value } = useContext(ThemeContext);

  const [isLight, setIsLight] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    dispatch({ theme: isLight ? themeLight : themeDark });
  }, [isLight]);

  const highlight = useMemo(
    () => ({ backgroundColor: theme.colors.sidePanel, color: theme.colors.contrast, fill: theme.colors.contrast }),
    [theme]
  );

  return (
    <Toggle onClick={() => setIsLight(prev => !prev)}>
      <IconContainer style={!isLight ? highlight : undefined}>
        {isLight ? <WeatherMoon16Regular /> : <WeatherMoon16Filled />}
      </IconContainer>
      <IconContainer style={isLight ? highlight : undefined}>
        {isLight ? <WeatherSunny16Filled /> : <WeatherSunny16Regular />}
      </IconContainer>
    </Toggle>
  );
};

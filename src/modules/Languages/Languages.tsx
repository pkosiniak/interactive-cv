import { H4, InlineText, Text } from '@/components';
import { FC } from 'react';
import { Wrapper } from './parts';
import { useTheme } from '@emotion/react';

type Props = {};

export const Languages: FC<Props> = ({}) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <H4>languages</H4>

      <Text text={'english'}>
        {' '}
        <InlineText color={theme.colors.light}>fullProfessional</InlineText>
      </Text>
    </Wrapper>
  );
};

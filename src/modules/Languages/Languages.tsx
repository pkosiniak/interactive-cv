import { FC } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexBox, H4, InlineText, Text } from '@/components';

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

type Props = {};

export const Languages: FC<Props> = ({}) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <H4>languages</H4>

      <Text text={'english'}>
        {' '}
        <InlineText color={theme.colors.mediumLight}>fullProfessional</InlineText>
      </Text>
    </Wrapper>
  );
};

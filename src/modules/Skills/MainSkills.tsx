import { FC } from 'react';
import { FlexBox, H4 } from '@/components';
import styled from '@emotion/styled';
import { DiscreetLi, DiscreetList } from './parts';
import { mainSkills } from './constants';

type Props = {};

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
`;

export const MainSkills: FC<Props> = ({}) => {
  return (
    <Wrapper>
      <H4>mainSkills</H4>

      <DiscreetList>
        {mainSkills.map((value, index) => (
          <DiscreetLi key={index}>{value}</DiscreetLi>
        ))}
      </DiscreetList>
    </Wrapper>
  );
};

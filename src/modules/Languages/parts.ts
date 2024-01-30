import { FlexBox } from '@/components';
import styled from '@emotion/styled';

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

export const Container = styled(FlexBox)`
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

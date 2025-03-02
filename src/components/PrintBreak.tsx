import styled from '@emotion/styled';
import { FC } from 'react';
import { PRINT_BREAK } from '@/styles';

const Break = styled.div`
  @media print {
    margin-bottom: 2cm;
  }
`;

export const PrintBreak: FC = () => {
  return <Break className={PRINT_BREAK} />;
};

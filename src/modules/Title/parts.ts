import { H3 } from '@/components';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
`;

export const PhotoContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const Photo = styled.img`
  border-radius: 666px;
`;

export const LightH3 = styled(H3)`
  font-weight: 400;
`;

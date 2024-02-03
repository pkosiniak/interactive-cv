import { FC, ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export const Image = styled.img`
  margin-top: 5px;
`;

const SIZE = 50;

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  size?: number;
};

export const Logo: FC<Props> = ({ size = SIZE, ...props }) => {
  return <Image width={size} height={size} {...props} />;
};

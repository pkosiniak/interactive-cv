import styled from '@emotion/styled';
import { FC, ImgHTMLAttributes } from 'react';

export const Image = styled.img``;

const SIZE = 50;

export const Logo: FC<ImgHTMLAttributes<HTMLImageElement>> = props => {
  return <Image width={SIZE} height={SIZE} {...props} />;
};

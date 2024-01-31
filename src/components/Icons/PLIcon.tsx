import { FC } from 'react';
import { Icon, IconProps } from './Icon';

type Props = IconProps;

export const PLIcon: FC<Props> = ({ ...props }) => {
  return (
    <Icon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='28' viewBox='0 0 18 13.5'>
        <rect width='16' height='10' fill='#fff' style={{ fill: '#fff' }} />
        <rect width='16' height='5' fill='#dc143c' style={{ fill: '#dc143c' }} y='5' />
      </svg>
    </Icon>
  );
};

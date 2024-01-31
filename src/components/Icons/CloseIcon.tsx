import { FC } from 'react';
import { Icon, IconProps } from './Icon';

type Props = IconProps;

export const CloseIcon: FC<Props> = ({ ...props }) => {
  return (
    <Icon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'>
        <path
          d='M1169 1024l879 879-145 145-879-879-879 879L0 1903l879-879L0 145 145 0l879 879L1903 0l145 145-879 879z'
          fill='#333333'
        ></path>
      </svg>
    </Icon>
  );
};

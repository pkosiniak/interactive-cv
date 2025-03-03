import { FC } from 'react';
import { Description, Text } from '@/components';
import { usePrefix } from '@/utils/functions';

export const Freelancing2: FC = () => {
  const s = usePrefix('freelancing2');

  return (
    <Description>
      <Text>{s('description')}</Text>
    </Description>
  );
};

import { FC } from 'react';
import { Description, Text } from '@/components';
import { usePrefix } from '@/utils/functions';

export const Freelancing: FC = () => {
  const s = usePrefix('freelancing');

  return (
    <Description>
      <Text>{s('description')}</Text>
    </Description>
  );
};

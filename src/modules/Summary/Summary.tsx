import { Section, H2, Text } from '@/components';
import { FC } from 'react';

type Props = {};

export const Summary: FC<Props> = ({}) => {
  return (
    <Section>
      <H2>summaryTitle</H2>

      <Text>summaryText</Text>
    </Section>
  );
};

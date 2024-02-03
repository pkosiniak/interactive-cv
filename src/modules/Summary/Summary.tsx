import { FC } from 'react';
import { Section, H2 } from '@/components';
import { SummaryText } from './parts';

type Props = {};

export const Summary: FC<Props> = ({}) => {
  return (
    <Section>
      <H2>summaryTitle</H2>

      <SummaryText>summaryText</SummaryText>
    </Section>
  );
};

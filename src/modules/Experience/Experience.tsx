import { FC } from 'react';
import { Section } from '@/components/Section';
import { H2 } from '@/components';
import { CoderyLabs, Xkom, Acoustician, SoundEditor, Freelancing, Freelancing2, Ibm } from './components';
import { Job } from '../Job';

export const Experience: FC = () => {
  return (
    <Section>
      <H2>experience</H2>

      <Job company='ibm' location imgSrc='./assets/ibmLogo.png'>
        <Ibm />
      </Job>

      <Job company='freelancing2'>
        <Freelancing2 />
      </Job>

      <Job company='coderyLabs' location imgSrc='./assets/coderylabs_logo.jfif'>
        <CoderyLabs />
      </Job>

      <Job company='freelancing'>
        <Freelancing />
      </Job>

      <Job company='xkom' location imgSrc='./assets/x_kom_pl_logo.jfif'>
        <Xkom />
      </Job>

      <Job company='acoustician'>
        <Acoustician />
      </Job>

      <Job company='soundEditor'>
        <SoundEditor />
      </Job>
    </Section>
  );
};

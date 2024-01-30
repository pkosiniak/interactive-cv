import { FC } from 'react';
import { Job } from '../Job/Job';
import { Section } from '@/components/Section';
import { H2 } from '@/components';
import { CoderyLabs, Xkom, Acoustician, SoundEditor } from './components';

type Props = {};

export const Experience: FC<Props> = ({}) => {
  return (
    <Section>
      <H2>experience</H2>

      <Job
        company='coderyLabs'
        position='fullStack'
        duration='coderyDuration'
        location='cracowLocation'
        imgSrc='./assets/coderylabs_logo.jfif'
      >
        <CoderyLabs />
      </Job>

      <Job company='freelancing' position='softwareEngineer' duration='freelancingDuration'></Job>

      <Job company='xkom' position='frontendInternship' duration='xkomDuration' location='cracowLocation' imgSrc='./assets/x_kom_pl_logo.jfif'>
        <Xkom />
      </Job>

      <Job company='freelancing' position='acoustician' duration='acousticianDuration'>
        <Acoustician />
      </Job>

      <Job company='freelancing' position='soundEditor' duration='soundEditorDuration'>
        <SoundEditor />
      </Job>
    </Section>
  );
};

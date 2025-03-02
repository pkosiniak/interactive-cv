import { FC } from 'react';
import { Section } from '@/components/Section';
import { H2 } from '@/components';
import { CoderyLabs, Xkom, Acoustician, SoundEditor, Freelancing, Freelancing2, Ibm } from './components';
import { Job } from '../Job/Job';
import {} from './components/Freelancing';

type Props = {};

export const Experience: FC<Props> = ({}) => {
  return (
    <Section>
      <H2>experience</H2>

      <Job
        company='ibm'
        position='seniorEngineer'
        duration='ibmDuration'
        location='cracowLocation'
        imgSrc='./assets/ibmLogo.png'
      >
        <Ibm />
      </Job>

      <Job company='freelancing' position='softwareEngineer' duration='freelancingDuration2'>
        <Freelancing2 />
      </Job>

      <Job
        company='coderyLabs'
        position='fullStack'
        duration='coderyDuration'
        location='cracowLocation'
        imgSrc='./assets/coderylabs_logo.jfif'
      >
        <CoderyLabs />
      </Job>

      <Job company='freelancing' position='softwareEngineer' duration='freelancingDuration'>
        <Freelancing />
      </Job>

      <Job
        company='xkom'
        position='frontendInternship'
        duration='xkomDuration'
        location='cracowLocation'
        imgSrc='./assets/x_kom_pl_logo.jfif'
      >
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

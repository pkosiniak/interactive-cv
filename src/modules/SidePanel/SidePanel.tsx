import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { viewAtom } from '@/store';
import { Languages } from '../Languages';
import { Contact } from '../Contact';
import { MainSkills } from '../Skills/MainSkills';

const printView = css`
  width: 6.5cm;
  padding-top: 2.5cm;
  padding-left: 1cm;
  padding-right: 0.5cm;
`;

const regularView = css`
  width: 375px;
  padding-top: 80px;
  padding-right: 40px;
  padding-left: 40px;
`;

const Aside = styled.aside<{ isRegular: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isRegular }) => (isRegular ? regularView : printView)}

  background-color: ${({ theme }) => theme.colors.sidePanel};

  &,
  div,
  h4 {
    color: ${({ theme }) => theme.colors.contrast};
  }
  gap: 30px;
`;

type Props = {};

export const SidePanel: FC<Props> = ({}) => {
  const isRegular = useRecoilValue(viewAtom);

  return (
    <Aside isRegular={isRegular}>
      <Contact isOnSide />

      <MainSkills />

      <Languages />
    </Aside>
  );
};

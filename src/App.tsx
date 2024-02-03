import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { AppContainer } from './AppContainer';

export const App: FC = ({}) => {
  return (
    <RecoilRoot>
      <AppContainer />
    </RecoilRoot>
  );
};

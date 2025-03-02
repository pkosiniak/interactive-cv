import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { RecoilURLSyncJSON } from 'recoil-sync';
import { AppContainer } from './AppContainer';

export const App: FC = ({}) => {
  return (
    <RecoilRoot>
      <RecoilURLSyncJSON location={{ part: 'queryParams' }}>
        <AppContainer />
      </RecoilURLSyncJSON>
    </RecoilRoot>
  );
};

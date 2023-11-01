import { FC } from 'react';
import ScheduleGroups from './UI/components/schedulesGroup';
import * as S from './App.styles';

const App: FC = (): JSX.Element => {

  return (
    <S.Container>
      <ScheduleGroups />
    </S.Container>
  )
};

export default App;

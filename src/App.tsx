import { FC } from 'react';
import * as Style from './App.styles';
import ScheduleGroups from './UI/components/schedulesGroup';

const App: FC = (): JSX.Element => {
  return (
    <Style.Container>
      <ScheduleGroups />
    </Style.Container>
  )
};

export default App;

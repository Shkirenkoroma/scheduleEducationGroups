import { FC } from 'react'
import ScheduleGroups from './components/schedulesGroup'
import * as Style from './App.styles'

const App: FC = (): JSX.Element => {
  return (
    <Style.Container>
      <ScheduleGroups />
    </Style.Container>
  )
};

export default App;

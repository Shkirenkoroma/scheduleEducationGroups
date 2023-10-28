import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getScheduleGroups } from 'src/store/reducer/getScheduleGroups';
import { sendDataStudentGroups } from 'src/store/reducer/sendDataStudentGroups';
import * as Style from './index.styles';
import ScheduleGroupsItem from './scheduleGroupsItem';

const ScheduleGroups: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const dataEducationGroups = useAppSelector(
    (state: any) => state.educationGroups.educationGroups,
  );

  useEffect(() => {
    dispatch(getScheduleGroups())
  }, []);

  return (
    <Style.ScheduleGroupsContainer>
      <Style.ScheduleGroupsContainerContent>
        {dataEducationGroups.map((educationGroupsItem: any) => (
          <ScheduleGroupsItem
            educationGroupsItem={educationGroupsItem}
            key={Math.random()}
          />
        ))}
      </Style.ScheduleGroupsContainerContent>
      <button style={{marginLeft:30}} onClick={()=>dispatch(sendDataStudentGroups())}>Сохранить</button>
    </Style.ScheduleGroupsContainer>
  )
};

export default ScheduleGroups;

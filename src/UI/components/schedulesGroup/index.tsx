import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataEducationGroups } from 'src/store/selectors';
import { getScheduleGroups } from 'src/store/thunks/getScheduleGroups';
import { sendDataStudentGroups } from 'src/store/thunks/sendDataStudentGroups';
import Button from 'src/UI/shared/button';
import { DataGroup } from 'src/store/types/types';
import ScheduleGroupsItem from './scheduleGroupsItem';
import * as Style from './index.styles';

const ScheduleGroups: FC = (): JSX.Element => {
  const dataGroupStudents = useAppSelector(dataEducationGroups);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getScheduleGroups())
  }, []);

  return (
    <Style.ScheduleGroupsContainer>
      <Style.ScheduleGroupsContainerContent>
        {dataGroupStudents.map((educationGroupsItem: DataGroup) => (
          <ScheduleGroupsItem
            educationGroupsItem={educationGroupsItem}
            key={Math.random()}
          />
        ))}
      </Style.ScheduleGroupsContainerContent>
      <Button style={{marginLeft:30}} onClick={()=>dispatch(sendDataStudentGroups())} buttonName="Сохранить"/>
    </Style.ScheduleGroupsContainer>
  )
};

export default ScheduleGroups;

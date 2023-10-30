import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataEducationGroups, dataForm } from 'src/store/selectors';
import { sendDataStudentGroups } from 'src/store/thunks/sendDataStudentGroups';
import { getScheduleGroups } from 'src/store/thunks/getScheduleGroups';
import Button from 'src/UI/shared/button';
import { DataGroup } from 'src/store/types/types';
import ScheduleGroupsItem from './scheduleGroupsItem';
import * as Style from './index.styles';

const ScheduleGroups: FC = (): JSX.Element => {
  const dataGroupStudents = useAppSelector(dataEducationGroups);
  const dataFormField = useAppSelector(dataForm);
  const dispatch = useAppDispatch();
  const array = Array.from(dataFormField);

  useEffect(() => {
    dispatch(getScheduleGroups())
  }, []);

  return (
    <Style.ScheduleGroupsContainer>
      <Style.ScheduleGroupsContainerContent>
        {dataGroupStudents.map(
          (educationGroupsItem: DataGroup, index: number) => (
            <ScheduleGroupsItem
              educationGroupsItem={educationGroupsItem}
              key={index}
              index={index}
            />
          ),
        )}
      </Style.ScheduleGroupsContainerContent>
      <Button
        style={{
          marginLeft: 30,
          backgroundColor: '#198754',
          border: 'none',
          padding: 10,
          borderRadius: 3,
          color: '#ffffff',
          cursor: 'pointer',
        }}
        onClick={() => dispatch(sendDataStudentGroups( array ))}
        buttonName="Сохранить"
      />
    </Style.ScheduleGroupsContainer>
  )
}

export default ScheduleGroups;

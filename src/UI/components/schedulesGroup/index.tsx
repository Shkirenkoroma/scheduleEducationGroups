import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataEducationGroups, getDataForm } from 'src/store/selectors';
import { sendDataStudentGroups } from 'src/store/thunks/sendDataStudentGroups';
import { getScheduleGroups } from 'src/store/thunks/getScheduleGroups';
import Button from 'src/UI/shared/button';
import { DataGroup } from 'src/store/types/types';
import ScheduleGroupsItem from './scheduleGroupsItem';
import * as S from './index.styles';

const ScheduleGroups: FC = (): JSX.Element => {
  const dataGroupStudents = useAppSelector(dataEducationGroups);
  const dataFormField = useAppSelector(getDataForm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getScheduleGroups());
  }, []);

  return (
    <S.ScheduleGroupsContainer>
      <S.ScheduleGroupsContainerContent>
        {dataGroupStudents.map((_: DataGroup, index: number) => (
          <ScheduleGroupsItem key={index} tableNumber={index} />
        ))}
      </S.ScheduleGroupsContainerContent>
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
        onClick={() => dispatch(sendDataStudentGroups(dataFormField))}
        buttonName="Сохранить"
      />
    </S.ScheduleGroupsContainer>
  );
};

export default ScheduleGroups;

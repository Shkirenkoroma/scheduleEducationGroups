import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataEducationGroups, getDataForm, loading } from 'src/store/selectors';
import { sendDataStudentGroups } from 'src/store/thunks/sendDataStudentGroups';
import { getScheduleGroups } from 'src/store/thunks/getScheduleGroups';
import { Hourglass } from 'react-loader-spinner';
import Button from 'src/UI/shared/button';
import { DataGroup } from 'src/store/types/types';
import ScheduleGroupsItem from './scheduleGroupsItem';
import * as S from './index.styles';

const ScheduleGroups: FC = (): JSX.Element => {
  const dataGroupStudents = useAppSelector(dataEducationGroups);
  const dataFormField = useAppSelector(getDataForm);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loading);

  useEffect(() => {
    dispatch(getScheduleGroups())
  }, []);

  return (
    <>
      {isLoading ? (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          wrapperStyle={{ maxWidth: '75', width: '100', position: 'absolute', top: '50%', left: '50%'}}
          colors={[ '#306cce', '#72a1ed' ]}
        />
      ) : (
        <S.ScheduleGroupsContainer>
          <S.ScheduleGroupsContainerContent>
            {dataGroupStudents.map((_: DataGroup, index: number) => (
              <ScheduleGroupsItem key={index} tableNumber={index} />
            ))}
          </S.ScheduleGroupsContainerContent>
          <Button
            onClick={() => dispatch(sendDataStudentGroups(dataFormField))}
            buttonName="Сохранить"
          />
        </S.ScheduleGroupsContainer>
      )}
    </>
  )
};

export default ScheduleGroups;

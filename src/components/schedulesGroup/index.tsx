import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getScheduleGroups } from 'src/store/reducer/getScheduleGroups';
import * as Style from './index.styles';
import ScheduleGroupsItem from './scheduleGroupsItem';

const ScheduleGroups: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const dataEducationGroups = useAppSelector(
    (state: any) => state.educationGroups.educationGroups,
  )

  useEffect(() => {
    dispatch(getScheduleGroups())
  }, []);

  return (
    <Style.ScheduleGroupsContainer>
      {dataEducationGroups.map((educationGroupsItem: any) => (
        <ScheduleGroupsItem educationGroupsItem={educationGroupsItem} />
      ))}
    </Style.ScheduleGroupsContainer>
  )
}

export default ScheduleGroups

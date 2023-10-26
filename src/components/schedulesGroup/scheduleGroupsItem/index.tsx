import { FC } from 'react';
import * as Style from './index.styles';

const ScheduleGroupsItem: FC<any> = ({ educationGroupsItem }): JSX.Element => {
  return (
    <Style.ScheduleGroupsContainerItemContainer>
      <Style.EducationGroupHeader>
        <Style.EducationGroupNameHeader>
          <Style.EducationGroupTitle>
            {educationGroupsItem.subjectName}
          </Style.EducationGroupTitle>
        </Style.EducationGroupNameHeader>
        <Style.EducationGroupDescriptionHeader>
          <Style.EducationGroupDescriptionItemHeader>
            <Style.EducationGroupDescriptionItemName>
              Группа
            </Style.EducationGroupDescriptionItemName>{' '}
            {educationGroupsItem.groupName}
          </Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemHeader>
            Курс {educationGroupsItem.course}
          </Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemHeader>
            Количество курсантов {educationGroupsItem.studentsNumber}
          </Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemHeader>
            Семестр {educationGroupsItem.semestr}
          </Style.EducationGroupDescriptionItemHeader>
        </Style.EducationGroupDescriptionHeader>
      </Style.EducationGroupHeader>
    </Style.ScheduleGroupsContainerItemContainer>
  )
}

export default ScheduleGroupsItem;

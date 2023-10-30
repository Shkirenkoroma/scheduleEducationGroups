import { FC } from 'react';
import { DataGroup } from 'src/store/types/types';
import { FaBookOpen } from 'react-icons/fa';
import * as Style from './index.styles';

interface HeaderProps {
  educationGroupsItem: DataGroup
};

const Header: FC<HeaderProps> = ({ educationGroupsItem }): JSX.Element => {
  return (
    <Style.EducationGroupHeader>
      <Style.EducationGroupNameHeader>
        <Style.EducationGroupTitle>
          <Style.EducationTitleName>
            <FaBookOpen /> {educationGroupsItem.subjectName}
          </Style.EducationTitleName>
        </Style.EducationGroupTitle>
      </Style.EducationGroupNameHeader>
      <Style.EducationGroupDescriptionHeader>
        <Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemName>
            Группа
          </Style.EducationGroupDescriptionItemName>
          {educationGroupsItem.groupName}
        </Style.EducationGroupDescriptionItemHeader>
        <Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemName>
            Курс
          </Style.EducationGroupDescriptionItemName>
          {educationGroupsItem.course}
        </Style.EducationGroupDescriptionItemHeader>
        <Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemName>
            Количество курсантов
          </Style.EducationGroupDescriptionItemName>
          {educationGroupsItem.studentsNumber}
        </Style.EducationGroupDescriptionItemHeader>
        <Style.EducationGroupDescriptionItemHeader>
          <Style.EducationGroupDescriptionItemName>
            Семестр
          </Style.EducationGroupDescriptionItemName>
          {educationGroupsItem.semestr}
        </Style.EducationGroupDescriptionItemHeader>
      </Style.EducationGroupDescriptionHeader>
    </Style.EducationGroupHeader>
  )
};

export default Header;

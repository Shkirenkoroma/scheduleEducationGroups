import { FC } from 'react';
import { DataGroup } from 'src/store/types/types';
import { FaBookOpen } from 'react-icons/fa';
import * as S from './index.styles';

interface HeaderProps {
  educationGroupsItem: DataGroup;
};

const Header: FC<HeaderProps> = ({ educationGroupsItem }): JSX.Element => {
  return (
    <S.EducationGroupHeader>
      <S.EducationGroupNameHeader>
        <S.EducationGroupTitle>
          <S.EducationTitleName>
            <FaBookOpen /> {educationGroupsItem.subjectName}
          </S.EducationTitleName>
        </S.EducationGroupTitle>
      </S.EducationGroupNameHeader>
      <S.EducationGroupDescriptionHeader>
        <S.EducationGroupDescriptionItemHeader>
          <S.EducationGroupDescriptionItemName>
            Группа
          </S.EducationGroupDescriptionItemName>
          {educationGroupsItem.groupName}
        </S.EducationGroupDescriptionItemHeader>
        <S.EducationGroupDescriptionItemHeader>        
          {educationGroupsItem.course}
        </S.EducationGroupDescriptionItemHeader>
        <S.EducationGroupDescriptionItemHeader>
          <S.EducationGroupDescriptionItemName>
            Количество курсантов
          </S.EducationGroupDescriptionItemName>
          {educationGroupsItem.studentsNumber}
        </S.EducationGroupDescriptionItemHeader>
        <S.EducationGroupDescriptionItemHeader>
          <S.EducationGroupDescriptionItemName>
            Семестр
          </S.EducationGroupDescriptionItemName>
          {educationGroupsItem.semestr}
        </S.EducationGroupDescriptionItemHeader>
      </S.EducationGroupDescriptionHeader>
    </S.EducationGroupHeader>
  )
};

export default Header;

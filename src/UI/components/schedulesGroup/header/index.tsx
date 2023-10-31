import { FC } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useAppSelector } from 'src/hooks';
import { useTableContext } from '../scheduleGroupsItem/context';
import * as S from './index.styles';

const Header: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );

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
          <S.EducationGroupDescriptionItemName>
            Курс
          </S.EducationGroupDescriptionItemName>
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
  );
};

export default Header;

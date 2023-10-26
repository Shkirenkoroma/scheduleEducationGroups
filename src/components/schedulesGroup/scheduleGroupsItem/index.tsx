import { FC } from 'react';
import { useAppSelector } from 'src/hooks';
import * as Style from './index.styles';

const ScheduleGroupsItem: FC<any> = ({ educationGroupsItem }): JSX.Element => {
  const dataTeachers = useAppSelector(
    (state: any) => state.educationGroups.teachers,
  );

  const defaultValueOption = { id: '0', name: 'Вакансия' };
  const editionDataTeachers = [defaultValueOption, ...dataTeachers];

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
      <Style.Table>
        <Style.TableBody>
          <Style.TableRow>
            <Style.TableHead>Занятие</Style.TableHead>
            <Style.TableHead>Часы</Style.TableHead>
            <Style.TableHead>Преподаватель</Style.TableHead>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Лекции</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.lecturesHours}
            </Style.TableCeil>
            <Style.TableCeil>
              <Style.Select name="" id="">
                {editionDataTeachers.map((el: any) => (
                  <Style.SelectOption value="" selected>
                    {el.name}
                  </Style.SelectOption>
                ))}
              </Style.Select>
            </Style.TableCeil>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Лабораторные работы</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.laboratoryHours}
            </Style.TableCeil>
            <Style.TableCeil>
              <Style.Select name="" id="">
                {editionDataTeachers.map((el: any) => (
                  <Style.SelectOption value="">{el.name}</Style.SelectOption>
                ))}
              </Style.Select>
            </Style.TableCeil>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Практические семинарные</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.practicHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.practicHours ? (
                <Style.Select name="" id="">
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value="">{el.name}</Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value="">{el.name}</Style.SelectOption>
                  ))}
                </Style.Select>
              )}
            </Style.TableCeil>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Семинарские</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.seminarHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.practicHours ? (
                <Style.Select name="" id="">
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value="">{el.name}</Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value="">{el.name}</Style.SelectOption>
                  ))}
                </Style.Select>
              )}
            </Style.TableCeil>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Зачёт</Style.TableCeil>
            <Style.TableCeil></Style.TableCeil>
            <Style.TableCeil>
              <Style.Select name="" id="">
                {editionDataTeachers.map((el: any) => (
                  <Style.SelectOption value="">{el.name}</Style.SelectOption>
                ))}
              </Style.Select>
            </Style.TableCeil>
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>
              Примечание <br /> (для составления расписания)
            </Style.TableCeil>
            <Style.TableCeil></Style.TableCeil>
            <Style.TableCeil>
              <textarea
                name=""
                id=""
                cols={23}
                rows={2}
                style={{ resize: 'none', outline: 'none' }}
              ></textarea>
            </Style.TableCeil>
          </Style.TableRow>
        </Style.TableBody>
      </Style.Table>
    </Style.ScheduleGroupsContainerItemContainer>
  )
}

export default ScheduleGroupsItem;

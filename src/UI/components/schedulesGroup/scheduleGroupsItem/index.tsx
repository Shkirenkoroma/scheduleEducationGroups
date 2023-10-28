import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { DataGroup } from 'src/store/types/types';
import Button from 'src/UI/shared/button';
import { Input } from 'src/UI/shared/input';
import Select from 'src/UI/shared/select';
import TextArea from 'src/UI/shared/textarea';
import * as Style from './index.styles';

interface PropsScheduleGroupItem {
  educationGroupsItem: DataGroup
}

const ScheduleGroupsItem: FC<PropsScheduleGroupItem> = ({
  educationGroupsItem,
}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const [nameTeacherLector, setNameTeacherLector] = useState<string>('');
  const [nameTeacherLabor, setNameTeacherLabor] = useState<string>('');
  const [nameTeacherPractic, setNameTeacherPractic] = useState<string>('');
  const [nameTeacherSeminar, setNameTeacherSeminar] = useState<string>('');
  const [nameTeacherOffset, setNameTeacherOffset] = useState<string>('');
  const [nameTeacherExam, setNameTeacherExam] = useState<string>('');
  const [nameTeacherForAllExam, setNameTeacherForAllExam] = useState<string>(
    'Вакансия',
  );
  const [column, setColumn] = useState<boolean>(false);
  const [countStudentFirstGroup, setCountStudentFirstGroup] = useState<string>(
    ` ${Math.ceil(educationGroupsItem.studentsNumber / 2)}`,
  );
  const [countStudentSecondGroup, setCountStudentSecondGroup] = useState<
    string
  >(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`);

  const defaultValueOption = { id: '0', name: nameTeacherForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];

  const defaultValueOptionDisabled = { id: '0', name: 'Вакансия' };
  const editionDataTeachersDisabled = [
    defaultValueOptionDisabled,
    ...scheduleTeachers,
  ];

  const applyNameTeacherAllEducationGroup = (): void => {
    setNameTeacherForAllExam(nameTeacherLector)
  };

  const setTeacher = (valueOption: string): void => {
    setNameTeacherLector(valueOption)
  };

  const addColumnHandler = (): void => {
    setColumn(true)
  };

  const deleteColumnHandler = (): void => {
    setColumn(false)
  };

  const addCountStudentFirstGroup = (count: string): void => {
    setCountStudentFirstGroup(count)
  };

  const addCountStudentSecondGroup = (count: string): void => {
    setCountStudentSecondGroup(count)
  }

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
            <Style.TableHead>
              {column ? 'Подгруппа 1' : 'Преподаватель'}
              {!column && <Button onClick={addColumnHandler} buttonName="+" />}
            </Style.TableHead>
            {column && (
              <Style.TableHead>
                Подгруппа 2
                <Button onClick={deleteColumnHandler} buttonName="-" />
              </Style.TableHead>
            )}
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Лекции</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.lecturesHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.lecturesHours ? (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setTeacher(e.target.value)
                  }
                  value={nameTeacherLector}
                  editionDataTeachers={editionDataTeachers}
                />
              ) : (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setTeacher(e.target.value)
                  }
                  value={nameTeacherLector}
                  editionDataTeachers={editionDataTeachers}
                />
              )}
              <Button
                onClick={applyNameTeacherAllEducationGroup}
                buttonName="ApplyAllEnable"
              />
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.lecturesHours ? (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setTeacher(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  ></Select>
                ) : (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setTeacher(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                )}
                <Button
                  onClick={applyNameTeacherAllEducationGroup}
                  buttonName="ApplyAllEnable"
                >
                  ApplyAllEnable
                </Button>
              </Style.TableCeil>
            )}
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Лабораторные работы</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.laboratoryHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.laboratoryHours ? (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              ) : (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.laboratoryHours ? (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                ) : (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                )}
              </Style.TableCeil>
            )}
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Практические</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.practicHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.practicHours ? (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              ) : (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.practicHours ? (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                ) : (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                )}
              </Style.TableCeil>
            )}
          </Style.TableRow>
          <Style.TableRow>
            <Style.TableCeil>Семинарские</Style.TableCeil>
            <Style.TableCeil>
              {educationGroupsItem.seminarHours}
            </Style.TableCeil>
            <Style.TableCeil>
              {+educationGroupsItem.seminarHours ? (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              ) : (
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.seminarHours ? (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                ) : (
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                )}
              </Style.TableCeil>
            )}
          </Style.TableRow>
          {educationGroupsItem.exam && (
            <Style.TableRow>
              <Style.TableCeil>Экзамен</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                </Style.TableCeil>
              )}
            </Style.TableRow>
          )}
          {educationGroupsItem.offset && (
            <Style.TableRow>
              <Style.TableCeil>Зачёт</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setNameTeacherLabor(e.target.value)
                  }
                  editionDataTeachers={editionDataTeachers}
                  value={nameTeacherLector}
                />
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setNameTeacherLabor(e.target.value)
                    }
                    editionDataTeachers={editionDataTeachers}
                    value={nameTeacherLector}
                  />
                </Style.TableCeil>
              )}
            </Style.TableRow>
          )}
          {column && (
            <Style.TableRow>
              <Style.TableCeil>Количество человек</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Input
                  type="text"
                  value={countStudentFirstGroup}
                  onChange={(e) =>
                  addCountStudentFirstGroup(e.target.value)
                  }
                />
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Input
                    type="text"
                    value={countStudentSecondGroup}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      addCountStudentSecondGroup(e.target.value)
                    }
                  />
                </Style.TableCeil>
              )}
            </Style.TableRow>
          )}
          <Style.TableRow>
            <Style.TableCeil>
              Примечание <br /> (для составления расписания)
            </Style.TableCeil>
            <Style.TableCeil></Style.TableCeil>
            <Style.TableCeil>
              <TextArea
                cols={23}
                rows={2}
                style={{ resize: 'none', outline: 'none' }}
              ></TextArea>
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                <TextArea
                  cols={23}
                  rows={2}
                  style={{ resize: 'none', outline: 'none' }}
                ></TextArea>
              </Style.TableCeil>
            )}
          </Style.TableRow>
        </Style.TableBody>
      </Style.Table>
    </Style.ScheduleGroupsContainerItemContainer>
  )
}

export default ScheduleGroupsItem;

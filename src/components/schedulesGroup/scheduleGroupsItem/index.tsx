import { FC, useState } from 'react'
import { useAppSelector } from 'src/hooks'
import * as Style from './index.styles'

const ScheduleGroupsItem: FC<any> = ({ educationGroupsItem }): JSX.Element => {
  const [nameTeacherLector, setNameTeacherLector] = useState<string>('')
  const [nameTeacherLabor, setNameTeacherLabor] = useState<string>('')
  const [nameTeacherPractic, setNameTeacherPractic] = useState<string>('')
  const [nameTeacherSeminar, setNameTeacherSeminar] = useState<string>('')
  const [nameTeacherOffset, setNameTeacherOffset] = useState<string>('')
  const [nameTeacherExam, setNameTeacherExam] = useState<string>('')
  const [nameTeacherForAllExam, setNameTeacherForAllExam] = useState<string>(
    'Вакансия',
  )
  const [column, setColumn] = useState<boolean>(false)
  const [countStudentFirstGroup, setCountStudentFirstGroup] = useState<string>(
    ` ${Math.ceil(educationGroupsItem.studentsNumber / 2)}`,
  )
  const [countStudentSecondGroup, setCountStudentSecondGroup] = useState<
    string
  >(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`)

  const dataTeachers = useAppSelector(
    (state: any) => state.educationGroups.teachers,
  )

  const defaultValueOption = { id: '0', name: nameTeacherForAllExam }
  const editionDataTeachers = [defaultValueOption, ...dataTeachers]

  const defaultValueOptionDisabled = { id: '0', name: 'Вакансия' }
  const editionDataTeachersDisabled = [
    defaultValueOptionDisabled,
    ...dataTeachers,
  ]

  const applyNameTeacherAllEducationGroup = () => {
    setNameTeacherForAllExam(nameTeacherLector)
  }

  const setTeacher = (valueOption: any) => {
    setNameTeacherLector(valueOption)
  }

  const addColumnHandler = () => {
    setColumn(true)
  }
  const deleteColumnHandler = () => {
    setColumn(false)
  }
  const addCountStudentFirstGroup = (count: string) => {
    setCountStudentFirstGroup(count)
  }
  const addCountStudentSecondGroup = (count: string) => {
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
              {!column && <button onClick={addColumnHandler}>+</button>}
            </Style.TableHead>
            {column && (
              <Style.TableHead>
                Подгруппа 2<button onClick={deleteColumnHandler}>-</button>
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
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setTeacher(e.target.value)}
                  value={nameTeacherLector}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachersDisabled.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              )}
              <button onClick={applyNameTeacherAllEducationGroup}>
                ApplyAllEnable
              </button>
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.lecturesHours ? (
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setTeacher(e.target.value)}
                    value={nameTeacherLector}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                ) : (
                  <Style.Select name="" id="" disabled>
                    {editionDataTeachersDisabled.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                )}
                <button onClick={applyNameTeacherAllEducationGroup}>
                  ApplyAllEnable
                </button>
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
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setNameTeacherLabor(e.target.value)}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachersDisabled.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.laboratoryHours ? (
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setNameTeacherLabor(e.target.value)}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                ) : (
                  <Style.Select name="" id="" disabled>
                    {editionDataTeachersDisabled.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
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
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setNameTeacherPractic(e.target.value)}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachersDisabled.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.practicHours ? (
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setNameTeacherPractic(e.target.value)}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                ) : (
                  <Style.Select name="" id="" disabled>
                    {editionDataTeachersDisabled.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
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
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setNameTeacherSeminar(e.target.value)}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              ) : (
                <Style.Select name="" id="" disabled>
                  {editionDataTeachersDisabled.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              )}
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                {+educationGroupsItem.seminarHours ? (
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setNameTeacherSeminar(e.target.value)}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                ) : (
                  <Style.Select name="" id="" disabled>
                    {editionDataTeachersDisabled.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                )}
              </Style.TableCeil>
            )}
          </Style.TableRow>
          {educationGroupsItem.exam && (
            <Style.TableRow>
              <Style.TableCeil>Экзамен</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setNameTeacherExam(e.target.value)}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setNameTeacherExam(e.target.value)}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                </Style.TableCeil>
              )}
            </Style.TableRow>
          )}
          {educationGroupsItem.offset && (
            <Style.TableRow>
              <Style.TableCeil>Зачёт</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Style.Select
                  name=""
                  id=""
                  onChange={(e: any) => setNameTeacherOffset(e.target.value)}
                >
                  {editionDataTeachers.map((el: any) => (
                    <Style.SelectOption value={el.name}>
                      {el.name}
                    </Style.SelectOption>
                  ))}
                </Style.Select>
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Style.Select
                    name=""
                    id=""
                    onChange={(e: any) => setNameTeacherOffset(e.target.value)}
                  >
                    {editionDataTeachers.map((el: any) => (
                      <Style.SelectOption value={el.name}>
                        {el.name}
                      </Style.SelectOption>
                    ))}
                  </Style.Select>
                </Style.TableCeil>
              )}
            </Style.TableRow>
          )}
          {column && (
            <Style.TableRow>
              <Style.TableCeil>Количество человек</Style.TableCeil>
              <Style.TableCeil></Style.TableCeil>
              <Style.TableCeil>
                <Style.Input
                  type="text"
                  value={countStudentFirstGroup}
                  onChange={(e: any) =>
                    addCountStudentFirstGroup(e.target.value)
                  }
                />
              </Style.TableCeil>
              {column && (
                <Style.TableCeil>
                  <Style.Input
                    type="text"
                    value={countStudentSecondGroup}
                    onChange={(e: any) =>
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
              <textarea
                name=""
                id=""
                cols={23}
                rows={2}
                style={{ resize: 'none', outline: 'none' }}
              ></textarea>
            </Style.TableCeil>
            {column && (
              <Style.TableCeil>
                <textarea
                  name=""
                  id=""
                  cols={23}
                  rows={2}
                  style={{ resize: 'none', outline: 'none' }}
                ></textarea>
              </Style.TableCeil>
            )}
          </Style.TableRow>
        </Style.TableBody>
      </Style.Table>
    </Style.ScheduleGroupsContainerItemContainer>
  )
}

export default ScheduleGroupsItem

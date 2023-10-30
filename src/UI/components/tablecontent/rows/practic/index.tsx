import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { dataTeachers } from 'src/store/selectors'
import { readValue } from 'src/store/slice'
import { DataGroup } from 'src/store/types/types'
import Select from 'src/UI/shared/select'
import * as Style from './index.styles'

interface PracticProps {
  educationGroupsItem: DataGroup
  index: number
}

const Practic: FC<PracticProps> = ({
  educationGroupsItem,
  index,
}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers)
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
 
  const nameForAllEducation = useAppSelector(
    (state) => state.educationGroups?.formData[index].firstColumn.nameForAll.value,
  )

  console.log('nameForAllEducation', nameForAllEducation)
  const dispatch = useAppDispatch()
  const [nameLector, setNameLector] = useState<string>('')
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия')

  const setTeacher = (valueOption: string): void => {
    setNameLector(valueOption)
  }

  const defaultValueOption = { id: '0', name: nameForAllExam }
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers]

  return (
    <Style.TableRow>
      <Style.TableCeil>Практические</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.practicHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
        nameForAllEducation={nameForAllEducation}
         index={index}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              readValue({
                value: e.target.value,
                key: 'practic',
                index: index,
                numberColumn: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.practicHours}
        />
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Select
          nameForAllEducation={nameForAllEducation}
          index={index}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(
                readValue({
                  value: e.target.value,
                  key: 'practic',
                  index: index,
                  numberColumn: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.practicHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Practic

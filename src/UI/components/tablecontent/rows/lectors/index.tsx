import { FC, ChangeEvent, useState } from 'react'
import { FaSortAmountDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { dataTeachers } from 'src/store/selectors'
import { readValue, setNameForAllEducation } from 'src/store/slice'
import { DataGroup } from 'src/store/types/types'
import Select from 'src/UI/shared/select'
import * as Style from './index.styles'

interface LectorsProps {
  educationGroupsItem: DataGroup
  index: number
}

const Lectors: FC<LectorsProps> = ({
  educationGroupsItem,
  index,
}): JSX.Element => {
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
  const nameForAllEducation = useAppSelector(
    (state) =>
      state.educationGroups?.formData[index].firstColumn.nameForAll.value,
  )
  const scheduleTeachers = useAppSelector(dataTeachers)
  const dispatch = useAppDispatch()
  const [selectValue, setSelectValue] = useState<string>('')

  const applyNameTeacherAllEducationGroup = (numberColumn: string): void => {
    dispatch(
      setNameForAllEducation({
        value: selectValue,
        index: index,
        numberColumn: numberColumn,
      }),
    )
  }

  const defaultValueOption = { id: '0', name: 'Вакансия' }
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers]

  return (
    <Style.TableRow>
      <Style.TableCeil>Лекции</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.lecturesHours}</Style.TableCeil>
      <Style.TableCeil>
        <Style.ContainerHead
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Select
          nameForAllEducation={nameForAllEducation}
            index={index}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              dispatch(
                readValue({
                  value: e.target.value,
                  key: 'lectors',
                  index: index,
                  numberColumn: 'firstColumn',
                }),
              )
              setSelectValue(e.target.value)
            }}
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.lecturesHours}
          />
          <Style.ContainerIcon style={{ color: '#ffffff' }}>
            <FaSortAmountDown
              onClick={() => applyNameTeacherAllEducationGroup('firstColumn')}
              style={{
                cursor: 'pointer',
                padding: 10,
                backgroundColor: '#303a65',
                borderRadius: 4,
                marginLeft: 4,
              }}
            />
          </Style.ContainerIcon>
        </Style.ContainerHead>
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Style.ContainerHead
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <Select
            nameForAllEducation={nameForAllEducation}
              index={index}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                dispatch(
                  readValue({
                    value: e.target.value,
                    key: 'lectors',
                    index: index,
                    numberColumn: 'secondColumn',
                  }),
                )
              }
              editionDataTeachers={editionDataTeachers}
              educationHours={educationGroupsItem.lecturesHours}
            />
            <Style.ContainerIcon style={{ color: '#ffffff' }}>
              <FaSortAmountDown
                onClick={() =>
                  applyNameTeacherAllEducationGroup('secondColumn')
                }
                style={{
                  cursor: 'pointer',
                  padding: 10,
                  backgroundColor: '#303a65',
                  marginLeft: 4,
                  borderRadius: 4,
                }}
              />
            </Style.ContainerIcon>
          </Style.ContainerHead>
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Lectors

import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { readValue } from 'src/store/slice';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface ExamenProps {
  index: number
};

const Examen: FC<ExamenProps> = ({ index }): JSX.Element => {
  const nameForAllEducation = useAppSelector(
    (state) =>
      state.educationGroups?.formData[index].firstColumn.nameForAll.value,
  )
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )

  const scheduleTeachers = useAppSelector(dataTeachers)
  const dispatch = useAppDispatch()
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия')

  const defaultValueOption = { id: '0', name: nameForAllExam }
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers]

  return (
    <Style.TableRow>
      <Style.TableCeil>Экзамен</Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <Select
        nameForAllEducation={nameForAllEducation}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              readValue({
                value: e.target.value,
                key: 'exam',
                index: index,
                numberColumn: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={editionDataTeachers}
          educationHours="1"
          index={index}
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
                  key: 'exam',
                  index: index,
                  numberColumn: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={editionDataTeachers}
            educationHours="1"
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Examen

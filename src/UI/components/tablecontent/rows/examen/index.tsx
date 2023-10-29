import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface ExamenProps {
  column:boolean
};

const Examen:FC<ExamenProps> = ({column}):JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const [nameLector, setNameLector] = useState<string>('');
  const [nameLabor, setNameLabor] = useState<string>('');
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');

  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];
  
  return (
    <Style.TableRow>
      <Style.TableCeil>Экзамен</Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setNameLabor(e.target.value)
          }
          editionDataTeachers={editionDataTeachers}
          value={nameLector}
          educationHours="1"
        />
      </Style.TableCeil>
      {column && (
        <Style.TableCeil>
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setNameLabor(e.target.value)
            }
            editionDataTeachers={editionDataTeachers}
            value={nameLector}
            educationHours="1"
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Examen;

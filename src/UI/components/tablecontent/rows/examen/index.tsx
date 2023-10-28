import { ChangeEvent, FC } from 'react';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface ExamenProps {
  column:boolean
};

const Examen:FC<ExamenProps> = ({column}):JSX.Element => {
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

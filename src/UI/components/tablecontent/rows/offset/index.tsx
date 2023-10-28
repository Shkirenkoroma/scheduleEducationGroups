import { ChangeEvent, FC } from 'react';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface OffsetProps {
  column: boolean
};

const Offset: FC<OffsetProps> = ({ column }): JSX.Element => {
  return (
    <Style.TableRow>
      <Style.TableCeil>Зачёт</Style.TableCeil>
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
};

export default Offset;

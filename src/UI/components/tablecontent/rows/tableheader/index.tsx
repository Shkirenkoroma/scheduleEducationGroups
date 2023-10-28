import { FC } from 'react';
import Button from 'src/UI/shared/button';
import * as Style from './index.styles';

interface TableHeaderProps {
  column:boolean, 
  setColumn: (value:boolean) => void
};

const TableHeader: FC<TableHeaderProps> = ({column, setColumn}): JSX.Element => {

  const addColumnHandler = (): void => {
    setColumn(true)
  };

  const deleteColumnHandler = (): void => {
    setColumn(false)
  };

  return (
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
  )
};

export default TableHeader;
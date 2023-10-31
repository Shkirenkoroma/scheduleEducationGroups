import { FC } from 'react';
import { useAppSelector } from 'src/hooks';
import Lectors from '../rows/lectors';
import Laboratory from '../rows/laboratory';
import TableHeader from '../rows/tableheader';
import Practic from '../rows/practic';
import Seminar from '../rows/seminar';
import Examen from '../rows/examen';
import Offset from '../rows/offset';
import CountStudents from '../rows/countstudents';
import Notation from '../rows/notation';
import { useTableContext } from '../../schedulesGroup/scheduleGroupsItem/context';
import * as Style from './index.styles';

const Table: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );
  
  return (
    <Style.Table>
      <Style.TableBody>
        <TableHeader />
        <Lectors />
        <Laboratory />
        <Practic />
        <Seminar />
        {educationGroupsItem.exam && <Examen />}
        {educationGroupsItem.offset && <Offset />}
        {isNewColumn && <CountStudents />}
        <Notation />
      </Style.TableBody>
    </Style.Table>
  );
};

export default Table;

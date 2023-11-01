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
import * as S from './index.styles';

const Table: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );
  
  return (
    <S.Table>
      <S.TableBody>
        <TableHeader />
        <Lectors />
        <Laboratory />
        <Practic />
        <Seminar />
        {educationGroupsItem.exam && <Examen />}
        {educationGroupsItem.offset && <Offset />}
        {isNewColumn && <CountStudents />}
        <Notation />
      </S.TableBody>
    </S.Table>
  );
};

export default Table;

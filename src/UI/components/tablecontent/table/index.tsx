import { FC, useState } from 'react';
import { DataGroup } from 'src/store/types/types';
import Lectors from '../rows/lectors';
import Laboratory from '../rows/laboratory';
import TableHeader from '../rows/tableheader';
import Practic from '../rows/practic';
import Seminar from '../rows/seminar';
import Examen from '../rows/examen';
import Offset from '../rows/offset';
import CountStudents from '../rows/countstudents';
import Notation from '../rows/notation';
import * as Style from './index.styles';

interface TableProps {
  educationGroupsItem: DataGroup
};

const Table: FC<TableProps> = ({ educationGroupsItem }): JSX.Element => {
  const [column, setColumn] = useState<boolean>(false)

  return (
    <Style.Table>
      <Style.TableBody>
        <TableHeader column={column} setColumn={setColumn} />
        <Lectors educationGroupsItem={educationGroupsItem} column={column} />
        <Laboratory educationGroupsItem={educationGroupsItem}  column={column}/>
        <Practic educationGroupsItem={educationGroupsItem} column={column}/>
        <Seminar educationGroupsItem={educationGroupsItem} column={column}/>
        {educationGroupsItem.exam && <Examen column={column}/>}
        {educationGroupsItem.offset && <Offset column={column}/>}
        {column && <CountStudents educationGroupsItem={educationGroupsItem} column={column}/>}
        <Notation column={column} />
      </Style.TableBody>
    </Style.Table>
  )
}

export default Table;

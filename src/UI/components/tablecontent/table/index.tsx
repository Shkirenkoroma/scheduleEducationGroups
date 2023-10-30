import { FC } from 'react';
import { DataGroup } from 'src/store/types/types';
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
import * as Style from './index.styles';

interface TableProps {
  educationGroupsItem: DataGroup
  index:number
};

const Table: FC<TableProps> = ({ educationGroupsItem, index}): JSX.Element => {
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
  
  return (
    <Style.Table>
      <Style.TableBody>
        <TableHeader  index={index} />
        <Lectors educationGroupsItem={educationGroupsItem} index={index} />
        <Laboratory educationGroupsItem={educationGroupsItem} index={index} />
        <Practic educationGroupsItem={educationGroupsItem} index={index} />
        <Seminar educationGroupsItem={educationGroupsItem} index={index}/>
        {educationGroupsItem.exam && <Examen index={index}/>}
        {educationGroupsItem.offset && <Offset index={index}/>}
        {isNewColumn && <CountStudents educationGroupsItem={educationGroupsItem} index={index} />}
        <Notation index={index}/>
      </Style.TableBody>
    </Style.Table>
  )
}

export default Table;

import { FC } from 'react';
import Header from '../header';
import Table from '../../tablecontent/table';
import { ScheduleGroupsItemProps } from './index.types';
import { TableContext } from './context';
import * as Style from './index.styles';

const ScheduleGroupsItem: FC<ScheduleGroupsItemProps> = ({
  tableNumber,
}): JSX.Element => {
  return (
    <TableContext.Provider value={{ tableNumber }}>
      <Style.ScheduleGroupsContainerItemContainer>
        <Header />
        <Table />
      </Style.ScheduleGroupsContainerItemContainer>
    </TableContext.Provider>
  );
};

export default ScheduleGroupsItem;

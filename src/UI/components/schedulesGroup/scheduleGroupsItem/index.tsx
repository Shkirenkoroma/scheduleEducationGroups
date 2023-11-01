import { FC } from 'react';
import Header from '../header';
import Table from '../../tablecontent/table';
import { ScheduleGroupsItemProps } from './index.types';
import { TableContext } from './context';
import * as S from './index.styles';

const ScheduleGroupsItem: FC<ScheduleGroupsItemProps> = ({
  tableNumber,
}): JSX.Element => {
  return (
    <TableContext.Provider value={{ tableNumber }}>
      <S.ScheduleGroupsContainerItemContainer>
        <Header />
        <Table />
      </S.ScheduleGroupsContainerItemContainer>
    </TableContext.Provider>
  );
};

export default ScheduleGroupsItem;

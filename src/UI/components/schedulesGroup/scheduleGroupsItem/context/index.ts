import { createContext, useContext } from 'react';
import { ScheduleGroupsItemProps } from '../index.types';

export const TableContext = createContext<ScheduleGroupsItemProps>({tableNumber: 0});
export const useTableContext = () => useContext(TableContext);

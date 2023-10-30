import { FC } from 'react';
import { DataGroup } from 'src/store/types/types';
import Header from '../../header';
import Table from '../../tablecontent/table';
import * as Style from './index.styles';

interface PropsScheduleGroupItem {
  educationGroupsItem: DataGroup
  index: number
};

const ScheduleGroupsItem: FC<PropsScheduleGroupItem> = ({
  educationGroupsItem,
  index,
}): JSX.Element => {

  return (
    <Style.ScheduleGroupsContainerItemContainer>
      <Header educationGroupsItem={educationGroupsItem} />
      <Table educationGroupsItem={educationGroupsItem} index={index} />
    </Style.ScheduleGroupsContainerItemContainer>
  )
}

export default ScheduleGroupsItem;

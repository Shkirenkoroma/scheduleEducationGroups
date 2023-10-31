import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setNotation } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import TextArea from 'src/UI/shared/textarea';
import * as Style from './index.styles';

const Notation: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );
  
  const getInformationFromTextArea = (e:ChangeEvent<HTMLTextAreaElement>):void => {
    dispatch(setNotation({ tableNumber, value: e.target.value }));
  }

  return (
    <Style.TableRow>
      <Style.TableCeil>
        Примечание <br /> (для составления расписания)
      </Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil colSpan={isNewColumn ? 45 : 13}>
        <TextArea
          cols={isNewColumn ? 65 : 54}
          rows={2}
          style={{ resize: 'none', outline: 'none', margin: 7 }}
          onChange={getInformationFromTextArea}
        />
      </Style.TableCeil>
    </Style.TableRow>
  )
};

export default Notation;

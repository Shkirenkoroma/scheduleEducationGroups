import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getNotation } from 'src/store/slice';
import TextArea from 'src/UI/shared/textarea';
import * as Style from './index.styles';

interface NotationProps {
  index: number
}

const Notation: FC<NotationProps> = ({index}): JSX.Element => {
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
  const dispatch = useAppDispatch()
  const getInformationFromTextArea = (e:ChangeEvent<HTMLTextAreaElement>):void => {
    dispatch(getNotation({index:index, value: e.target.value}))
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

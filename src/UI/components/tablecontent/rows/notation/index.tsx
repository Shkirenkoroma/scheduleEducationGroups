import { FC } from 'react';
import TextArea from 'src/UI/shared/textarea';
import * as Style from './index.styles';

interface NotationProps {
  column:boolean
};

const Notation: FC<NotationProps> = ({column}): JSX.Element => {
  return (
    <Style.TableRow>
      <Style.TableCeil>
        Примечание <br /> (для составления расписания)
      </Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <TextArea
          cols={23}
          rows={2}
          style={{ resize: 'none', outline: 'none' }}
        ></TextArea>
      </Style.TableCeil>
      {column && (
        <Style.TableCeil>
          <TextArea
            cols={23}
            rows={2}
            style={{ resize: 'none', outline: 'none' }}
          ></TextArea>
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
};

export default Notation;
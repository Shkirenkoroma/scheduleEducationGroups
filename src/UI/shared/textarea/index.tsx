import { FC, HTMLAttributes } from 'react';
import * as Style from './index.styles';

interface IPropsTextArea extends HTMLAttributes<HTMLTextAreaElement> {
  cols: number
  rows: number
};

export const TextArea: FC<IPropsTextArea> = ({
  cols,
  rows,
  style,
  onChange,
}): JSX.Element => {
  return <Style.Textarea cols={cols} rows={rows} style={style} onChange={onChange}/>
};

export default TextArea;

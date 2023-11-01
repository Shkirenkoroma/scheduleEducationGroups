import { FC, HTMLAttributes } from 'react';
import * as S from './index.styles';

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
  return <S.Textarea cols={cols} rows={rows} style={style} onChange={onChange}/>
};

export default TextArea;

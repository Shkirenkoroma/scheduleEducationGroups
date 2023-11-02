import { FC, HTMLAttributes } from 'react';
import * as S from './index.styles';

interface IPropsTextArea extends HTMLAttributes<HTMLTextAreaElement> {
  cols: number;
  rows: number;
};

export const TextArea: FC<IPropsTextArea> = ({
  cols,
  rows,
  onChange,
}): JSX.Element => {
  return <S.Textarea cols={cols} rows={rows}  onChange={onChange}/>
};

export default TextArea;

import { ChangeEvent, FC } from 'react';
import * as S from './index.styles';

interface InpurProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InpurProps> = ({
  type,
  value,
  onChange,
}): JSX.Element => {
  return <S.Input type={type} value={value} onChange={onChange} />
};

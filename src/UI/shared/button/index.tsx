import { FC, HTMLAttributes } from 'react';
import * as S from './index.styles';

interface IPropsButton extends HTMLAttributes<HTMLButtonElement> {
  buttonName: string
};

export const Button: FC<IPropsButton> = ({ buttonName, onClick, style }): JSX.Element => {
  return <S.Button onClick={onClick} style={style}>{buttonName}</S.Button>
};

export default Button;

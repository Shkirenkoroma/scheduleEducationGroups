import { FC, HTMLAttributes } from 'react';
import * as Style from './index.styles';

interface IPropsButton extends HTMLAttributes<HTMLButtonElement> {
  buttonName: string
};

export const Button: FC<IPropsButton> = ({ buttonName, onClick, style }): JSX.Element => {
  return <Style.Button onClick={onClick} style={style}>{buttonName}</Style.Button>
};

export default Button;

import { ReactNode } from 'react';
import styled from 'styled-components';

const baseClasses: { [key:string]: string} = {
    primary: 'br2 pa3 outline-0 bn-l b flex items-center'
};

interface ButtonType {
  children: ReactNode,
  className?: string,
  disabled?: boolean,
  icon?: string;
  onClick?: any,
  type?: string,
};

const ButtonStyle = styled.button`
`;

const Button: React.FC<ButtonType> = ({
  children,
  className='',
  disabled,
  icon,
  type='primary',
  ...props
}) => {
  const classFinal = `${baseClasses[type]} ${className} ${disabled ? 'o-50' : 'dim pointer'}`;

  return(
    <ButtonStyle
      className={classFinal}
      disabled={disabled}
      { ...props }
    >
      {icon && <span
        data-testid='icon'
        className='material-icons'
       >
        {icon}
      </span>}
      {children}
    </ButtonStyle>
  );
};

export default Button;
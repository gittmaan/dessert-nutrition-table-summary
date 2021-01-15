import { ReactNode } from 'react';
import styled from 'styled-components';

const classList: { [key:string]: string} = {
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
  const classFinal = `${classList[type]} ${className}`;

  return(
    <ButtonStyle
      className={classFinal}
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
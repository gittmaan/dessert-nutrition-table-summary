import styled from 'styled-components';

interface InputProps {
  label?: any,
  name?: string,
  onChange?: any,
  type?: string,
  value?: any,
}

const InputStyle = styled.fieldset.attrs({
  className: 'bn flex flex-column pa0 mb4'
})`
`;

const InputLabelStyle = styled.label.attrs({
  className: 'b mb2'
})`
`;

const InputInputStyle = styled.input.attrs({
  className: 'pa2 rounded-2'
})`
`;

const Input: React.FC<InputProps> = ({
  label,
  name,
  onChange,
  value,
  ...props
}) => {
  return (
    <InputStyle>
      <InputLabelStyle>{label}*</InputLabelStyle>
      <InputInputStyle
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      >
      </InputInputStyle>
    </InputStyle>
  );
};

export default Input;
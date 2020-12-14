import styled from 'styled-components';
import theme from 'styled-theming';
import { light, dark, variant } from 'styles';

const backgroundColor = theme('mode', {
  light: light.red,
  dark: dark.red,
});

const StyledInput = styled.input`
  display: block;
  width: 100%;
  position: relative;
  background-color: ${backgroundColor};
  box-shadow: ${variant.shadow1};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { InputContainer };

export default StyledInput;

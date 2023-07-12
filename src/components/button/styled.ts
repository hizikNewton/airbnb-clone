import { styled } from 'styled-components';

interface StyledButtonProps {
  customStyle?: any;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: transparent;
  cursor: pointer;
  text-align: inherit;
  height: fit-content;
  padding: 12px;
  margin: 4px;
  border: 1px solid transparent;
  ${(props) => props?.customStyle};
`;

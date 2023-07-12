import { styled } from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  .dropdown-toggle {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8.5px;
    vertical-align: middle;
    span {
      display: flex;
      align-items: end;
    }
  }
  .dropdown-toggle.selection {
    padding: 8px 16px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .dropdown-toggle.action {
    svg.avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }
  }
`;

export const DDOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 4px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const DDOptionItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    background-color: #e0e0e0;
  }
`;

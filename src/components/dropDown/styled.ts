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
    border: 1px solid var(--bg-color);
    border-radius: var(--border-radius);
    padding: 5px 5px 5px 12px;
    svg.avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      opacity: 0.6;
    }
    &:hover {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const DDOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: -18rem;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 4px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 24rem;
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

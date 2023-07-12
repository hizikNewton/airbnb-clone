import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  max-height: 7.8rem;
  display: grid;
  grid-template-columns: 100%;
`;

export const NavAndFilter = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 744px) {
    display: flex;
  }
`;

export const NavCategoryContainer = styled.div`
  overflow-x: scroll;
  flex: 1;
`;

export const NavCategory = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content, calc((100% - max-content, 16px));
  gap: 32px 16px;
  justify-content: flex-start;
  overflow: auto hidden;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: 24px, 32px;
  scrollbar-width: none;
  flex: 1;
`;

export const StyledNavOption = styled.div`
  text-align: center;
  width: max-content;
  span {
    gap: 8px;
  }
  label {
  }
  .chipset {
    display: flex;
    min-width: 56px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const Filter = styled.div`
  display: grid;
  flex: 0 0 auto;
  flex-basis: auto;
  min-width: 76px;
  place-items: center;
  position: relative;
`;

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
  overflow: hidden;
  flex: 1;
  ::-webkit-scrollbar {
    width: 0;
    display: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
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
    input {
      visibility: hidden;
    }
  }
  .chipset {
    display: flex;
    min-width: 56px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    img {
      opacity: 0.69;
    }
    &:hover {
      img {
        opacity: 1;
      }
      font-weight: 600;
      cursor: pointer;
    }
    .isActive {
      font-weight: 600;
    }
  }
  .active {
    border: 1px solid black;
    width: 100%;
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

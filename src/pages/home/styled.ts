import { styled } from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(-webkit-min-content, -webkit-max-content);
  grid-auto-rows: minmax(min-content, max-content);

  grid-gap: var(--breakpoint-grid_row-gap, 0)
    var(--breakpoint-grid_column-gap, 0);
  grid-template-columns: repeat(
    var(--breakpoint-grid_columns, 1),
    minmax(0, 1fr)
  );
`;

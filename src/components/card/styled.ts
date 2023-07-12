import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const PictureContainer = styled.div``;
export const TextContainer = styled.div`
  display: grid;
  gap: var(--card-content-grid_gap, var(--h-x-sf-jw));
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 15px;
  .listingName {
    font-weight: 600;
    color: var(--color-bold);
    grid-column: 1 / -1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .listingWhere {
    color: var(--color-light);
    grid-column: 1 / -1;
  }
  .cost {
    margin-top: 6px;
  }
  .ratings {
    grid-column: -2 / -1;
    grid-row: 1;
    justify-self: end;
    align-items: center;
    display: flex;
  }
`;

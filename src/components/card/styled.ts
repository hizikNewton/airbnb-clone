import { styled } from 'styled-components';

export const CardContainer = styled.div``;

export const PictureContainer = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--bg-color);
`;
export const PictureDescContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, transparent 80%, rgba(0, 0, 0, 0.25));
`;

export const TextContainer = styled.div`
  display: grid;
  gap: var(--card-content-grid_gap, var(--h-x-sf-jw));
  grid-template-columns: minmax(0, 1fr) max-content;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 15px;
  .listingName {
    font-weight: 600;
    color: var(--color-bold);
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .listingWhere {
    color: var(--color-light);
    grid-column: 1 / -1;
  }
  .cost {
    margin-top: 6px;
    grid-column: 1 / -1;
    span {
      font-weight: 600;
      color: var(--color-bold);
    }
  }
  .ratings {
    grid-column: -2 / -1;
    grid-row: 1;
    justify-self: end;
    align-items: center;
    display: flex;
  }
`;

export const Picture = styled.div`
  height: 260px;
`;

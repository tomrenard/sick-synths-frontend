import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: flex;
  max-width: 580px;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem auto;
  padding: 0;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;

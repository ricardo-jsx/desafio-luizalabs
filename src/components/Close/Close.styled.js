import styled from 'styled-components';

export const CloseContainer = styled.div`
  background-color: white;
  border: 2px solid #cecece;
  padding: 4px;
  width: 100%;

  > svg {
    position: absolute;
    right: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

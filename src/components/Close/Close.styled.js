import styled from 'styled-components';

export const CloseContainer = styled.div`
  background-color: white;
  padding: 16px 32px;
  position: relative;
  width: 100%;

  > svg {
    position: absolute;
    right: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;

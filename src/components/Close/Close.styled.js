import styled from 'styled-components';

export const CloseContainer = styled.div`
  background-color: white;
  border: 2px solid #cecece;
  width: 100%;
  padding: 16px 32px;
  position: relative;

  > svg {
    position: absolute;
    right: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;

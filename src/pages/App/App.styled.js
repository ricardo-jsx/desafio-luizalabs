import styled from 'styled-components';

export const Container = styled.main`
  width: 800px;
  height: 100vh;
  margin: 0 auto;

  > header {
    margin-bottom: 8px;
  }

  .google-maps {
    margin-top: 16px;
  }

  > * {
    border: 2px solid #cecece;
  }
`;

export const Body = styled.section`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

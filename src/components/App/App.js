import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Address from '../Address';
import Button from '../Button';
import Close from '../Close';
import Header from '../Header';
import Input from '../Input';
import Maps from '../Maps';
import Loader, { MapsLoader } from '../Loader';
import { Container, Body } from './App.styled';
import useAddress from '../../hooks/useAddress';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const App = () => {
  const { setCep, searchCep, address, loading } = useAddress();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Consultar">
          <form onSubmit={(e) => e.preventDefault()}>
            <Input label="CEP" mask="11111-111" onChange={setCep} />
            <Button type="submit" onClick={searchCep} style={{ marginLeft: '8px' }}>
              Buscar
            </Button>
          </form>
        </Header>

        <Body visible={Object.entries(address).length}>
          <Close className="random">
            <Address address={address} />
            <Loader loading={loading} renderLoading={() => <MapsLoader />}>
              <Maps address={address} />
            </Loader>
          </Close>
        </Body>
      </Container>
    </>
  );
};

export default App;

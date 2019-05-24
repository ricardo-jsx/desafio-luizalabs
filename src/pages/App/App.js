import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Address from '../../components/Address';
import Button from '../../components/Button';
import Close from '../../components/Close';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Maps from '../../components/Maps';
import Loader, { MapsLoader } from '../../components/Loader';
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

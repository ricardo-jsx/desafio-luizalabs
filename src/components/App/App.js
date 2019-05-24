import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Container, Body } from './App.styled';
import Address from '../Address';
import Button from '../Button';
import Close from '../Close';
import Header from '../Header';
import Input from '../Input';
import Maps from '../Maps';
import Loader, { MapsLoader } from '../Loader';

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
  const [cep, setCep] = React.useState('13090-762');
  const [currentCep, setCurrentCep] = React.useState(cep);
  const [address, setAddress] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const searchCep = () => setCurrentCep(cep);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(`https://viacep.com.br/ws/${currentCep}/json`);
      const address = await resp.json();
      setAddress(address);
      setLoading(false);
    };

    fetchData();
  }, [currentCep]);

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

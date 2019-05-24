import React from 'react';

function useAddress(initialCep = '') {
  const [cep, setCep] = React.useState(initialCep);
  const [currentCep, setCurrentCep] = React.useState(cep);
  const [address, setAddress] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const searchCep = () => setCurrentCep(cep);

  React.useEffect(() => {
    const fetchData = async () => {
      if (currentCep) {
        setLoading(true);

        const resp = await fetch(`https://viacep.com.br/ws/${currentCep}/json`);
        const address = await resp.json();

        setAddress(address);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentCep]);

  return {
    setCep,
    searchCep,
    address,
    loading,
  };
}

export default useAddress;

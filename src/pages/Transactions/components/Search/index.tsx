import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';

import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder='Busque por transações' />

      <button type='submit'>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  );
}

export default Search;
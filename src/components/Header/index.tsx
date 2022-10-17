import React from 'react';

import { Container, Content, NewTransactionButton } from './styles';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Content>
    </Container>
  );
}

export default Header;
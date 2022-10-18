import React from 'react';

import { Container, Content, NewTransactionButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg';
import NewTransactionModal from '../NewTransactionModal';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Content>
    </Container>
  );
}

export default Header;
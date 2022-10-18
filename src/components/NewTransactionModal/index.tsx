import React from 'react';

// import { Container } from './styles';
import { Portal, Title } from '@radix-ui/react-dialog'
import { Content, Overlay, Close, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

const NewTransactionModal: React.FC = () => {
  return (
    <Portal>
      <Overlay>
        <Content>
          <Title>Nova Transação</Title>

          <Close>
            <X size={24} />
          </Close>

          <form action="">
            <input type="text" placeholder='Descrição' required />
            <input type="number" placeholder='Preço' required />
            <input type="text" placeholder='Categoria' required />

            <TransactionType>
              <TransactionTypeButton variant='income' value='income'>
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant='outcome' value='outcome '>
                <ArrowCircleDown size={24} />
                Saída
              </TransactionTypeButton>
            </TransactionType>

            <button type='submit'>
              Cadastrar
            </button>
          </form>

        </Content>
      </Overlay>
    </Portal>
  );
}

export default NewTransactionModal;
import React from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Search from './components/Search';

import { Container, PriceHighlight, TransactionsTable } from './styles';

const Transactions: React.FC = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Container>
        <Search />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant='income'>
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Pagamento UX Designer</td>
              <td>
                <PriceHighlight variant='outcome'>
                  - R$ 8.000,00
                </PriceHighlight>
              </td>
              <td>Compra</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </Container>
    </div>
  );
}

export default Transactions;
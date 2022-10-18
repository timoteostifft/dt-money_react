import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import { Transaction, TransactionsContext } from '../../contexts/TransactionsContext';
import Search from './components/Search';

import { Container, PriceHighlight, TransactionsTable } from './styles';

const Transactions: React.FC = () => {

  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <Container>
        <Search />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </Container>
    </div>
  );
}

export default Transactions;
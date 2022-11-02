import React, { useContext, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import {
  Transaction,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import Search from './components/Search'

import { Container, PriceHighlight, TransactionsTable } from './styles'

const Transactions: React.FC = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </Container>
    </div>
  )
}

export default Transactions

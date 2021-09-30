<<<<<<< HEAD
/* eslint-disable prefer-spread */
/* eslint-disable no-shadow */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';
import * as S from './styles';
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { useAuth } from '../../hooks/auth';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LoadContainer
 } from './styles';
>>>>>>> main

export interface DataListProps extends TransactionCardProps {
  id: string;
}
<<<<<<< HEAD
=======

>>>>>>> main
interface HighlightProps {
  amount: string;
  lastTransaction: string;
}
<<<<<<< HEAD
interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
=======

interface HighlightData {
  expensives: HighlightProps;
  entries: HighlightProps;
  total: HighlightProps
>>>>>>> main
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
<<<<<<< HEAD
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData,
  );

  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(transaction => transaction.type === type)
          .map(transaction => new Date(transaction.date).getTime()),
      ),
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {
        month: 'long',
      },
    )}`;
  }

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
=======
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

  const theme = useTheme();
  const { user, signOut } = useAuth();

  function getLastTransactionDate(
      collection: DataListProps[], 
      type: 'positive' | 'negative'
    ) {

    const collectionFiltered = collection
    .filter((transaction) => transaction.type === type)

    if (collectionFiltered.length === 0) {
      return 0;
    }

    const lastTransaction = new Date(Math.max.apply(
      Math, collectionFiltered
        .map((transaction) => new Date(transaction.date).getTime())  
      )
    )

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`
  }

  async function loadTransactions() {
    const dataKey = `@gofinances:transactions_user:${user.id}`
>>>>>>> main
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

<<<<<<< HEAD
    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setTransactions(transactionsFormatted);

    const lastTransactionsEntries = getLastTransactionDate(
      transactions,
      'positive',
    );

    const lastTransactionsExpensives = getLastTransactionDate(
      transactions,
      'negative',
    );

    const totalInterval = `01 a ${lastTransactionsExpensives}`;
=======
    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps) => {
      if (item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expensiveTotal += Number(item.amount);
      }

      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        ...item,
        amount,
        date
      }
    })

    
    setTransactions(transactionsFormatted);
    
    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive')
    const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative')
    
    const totalInterval = lastTransactionExpensives === 0 
      ? 'Não há transações' 
      : `01 a ${lastTransactionExpensives}`;

>>>>>>> main
    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
<<<<<<< HEAD
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia ${lastTransactionsEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastTransactionsExpensives}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <>
          <S.Header>
            <S.UserWrapper>
              <S.UserInfo>
                <S.Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/38234499?v=4',
                  }}
                />
                <S.User>
                  <S.UserGreeting>Olá,</S.UserGreeting>
                  <S.UserName>Tavares</S.UserName>
                </S.User>
              </S.UserInfo>
              <S.LogoutButton onPress={() => {}}>
                <S.Icon name="power" />
              </S.LogoutButton>
            </S.UserWrapper>
          </S.Header>
          <S.HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Entradas"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </S.HighlightCards>

          <S.Transactions>
            <S.Title>Listagem</S.Title>
            <S.TransactionList
=======
        amount: Number(entriesTotal).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionEntries === 0 
        ? 'Não há entradas' 
        : `Última entrada dia ${lastTransactionEntries}` 
      },
      expensives: {
        amount: Number(expensiveTotal).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionExpensives === 0 
        ? 'Não há saídas' 
        : `Última saída dia ${lastTransactionExpensives}`
      },
       total: {
        amount: Number(total).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: totalInterval
       }
    })
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadTransactions()
  }, []))

  return (
    <Container>
      { isLoading ? (
        <LoadContainer>
          <ActivityIndicator 
            color={theme.colors.primary}
            size="large"
          />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: user.photo }} />

                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={signOut}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
        
          <HighlightCards>
            <HighlightCard 
              title="Entradas" 
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
              type="up"
            />
            <HighlightCard 
              title="Saídas" 
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastTransaction}
              type="down"
            />
            <HighlightCard 
              title="Total" 
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
              type="total"
            />
          </HighlightCards>
        
          <Transactions>
            <Title>Listagem</Title>

            <TransactionsList
>>>>>>> main
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
<<<<<<< HEAD
          </S.Transactions>
        </>
      )}
    </S.Container>
  );
}
=======
            
          </Transactions>
        </>
      )}
    </Container>
  )
}
>>>>>>> main

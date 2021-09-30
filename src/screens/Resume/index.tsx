<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';

import { HistoryCard } from '../../components/HistoryCard';

import * as S from './styles';
import { categories } from '../../utils/categories';

interface TransactionData {
  type: 'positive' | 'negative';
=======
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ActivityIndicator } from 'react-native';

import { categories } from '../../utils/categories';
import { useAuth } from '../../hooks/auth';

import { HistoryCard } from '../../components/HistoryCard';

import { 
  ChartContainer, 
  Container, 
  Content, 
  Header, 
  Title, 
  MonthSelect, 
  MonthSelectButton, 
  MonthSelectIcon, 
  Month,
  LoadContainer
} from './styles';

interface TransactionData {
  type: 'positive' | 'negative'
>>>>>>> main
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
<<<<<<< HEAD
=======
  percent: string;
>>>>>>> main
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );

  async function loadData() {
    setIsLoading(true);
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === 'negative',
    );
=======
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])
  
  const theme = useTheme();
  const { user } = useAuth();

  function handleDateChange(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
    } else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }

  async function loadData() {
    setIsLoading(true);
    const dataKey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted
      .filter((expensive: TransactionData) => 
        expensive.type === 'negative' &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
      );

    const expensivesTotal = expensives.reduce((accumulator: number, expensive: TransactionData) => {
      return accumulator + Number(expensive.amount);
    }, 0)
>>>>>>> main

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
<<<<<<< HEAD
      });
=======
      })
>>>>>>> main

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
<<<<<<< HEAD
          currency: 'BRL',
        });
=======
          currency: 'BRL'
        })

        const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`;

>>>>>>> main
        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
<<<<<<< HEAD
        });
      }
    });
=======
          percent,
        })
      }
    })
>>>>>>> main

    setTotalByCategories(totalByCategory);
    setIsLoading(false);
  }

<<<<<<< HEAD
  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>
      <S.Content>
        {/* <VictoryPie data={totalByCategories} x="name" y="total" /> */}
        {totalByCategories.map(item => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.totalFormatted}
            color={item.color}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
=======
  useFocusEffect(useCallback(() => {
    loadData()
  }, [selectedDate]))

  return (
    <Container>
        <Header>
          <Title>Resumo por categoria</Title>
        </Header>

        { isLoading ? (
          <LoadContainer>
            <ActivityIndicator 
              color={theme.colors.primary}
              size="large"
            />
          </LoadContainer>
        ) : (
          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: useBottomTabBarHeight()
            }}
          >

            <MonthSelect>
              <MonthSelectButton onPress={() => handleDateChange('prev')}>
                <MonthSelectIcon name="chevron-left" />
              </MonthSelectButton>

              <Month>{ format(selectedDate, 'MMMM, yyyy', { locale: ptBR }) }</Month>

              <MonthSelectButton onPress={() => handleDateChange('next')}>
                <MonthSelectIcon name="chevron-right" />
              </MonthSelectButton>
            </MonthSelect>

            <ChartContainer>
              <VictoryPie 
                data={totalByCategories}
                colorScale={totalByCategories.map(category => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    fill: theme.colors.shape
                  }
                }}
                labelRadius={50}
                x="percent"
                y="total"
              />
            </ChartContainer>

            {
              totalByCategories.map(item => (
                <HistoryCard
                  key={item.key}
                  title={item.name}
                  amount={item.totalFormatted}
                  color={item.color}
                />
              ))
            }
          </Content>
        )
      }
    </Container>
  )
}
>>>>>>> main

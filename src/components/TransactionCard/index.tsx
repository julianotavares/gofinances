<<<<<<< HEAD
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { categories } from '../../utils/categories';

import * as S from './styles';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
=======
import React from 'react';
import { categories } from '../../utils/categories';

import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles';

export interface TransactionCardProps {
  type: 'positive' | 'negative'
>>>>>>> main
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
<<<<<<< HEAD
  const [category] = categories.filter(item => item.key === data.category);
  return (
    <S.Container>
      <S.Title>{data.name}</S.Title>

      <S.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={category.icon} />
          <S.CategoryName>{category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{data.date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
=======
  const category = categories.find(item => item.key === data.category)
  
  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category?.icon} />
          <CategoryName>{category?.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
>>>>>>> main

<<<<<<< HEAD
// eslint-disable-next-line no-use-before-define
import React from 'react';

import * as S from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
=======
import React from 'react';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from "./styles";

interface Props {
  type: 'up' | 'down' | 'total'
>>>>>>> main
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
<<<<<<< HEAD
  total: 'dollar-sign',
};

export function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Footer>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}
=======
  total: 'dollar-sign'
}

export function HighlightCard({
  type,
  title, 
  amount, 
  lastTransaction
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}
>>>>>>> main

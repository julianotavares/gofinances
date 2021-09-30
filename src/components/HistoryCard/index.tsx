import React from 'react';

<<<<<<< HEAD
import * as S from './styles';
=======
import { Container, Title, Amount } from './styles';
>>>>>>> main

interface Props {
  title: string;
  amount: string;
  color: string;
}

<<<<<<< HEAD
export function HistoryCard({ title, amount, color }: Props) {
  return (
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  );
}
=======
export function HistoryCard({ color, title, amount }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}
>>>>>>> main

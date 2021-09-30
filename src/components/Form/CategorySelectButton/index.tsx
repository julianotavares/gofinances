import React from 'react';

<<<<<<< HEAD
import * as S from './styles';
=======
import { 
  Container,
  Category,
  Icon
} from './styles';
>>>>>>> main

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
<<<<<<< HEAD
    <S.Container onPress={onPress}>
      <S.Category>
        {title}
        <S.Icon names="chevron-down" />
      </S.Category>
    </S.Container>
  );
}
=======
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}
>>>>>>> main

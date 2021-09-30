<<<<<<< HEAD
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';
=======
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';
>>>>>>> main

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
<<<<<<< HEAD
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
=======
    <Container onPress={onPress} {...rest}>
      <Title>{ title }</Title>
    </Container>
  )
}
>>>>>>> main

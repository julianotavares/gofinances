<<<<<<< HEAD
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <S.Container {...rest} />;
}
=======
import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps;

export function Input({...rest}: Props) {
  return (
    <Container {...rest} />
  )
}
>>>>>>> main

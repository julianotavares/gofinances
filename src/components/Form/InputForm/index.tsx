<<<<<<< HEAD
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
=======
>>>>>>> main
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

<<<<<<< HEAD
import { Input } from '../Input';
import * as S from './styles';
=======
import { Input } from '../Input'

import { Container, Error } from './styles';
>>>>>>> main

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
<<<<<<< HEAD
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
=======
    <Container>
      <Controller 
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      { error && <Error>{ error }</Error> }
    </Container>
  )
}
>>>>>>> main

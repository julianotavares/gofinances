<<<<<<< HEAD
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  isActive,
  type,
  title,
  ...rest
}: Props) {
  return (
    <S.Container isActive={isActive} type={type}>
      <S.Button {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
}
=======
import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container,
  Icon,
  Title,
  Button
} from './styles';

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container 
      type={type}
      isActive={isActive}
    >
      <Button
        {...rest}
      >
        <Icon 
          name={icons[type]}
          type={type}
        />
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  )
}
>>>>>>> main

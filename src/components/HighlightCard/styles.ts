<<<<<<< HEAD
/* eslint-disable no-shadow */
import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
=======
import styled, {
  css
} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
>>>>>>> main

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
<<<<<<< HEAD
  background: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
=======
  background-color: ${({ theme, type }) => 
    type === "total" ? theme.colors.secondary : theme.colors.shape
  };
>>>>>>> main

  width: ${RFValue(300)}px;
  border-radius: 5px;

<<<<<<< HEAD
  padding: 18px 22px;
  padding-bottom: ${RFValue(42)}px;

=======
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
>>>>>>> main
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
<<<<<<< HEAD

  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
=======
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
>>>>>>> main
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

<<<<<<< HEAD
  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};
  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `};
=======
  ${({ type }) => type === 'up' && css`
    color: ${({ theme}) => theme.colors.success}
  `}

  ${({ type }) => type === 'down' && css`
    color: ${({ theme}) => theme.colors.attention}
  `}

  ${({ type }) => type === 'total' && css`
    color: ${({ theme}) => theme.colors.shape}
  `}
>>>>>>> main
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
<<<<<<< HEAD
  font-family: ${({ theme, type }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
=======
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
>>>>>>> main
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
<<<<<<< HEAD
  font-family: ${({ theme, type }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
=======
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text
  };
>>>>>>> main
`;

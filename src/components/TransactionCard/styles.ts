<<<<<<< HEAD
/* eslint-disable no-shadow */
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
=======
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
>>>>>>> main

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
<<<<<<< HEAD
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

=======
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
>>>>>>> main
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
<<<<<<< HEAD
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.success : theme.colors.attention};
  margin-top: 2px;
=======
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;

  color: ${({ theme, type }) => 
    type === 'positive' ? theme.colors.success : theme.colors.attention
  };
>>>>>>> main
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

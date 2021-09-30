import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
<<<<<<< HEAD
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

import { DataListProps } from '.';
=======
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

import { DataListProps } from '.';
import { BorderlessButton } from 'react-native-gesture-handler';
>>>>>>> main

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
<<<<<<< HEAD
  background: ${({ theme }) => theme.colors.primary};
=======

  background-color: ${({ theme }) => theme.colors.primary};
>>>>>>> main

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
<<<<<<< HEAD
=======

  padding-top: ${Platform.OS === 'ios' ? 0 : 26}px;
>>>>>>> main
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
<<<<<<< HEAD
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
=======
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFValue(28) : RFValue(28)}px;
>>>>>>> main

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
<<<<<<< HEAD
  flex-direction: row;
  align-items: center;
=======
  align-items: center;
  flex-direction: row;
>>>>>>> main
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
<<<<<<< HEAD
=======

>>>>>>> main
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
<<<<<<< HEAD
  contentContainerStyle: { paddingHorizontal: 24 },
=======
  contentContainerStyle: { paddingHorizontal: 24 }
>>>>>>> main
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
<<<<<<< HEAD
  flex: 1%;
=======
  flex: 1;
>>>>>>> main
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

<<<<<<< HEAD
export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
=======
export const TransactionsList = styled(
    FlatList as new () => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
>>>>>>> main
})``;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
`;
=======
`;
>>>>>>> main

<<<<<<< HEAD
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
=======
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
>>>>>>> main

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
<<<<<<< HEAD
  color: ${({ theme }) => theme.colors.title};

  background: ${({ theme }) => theme.colors.shape};
=======

  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};
>>>>>>> main
  border-radius: 5px;

  margin-bottom: 8px;
`;

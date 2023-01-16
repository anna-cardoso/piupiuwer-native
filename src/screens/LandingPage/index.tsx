import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
          <Text> Login </Text>
    </S.Wrapper>
  );
};
export default LandingPage;

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Wrapper } from '@screens/Home/styles';
import React from 'react';
import { Text } from 'react-native';

const Signin = () => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.ImageContainer source={require('/src/assets/Logo.png')} />
      <Text> Sign-in </Text>
      <S.SigninButton
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        {' '}
        Entrar{' '}
      </S.SigninButton>
    </S.Wrapper>
  );
};
export default Signin;

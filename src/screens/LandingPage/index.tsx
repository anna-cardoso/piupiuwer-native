import * as S from './styles';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Login: React.FC = ({ navigation }) => (
  <S.Wrapper>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login');
      }}
    >
      <Text> Login </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cadastro');
      }}
    >
      <Text> Cadastro </Text>
    </TouchableOpacity>
  </S.Wrapper>
);

export default Login;

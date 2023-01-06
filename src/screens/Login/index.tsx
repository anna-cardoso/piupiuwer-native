import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Login: React.FC = ({ navigation }) => (
  <S.Wrapper>
    <StatusBar style="light" />
    <S.Head>
      <Text>imagem logo passarinho piupiuwer</Text>
    </S.Head>
    <S.Body>
      <S.Inputs placeholder="e-mail" placeholderTextColor="#000000" />
      <S.Inputs
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#000000"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </S.Body>
  </S.Wrapper>
);

export default Login;

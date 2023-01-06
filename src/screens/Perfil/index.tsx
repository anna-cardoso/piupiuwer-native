import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/*Colocar a foto de Perfil*/

const Perfil = () => (
  <S.Wrapper>
    <StatusBar style="light" />
    <S.Header>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LandingPage');
        }}
      >
        <Text> Sair </Text>
      </TouchableOpacity>
    </S.Header>
  </S.Wrapper>
);

export default Perfil;

import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/*falta adicionar o useState da seha e email*/
const Home: React.FC = ({ navigation }) => {
  return (
    <S.Wrapper>
      <StatusBar style="light" />
      <S.Heading>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Text> Perfil </Text>
        </TouchableOpacity>
        <Text>img-passarinho</Text>
        <Text>trending</Text>
      </S.Heading>
    </S.Wrapper>
  );
};

export default Home;

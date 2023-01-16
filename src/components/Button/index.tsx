import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export type ButtonProps = {
  name: string;
  nav: string;
};

const Button: React.FC<ButtonProps> = ({ name, nav }) => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.Button onPress={() => navigation.navigate(nav)}>
        <S.TextButton>{name}</S.TextButton>
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;

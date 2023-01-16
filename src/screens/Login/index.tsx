/* eslint-disable prettier/prettier */
import Button from '@components/Button';
import * as S from './styles';
import Inputs from '@components/Inputs';
import React from 'react';

const Login = () => {
  return (

    <S.Wrapper>
      <S.ImageContainer source={require('/src/assets/Logo.png')} />
      <S.Container>
        
        <Inputs text={"Username"} />
        <Inputs text={"Password"} />
        <S.Texto>{"Forgot password?"}</S.Texto>
        <Button name={'Entrar'} nav={'Home'}/>
        <Button name={'Voltar'} nav={'LandingPage'} />
      </S.Container>
    </S.Wrapper>
  );
};
export default Login;

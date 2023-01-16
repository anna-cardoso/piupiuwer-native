import * as S from './styles';
import React from 'react';

export type InputProps = {
  text: string;
};

const Input: React.FC<InputProps> = ({ text }) => {
  return (
    <S.Wrapper>
      <S.Inputs placeholder={text} />
    </S.Wrapper>
  );
};
export default Input;

import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  display: flex;
  flex: 1;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 32px;
`;
export const Head = styled(View)`
  padding: 8px;
  align-items: center;
  justify-content: center;
  heigh: 32px;
  width: 100%;
`;
export const Inputs = styled(TextInput)`
  background-color: #ffffff;
`;
export const Body = styled(View)`
  align-items: center;
  justify-content: center;
  justify-content: center;
  background-color: #272727;
  flex: 1;
`;

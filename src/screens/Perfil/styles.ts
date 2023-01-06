import { View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #272727;
`;
export const Header = styled(View)`
  align-items: center;
  justify-content: space-between;
  background-color: #ff0000;
`;
export const Icon = styled(Image)`
  heigth: 32%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

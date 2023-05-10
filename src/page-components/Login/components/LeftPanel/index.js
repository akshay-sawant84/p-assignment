import React from 'react'
import { Container, Image, LogoText, Text } from './styles';

const LeftPanel = () => {
  return (
    <Container>
      <LogoText>LOGO</LogoText>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
        eget adipiscing faucibus platea. Eu ultrices ipsum
      </Text>
      <Image src={require('../../../../assets/Log in - left image.png')} />
    </Container>
  );
}

export default LeftPanel;
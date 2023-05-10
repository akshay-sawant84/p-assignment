import styled from "styled-components";

export const Container = styled.div``;

export const ColorProp = styled.div`
  background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const LogoText = styled(ColorProp)`
  font-weight: 700;
  font-size: 50px;
`;

export const Text = styled(ColorProp)`
  max-width: 500px;
  font-size: 16px;
  margin-top: 20px;
`

export const Image = styled.img`
  margin-top: 50px;
  width: 100%;
`;
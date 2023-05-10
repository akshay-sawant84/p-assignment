import styled from "styled-components";

export const Container = styled.div`
    background: #06051A;
    min-height: 100vh;
`

export const Heading = styled.h3`
  background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 38px;
  margin: 0 0 20px 0;
`;

export const FormContainer = styled.div`
     padding: 35px 75px;
`;

export const FooterText = styled.p`
    color: #4B4E70;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
`

export const Span = styled.span`
  color: #5961f8;
`;

export const MultiStepForm = styled.div`
    background: radial-gradient(145.46% 122.03% at 88.28% 10.25%, rgba(222, 164, 242, 0.1) 0%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(93.02% 80.9% at 22.44% 86.73%, rgba(110, 111, 248, 0.1) 0%, rgba(110, 111, 248, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(131.02deg, rgba(104, 108, 248, 0.059) 10.34%, rgba(236, 171, 241, 0.059) 90.18%), #060519;
    border-radius: 20px;
    height: 68vh;
    padding: 25px;
    color: #fff;
`;

export const StepForm = styled.form``;

import styled from "styled-components";
import signupBg from '../../assets/signup-background.png';
import Button from "@mui/material/Button";


export const Container = styled.div`
    background-image: url(${signupBg});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background: radial-gradient(
        168.07% 71.98% at 103.33% -4.84%,
        rgba(222, 164, 242, 0.1) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        93.02% 80.9% at 22.44% 86.73%,
        rgba(110, 111, 248, 0.1) 0%,
        rgba(110, 111, 248, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(
      131.02deg,
      rgba(104, 108, 248, 0.059) 10.34%,
      rgba(236, 171, 241, 0.059) 90.18%
    ),
    #060519;
  border-radius: 20px;
  padding: 50px 40px;
  color: #c8d8ff;

  & .MuiInputBase-root {
    border: 1px solid #343e50;
    filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
    border-radius: 4px;
    color: #fff;
    width: 100%;

    & svg {
      color: #c8d8ff;
    }
  }

  & .MuiFormControl-root {
    width: 100%;
  }
`;


export const Heading = styled.h3`
    font-weight: 700;
    font-size: 30px;
    margin: 0;
    text-align: center;
`;

export const SubHeading = styled.p`
  color: #5c6d8e;
  font-size: 16px;
  text-align: center;
`;

export const Span = styled.span`
  color: #5961f8;
  cursor: pointer;
`;

export const Form = styled.form`
    margin-top: 50px;
`;

export const ControllerContainer = styled.div`
    margin-top : ${({ mt }) => mt};
`;

export const Label = styled.div`
  font-size: 16px;
  color: #C8D8FF;
  margin-bottom: 8px;
`

export const ErrorText = styled.div`
  color: #fc0101;
  font-size: 12px;
  margin-top: 8px;
`;

export const ResendCodeText = styled.p`
  font-size: 12px;
  color: #5C74A3;
  margin-top: 8px;

  & span{
    color: #A49DF8;
    font-weight: 600;
    margin-left: 4px;
  }

  & .resend-span {
    cursor: pointer;
  }
`

export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(
      165.69deg,
      rgba(104, 108, 248, 0.7) 4.49%,
      rgba(236, 171, 241, 0.7) 113.71%
    );
    border-radius: 5px;
    width: 100%;
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    padding: 8px 30px;
    margin-top: 30px;
  }
`;

export const FooterText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: #96ABDE;
  opacity: 0.6;
  margin: 30px 30px 0 30px;
  text-align: center;
`
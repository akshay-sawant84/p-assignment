import styled from "styled-components";
import Button from "@mui/material/Button";

export const Container = styled.div`
  background: radial-gradient(
        145.46% 122.03% at 88.28% 10.25%,
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
  padding: 52px 45px;
  color: #fff;

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

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.div`
  color: #c8d8ff;
  font-weight: 700;
  font-size: 40px;
`;

export const SubHeading = styled.div`
  color: #5c6d8e;
  font-size: 16px;
  margin-top: 12px;
`;

export const Span = styled.span`
  color: #5961f8;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  margin-top: 50px;
`;

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
    padding: 15px 30px;
  }
`;

export const ErrorText = styled.div`
  color: #fc0101;
  font-size: 12px;
  margin-top: 8px;
`;

export const Label = styled.div`
  font-size: 16px;
  color: #C8D8FF;
  margin-bottom: 8px;
`
export const ControllerContainer = styled.div`
  margin-bottom: 30px;
`;

export const FooterContainer = styled.div``

export const Text = styled.p`
  color: #96ABDE;
  font-size: 12px;
  text-align: center;
  margin: 25px 0;
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

export const SignInType = styled.div`
  border: 0.5px solid #96ABDE;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  color: #C8D8FF;
  font-size: 18px;
  cursor: pointer;
`
export const SignInLogo = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
`

export const FooterText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: #96ABDE;
  opacity: 0.6;
  margin: 30px 30px 0 30px;
  text-align: center;
`
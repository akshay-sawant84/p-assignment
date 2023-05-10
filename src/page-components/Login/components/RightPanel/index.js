import React, { useState } from 'react'
import { Container, ControllerContainer, ErrorText, FooterContainer, FooterText, FormContainer, HeaderContainer, Heading, Label, ResendCodeText, SignInLogo, SignInType, Span, StyledButton, SubHeading, Text } from './styles';
import { useForm, MobileNumberController, InputController} from "../../../../forms";
import Grid from '@mui/material/Grid';
import useTimer from '../../../../common/hooks/useTimer';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const RightPanel = () => {
  const navigate = useNavigate();
  const [getOTP, setGetOTP] = useState(false);
  const timer = useTimer({ durationInSeconds: 60 });

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackBarState;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues : {
      mobile_number : {
        country_code : '+91'
      }
    }
  });

  const onSubmit = (values) => {

    if(!getOTP){
      setGetOTP(true);
      timer.start();
    }

    const { otp = ''} = values;
    
    if((String(otp).trim()).length === 4){
      console.log('values', values);
      return navigate('/');
    }

    if((String(otp).trim()).length !== 4 && getOTP) {
      return setSnackBarState({...snackBarState, open : true})
    }
  };

  const resendOTP = () => {
    timer.start()
  }

  return (
    <Container>
      <HeaderContainer>
        <Heading>Get Started !</Heading>
        <SubHeading>
          New to Company? <Span onClick={()=> navigate('/signup')}>Sign up</Span>
        </SubHeading>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <ControllerContainer>
          <Label>Enter Mobile Number</Label>
          <MobileNumberController
            control={control}
            autoComplete='off'
            name="mobile_number"
            placeholder="Enter Mobile Number"
            error={errors.mobile_number ? true : false}
            rules={{
              required: true,
              validate: (value) => {
                const { country_code, number } = value;

                if (!number) {
                  return "Mobile Number is required";
                }

                if (!country_code) {
                  return "Mobile Number Country Code is Required";
                }
                return undefined;
              },
            }}
          />
          {errors.mobile_number && (
            <ErrorText>Mobile Number is required</ErrorText>
          )}
        </ControllerContainer>
        {getOTP && (
          <ControllerContainer>
            <Label>Enter OTP</Label>
            <InputController
              control={control}
              name="otp"
              type="number"
              placeholder="Enter four digit OTP"
              error={errors.otp ? true : false}
              helperText={errors.otp ? errors.otp.message : ""}
              rules={{
                required: "OTP is required",
              }}
            />
            <ResendCodeText>Haven’t received code?{timer.seconds >= 1? <span>{`Resend in ${timer.minutes} : ${timer.seconds} sec`}</span> : <span className='resend-span' onClick={resendOTP}>Resend</span>}</ResendCodeText>
          </ControllerContainer>
        )}
        <StyledButton variant="contained" type="submit">
          {getOTP ? 'Login' : 'Get OTP'}
        </StyledButton>
      </FormContainer>
      <FooterContainer>
        <Text>Or sign in with</Text>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SignInType>
              <SignInLogo src={require("../../../../assets/google-logo.png")} />
              Google
            </SignInType>
          </Grid>
          <Grid item xs={12} md={6}>
            <SignInType>
              <SignInLogo
                src={require("../../../../assets/facebook-logo.png")}
              />
              Facebook
            </SignInType>
          </Grid>
        </Grid>
        <FooterText>
          By creating an account means you agree to the Terms & Conditions and
          our Privacy Policy
        </FooterText>
      </FooterContainer>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => ({ ...snackBarState, open: false })}
        message="OTP length should be 4"
        key={vertical + horizontal}
      >
        <Alert
          onClose={() => ({ ...snackBarState, open: false })}
          severity="error"
          sx={{ width: "100%" }}
        >
          OTP length should be 4
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default RightPanel;
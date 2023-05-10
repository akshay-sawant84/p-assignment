import React, { useState } from "react";
import {
  Container,
  ControllerContainer,
  ErrorText,
  Form,
  FormContainer,
  Heading,
  Label,
  Span,
  SubHeading,
  ResendCodeText,
  StyledButton,
  FooterText
} from "./styles";
import { useForm, MobileNumberController, InputController } from "../../forms";
import Grid from "@mui/material/Grid";
import useTimer from "../../common/hooks/useTimer";
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Signup = () => {
  const navigate = useNavigate();
  const [getOTP, setGetOTP] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackBarState;

  const timer = useTimer({ durationInSeconds: 60 });
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      mobile_number: {
        country_code: "+91",
      },
    },
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
      <FormContainer>
        <Heading>Create store in 10mins</Heading>
        <SubHeading>
          Already have a account?{" "}
          <Span onClick={() => navigate("/login")}>Sign in</Span>
        </SubHeading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <ControllerContainer>
                <Label>First Name</Label>
                <InputController
                  control={control}
                  name="first_name"
                  placeholder="Your First Name"
                  error={errors.first_name ? true : false}
                  helperText={
                    errors.first_name ? errors.first_name.message : ""
                  }
                  rules={{
                    required: "First name is required",
                  }}
                  autoComplete="off"
                  size="small"
                />
              </ControllerContainer>
            </Grid>
            <Grid item xs={6}>
              <ControllerContainer>
                <Label>Last Name</Label>
                <InputController
                  control={control}
                  name="last_name"
                  autoComplete="off"
                  placeholder="Your Last Name"
                  error={errors.last_name ? true : false}
                  helperText={errors.last_name ? errors.last_name.message : ""}
                  rules={{
                    required: "Last name is required",
                  }}
                  size="small"
                />
              </ControllerContainer>
            </Grid>
          </Grid>
          <ControllerContainer mt="30px">
            <Label>Enter Mobile Number</Label>
            <MobileNumberController
              control={control}
              autoComplete="off"
              name="mobile_number"
              placeholder="Enter Mobile Number"
              size="small"
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
            <ControllerContainer mt="30px">
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
              <ResendCodeText>
                Haven’t received code?
                {timer.seconds >= 1 ? (
                  <span>{`Resend in ${timer.minutes} : ${timer.seconds} sec`}</span>
                ) : (
                  <span className="resend-span" onClick={resendOTP}>
                    Resend
                  </span>
                )}
              </ResendCodeText>
            </ControllerContainer>
          )}
          <StyledButton variant="contained" type="submit" size="small">
            {getOTP ? "Create Your Store" : "Get OTP"}
          </StyledButton>
        </Form>
        <FooterText>
          By creating an account means you agree to the Terms & Conditions and
          our Privacy Policy
        </FooterText>
      </FormContainer>
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
};

export default Signup;

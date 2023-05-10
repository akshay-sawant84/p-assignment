import React, { useState } from "react";
import {
  Container,
  FooterText,
  FormContainer,
  Heading,
  MultiStepForm,
  Span,
  StepForm,
} from "./styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {
  useForm,
  MobileNumberController,
  InputController,
} from "../../../../forms";

const stepMapping = {
  1: Step1,
  2: Step2,
};

const Form = () => {
  const [activeStep, setActiveStep] = useState(1);

  const Component = stepMapping[activeStep];

  const methods = useForm({
    mode: "onChange",
  });

  const { control, handleSubmit, reset, trigger, formState : { errors } } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <FormContainer>
        <Heading>LOGO</Heading>
        <MultiStepForm>
            <StepForm>
              <Component activeStep={activeStep} control = {control} />
            </StepForm>
        </MultiStepForm>
        <FooterText>
          © Copyright 2023 <Span>Company</Span>
        </FooterText>
      </FormContainer>
    </Container>
  );
};

export default Form;

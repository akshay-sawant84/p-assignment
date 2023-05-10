import React from "react";
import Grid from "@mui/material/Grid";
import { InputController } from "../../../../../forms";

const Step1 = (control, errors) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <InputController
        //   control={control}
          name="store_name"
          placeholder="Store Name"
          error={errors.store_name ? true : false}
          helperText={errors.otp ? errors.store_name.message : ""}
          rules={{
            required: "Store name is required",
          }}
        />
        {/* <InputController
          control={control}
          name="store_domain"
          placeholder="Store Domain"
          error={errors.store_domain ? true : false}
          helperText={errors.store_domain ? errors.store_domain.message : ""}
          rules={{
            required: "Store Domain is required",
          }} */}
        {/* /> */}
      </Grid>
      <Grid item xs={6} md={6}>
        sndkcno
      </Grid>
    </Grid>
  );
};

export default Step1;

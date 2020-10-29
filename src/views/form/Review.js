import React  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CustomInput, FormGroup } from 'reactstrap';



export default function PaymentForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment model
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="PaymentName" label="Payment Model Name " fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
        <FormGroup>
        <TextField required id="SolutionCateg" label="Payment models " fullWidth autoComplete="cc-name" />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Price plans</option>
          <option>Free</option>
          <option>One time payment</option>
          <option>Pay-per-use</option>
          <option>Subscription</option>
        </CustomInput>
      </FormGroup>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="price"
            label="Price"
            autoComplete="cc-csc"
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
        <FormGroup>
        <TextField required id="currency" label="Currency " fullWidth autoComplete="cc-name" />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Currency</option>
          <option>EUR</option>
          <option>DLR</option>
          <option>GBP</option>
        </CustomInput>
      </FormGroup>
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="IBAN"
            label="IBAN"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

        
      </Grid>
    </React.Fragment>
  );
}
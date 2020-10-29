import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CustomInput, Input, FormGroup, Label } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dataset details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="DatasetName" label="Dataset Name " fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
        <FormGroup>
        <TextField required id="DatasetCateg" label="Dataset Category " fullWidth autoComplete="cc-name" />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option >Category</option>
          <option>Text</option>
          <option>Images</option>
          <option>Videos</option>
          <option>Tabular Data</option>
          <option>Big Data</option>
        </CustomInput>
      </FormGroup>
        </Grid>

        <Grid item xs={12} md={6}>
        <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-6" >Data Structure</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Structured
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Unstructured
            </Label>
          </FormGroup>
          </FormGroup>
        </Grid>

        
        <Grid item xs={12} md={6}>
        <FormGroup>
        <TextField required id="DatasetFormat" label="Dataset Format " fullWidth autoComplete="cc-name" />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option >Format</option>
          <option>NGSI LD</option>
          <option>CSV</option>
          <option>JSON</option>
          <option>XLS</option>
          <option>XML</option>
        </CustomInput>
      </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="This database complies with the GDPR requirements"
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="url"
            label="Dataset URL"
            helperText=" "
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        

        <Grid item xs={12} >
          <TextField
            required
            id="description"
            label="Dataset description"
            helperText="Dataset description, what does it contain ? what is its source ? "
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
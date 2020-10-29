import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { CustomInput, FormGroup, Label } from 'reactstrap';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Solution details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="SolutionName" label="AI Solution Name " fullWidth autoComplete="cc-name" />
        
        </Grid>
        <Grid item xs={12} md={6}>
        <FormGroup>
        <TextField required id="SolutionCateg" label="Solution Category " fullWidth autoComplete="cc-name" />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Category</option>
          <option>Data pre-processing</option>
          <option>Computer Vision</option>
          <option>NLP</option>
          <option>Neural Networks</option>
          <option>Machine Learning</option>
        </CustomInput>
      </FormGroup>
        </Grid>
        <Grid item xs={12} >
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser </Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Dataset / AI Solution Notebook / Pre-trained model" />
      </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="url"
            label="AI Solution URL"
            helperText="Jupyter notebook, Docker file, Github repo "
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            
            id="data"
            label="Dataset URL"
            helperText="URL to dataset"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="description"
            label="AI solution description"
            helperText="AI solution description, what does it solve ? what is the model used ? what is the type of training data ?"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Open source AI solution"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
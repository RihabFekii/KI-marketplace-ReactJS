import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Solution provider details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="company"
            name="Company"
            label="Company"
            fullWidth
            autoComplete="Company name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="city"
            name="city, Country"
            label="City, Country"
            fullWidth
            autoComplete="City, Country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="phone" name="phone" label="Phone number" fullWidth />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
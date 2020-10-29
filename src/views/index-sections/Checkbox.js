//checkbox
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
      marginTop:"5px", 
      marginBottom:"0px",
      padding:"0px",
      color:"gray",
    },
    FormControlLabel : {
        marginBottom:"0px"
    }
  }));
  
  export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const { gilad, jason, antoine } = state;
    
  
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup >
            <FormControlLabel 
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
              label="All"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
              label="CSV"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="SQLite"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="NGSI_LD"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="Other"
            />
          </FormGroup>
          </FormControl>
    </div> 
     );
    }
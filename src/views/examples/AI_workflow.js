import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { SpinnerDotted } from 'spinners-react';


import PrimarySearchAppBar from "views/index-sections/SearchNav";
import DemoFooter from "components/Footers/DemoFooter.js";
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

// reactstrap components
import { Button } from "reactstrap";
import { CustomInput,  FormGroup,Input, Label } from 'reactstrap';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>

  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 550,
    marginTop:"70px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:"250px"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false);



  return (

    <>
        <PrimarySearchAppBar /> 

    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Data Upload" {...a11yProps(0)} />
        <Tab label="Heatmap" {...a11yProps(1)} />
        <Tab label="Histogram" {...a11yProps(2)} />
        <Tab label="Target class" {...a11yProps(3)} />
        <Tab label="Train AI model" {...a11yProps(4)} />
        <Tab label="Test AI model" {...a11yProps(5)} />
        <Tab label="Metrics" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid item xs={12} >
                <FormGroup>
                <Label for="exampleCustomFileBrowser" style={{fontWeight:"bold"}} >File Browser </Label>
                <CustomInput type="file" name="file" id="exampleFile" label="Dataset" />
                </FormGroup>
                <br/>
                <TextField
                id="url"
                label="Dataset URL"
                helperText=" "
                fullWidth
                autoComplete="cc-csc"
                />

        </Grid>
                <br/>
                <br/>
            <Grid item xs={12} >
        <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-12" style={{fontWeight:"bold"}}>Data Structure</legend>
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

        <Grid item xs={12} >
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

        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
          
        <img style={{width:"750px", height:"550px", paddingLeft:"10px",justifyContent: "center"}} alt="hi" src={require('assets/img/heatmap.png')}  />
        <p style={{ paddingLeft:"600px",justifyContent: "Right"}} >Dataset Heatmap</p>
     
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img style={{width:"750px", height:"550px", paddingLeft:"10px",justifyContent: "center"}} alt="hii" src={require('assets/img/Histo_features.png')}  />
       
      </TabPanel>
      <TabPanel value={value} index={3}>
      <img style={{width:"950px", height:"450px", paddingLeft:"10px",justifyContent: "center"}} alt="hiii" src={require('assets/img/Target_stats.png')}  />
      </TabPanel>
      <TabPanel value={value} index={4}>

        
      <Button
            className="btn-round"
            outline
            color="danger"
            size="lg"
            target="_blank"
            style = {{ marginLeft :"10px"}}
           onClick={ () => {
                setLoading(true);
            }}
        >
         "Start training the model" 

        </Button>

        <Button
            className="btn-round"
            outline
            color="danger"
            size="lg"
            target="_blank"
            style = {{ marginLeft :"10px"}}
           onClick={ () => {
                setLoading(true);
            }}
        >
          {loading ? <SpinnerDotted style={{size: "100%" , color:"white"}}/> : "loading.." }

        </Button>


        <br/>

        <h5 style={{marginTop:"70px", marginLeft:"30px"}}>The training follows this architecture : </h5>

        <img style={{width:"760px", height:"350px", paddingLeft:"300px"}} alt="hei" src={require('assets/img/Single_job.png')} ></img>

      </TabPanel>
      <TabPanel value={value} index={5}>
      <Grid item xs={12} >
                <FormGroup>
                <h3 style={{marginTop:"0px", paddingTop:"0px"}} >Upload Test Dataset</h3> 
                <br/>
                <br/>
                <CustomInput type="file" name="file" id="exampleFile" label="Test Dataset" />
                </FormGroup>
                <br/>
                <TextField
                id="url"
                label="Test Dataset URL"
                helperText=" "
                fullWidth
                autoComplete="cc-csc"
                />

        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>

      
      <img style={{width:"900px", height:"530px", paddingLeft:"100px", paddingTop:"0px"}} alt="hei" src={require('assets/img/dashboard.png')} ></img>
      </TabPanel>
    </div>

    <DemoFooter />

        </> 
  );
}

import React , { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PrimarySearchAppBar from "views/index-sections/SearchNav";
import DemoFooter from "components/Footers/DemoFooter.js";

// reactstrap components
import { Container, Row} from "reactstrap";

// core components

import Cardd from "views/index-sections/Card.js";


import factory from 'assets/img/factory.svg'
import data from 'assets/img/data.svg'
import prog_data from 'assets/img/progress_data.svg'
import vis_data from 'assets/img/visual_data.svg'
import proc_data from 'assets/img/data_processing.svg'
import drone from 'assets/img/drone_surveillance.svg'


import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Hityles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft:"0px"
  },
  button: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        width:"300px" , 
        height:"55px", 
        color:"black",
        fontSize:"15px"
    
  }
});




function AiMarketplace() {
  const classes = Hityles();
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("ai-marketplace");
      return function cleanup() {
        document.body.classList.remove("ai-marketplace");
        
      };
    });

    
    return (
        <>
        <PrimarySearchAppBar /> 

        <Grid container spacing={1} >
        <Grid item xs={3} style= {{ backgroundColor: "white"}}  >
            <div style= {{ marginTop: "85px", marginLeft: "10px", textAlign: "center"}} >
            <h3 style= {{ fontWeight: "10px" , fontFamily:"arial" , color:"black" , fontSize:"40px", marginBottom:"20px" }}> Catalog</h3>
            <button className={classes.button}  > Data pre-processing </button>
            <button className={classes.button}  > Clustering </button>
            <button className={classes.button}  > Computer Vision </button>
            <button className={classes.button}  > Neural Networks </button>
            <button className={classes.button}  > NLP </button>
            <ButtonDropdown  isOpen={dropdownOpen} toggle={toggle} className={classes.button} >
            <DropdownToggle style={{ backgroundColor : "#dbdbdb" }} caret >
                Popular AI algorithms
            </DropdownToggle >
            <DropdownMenu >
                <DropdownItem className={classes.button}  >XG Boost</DropdownItem>
                <DropdownItem className={classes.button}  >BERT</DropdownItem>
                <DropdownItem className={classes.button}  >Transfer Learning</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
            
            
          </div>
        </Grid>
        <Grid item xs={9}  >
          
        <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
       

      <Grid
      container
      spacing={4}
      
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Predictive maintenance"} subheader={"19/06/2020"} cardcontent={"Predictive maintenance"} src={factory} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Data cleaning"} cardcontent={"Data cleaning"} subheader={"10/06/2020"} src={data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Fault Detection"} cardcontent={"Fault Detection"}  subheader={"26/05/2020"} src={prog_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd  title={"Zero Defect "} cardcontent={"Zero Defect Manufacturing"} subheader={"11/04/2020"} src={vis_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd  title={"Data Preprocessing"} cardcontent={"Data Preprocessing"} subheader={"14/03/2020"} src={proc_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Quality prediction"} cardcontent={"Quality prediction"} subheader={"05/02/2020"} src={drone} />
      </Grid>
    </Grid>

    

    </Row>
    </Container>

    </div>

    </div>
      

      </Grid>
      </Grid>

      <DemoFooter />

      </> 
      
  );
}

export default AiMarketplace;

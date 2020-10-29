
import React  from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PrimarySearchAppBar from "views/index-sections/SearchNav";
import DemoFooter from "components/Footers/DemoFooter.js";
import Checkbox from "views/index-sections/Checkbox"

// reactstrap components
import { Container, Row} from "reactstrap";

// core components

import Cardd from "views/index-sections/Card.js";


import factory from 'assets/img/bigdata.png'
import data from 'assets/img/imgs.svg'
import prog_data from 'assets/img/tabular.png'
import vis_data from 'assets/img/review.png'
import proc_data from 'assets/img/databig.png'
import drone from 'assets/img/video.png'



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
        height:"40px", 
        color:"black",
        fontSize:"20px" 
  }
});


// 

function AiMarketplace() {
  const classess = Hityles();
   

  function changeBackgroundIn(e) {
    e.target.style.background = '#e2e2e2';
  }

  function changeBackgroundOut(e) {
    e.target.style.background = 'white';
  }

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
            <div style= {{ marginTop: "80px", marginLeft: "10px", textAlign: "center"}} >
            <h3 style= {{ fontWeight: "10px" , fontFamily:"arial" , color:"black" , fontSize:"30px", marginBottom:"0px" }}> Datasets Catalog</h3>
            <h4 style= {{ fontWeight: "10px" , marginLeft:"20px",textAlign: "left" , color:"black" , fontSize:"20px", marginBottom:"15px" }} >Data Format</h4>
            <button className={classess.button} onMouseEnter={changeBackgroundIn} onMouseOut={changeBackgroundOut} > Text </button>
            <button className={classess.button} onMouseEnter={changeBackgroundIn} onMouseOut={changeBackgroundOut} > Images </button>
            <button className={classess.button} onMouseEnter={changeBackgroundIn} onMouseOut={changeBackgroundOut} > Videos </button>
            <button className={classess.button} onMouseEnter={changeBackgroundIn} onMouseOut={changeBackgroundOut} > Tabular </button>
            <button className={classess.button} onMouseEnter={changeBackgroundIn} onMouseOut={changeBackgroundOut} > Audio </button>   

            <h4 style= {{ fontWeight: "10px" , marginLeft:"20px",textAlign: "left" , color:"black" , fontSize:"20px", marginBottom:"0px" }} >Data Type</h4>
            <Checkbox/> 
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
        <Cardd  title={"Steal Defect dataset"} subheader={"Size : 2GB | Type: Tabular"} cardcontent={"Steal plates mesurments"} src={factory} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd  title={"Machine state dataset"} cardcontent={"Cutting machines images"} subheader={"Size : 1GB | Type: Images"} src={data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Production chain dataset"} cardcontent={"Producion chain data"}  subheader={"Size : 1.5GB | Type: Tabular"} src={prog_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd  title={"Customer review dataset"} cardcontent={"Product reviews data"} subheader={"Size : 2GB | Type: Text"} src={vis_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd  title={"Zero Defect dataset"} cardcontent={"Fabric Defect"} subheader={"Size : 5GB | Type: Big Data"} src={proc_data} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardd title={"Assembling process dataset"} cardcontent={"Quality prediction"} subheader={"Size : 6GB | Type: Videos"} src={drone} />
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';



import factory from 'assets/img/factory.svg'


import PrimarySearchAppBar from "views/index-sections/SearchNav";
import DemoFooter from "components/Footers/DemoFooter.js";
import Setup from "views/ProductDescription/Setup" 

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



const featuredPosts = [
  {
    title: 'Predictive maintenance',
    price:" Price : 200 Euro",
    date: 'Last commit : 19/06/2020',
    description:
      'Predictive maintenance uses data from various sources like historical maintenance records, sensor data from machines, and weather data to determine when a machine will need to be serviced.',
    image: factory,
    imageText: 'Image Text',
  }
];



const sidebar = {
  title: 'About the provider',
  description:
    'FIWARE is a curated framework of open source platform components to accelerate the development of Smart Solutions.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2019', url: '#' },
    { title: 'November 1017', url: '#' },
   
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Website', icon: LanguageIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
    { name: 'Twitter', icon: TwitterIcon },

    
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ marginTop:"71px"}} maxWidth="lg">
        <PrimarySearchAppBar />
        <main>
          
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container >
          <Grid  className={classes.mainGrid} xs={8} item >
          <Main title="Description"  
            body={ <p> Problem is ...</p> } />
           
            <Main title="Setup"  
            body={ <Setup/> } />
            
          </Grid>
          <Grid item xs={4} >
          <Sidebar 
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />

          </Grid>
          </Grid>

        </main>
      </Container>
      <DemoFooter />
      
    </React.Fragment>
  );
}
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Gridd from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    width:"410px", 
    marginTop:"30px",
    marginBottom :"10px"
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Gridd item xs={12} md={4}>
      <Paper elevation={1} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Gridd container direction="row" spacing={1} alignItems="center">
            <Gridd item>
              <network.icon />
            </Gridd>
            <Gridd item>{network.name}</Gridd>
          </Gridd>
        </Link>
      ))}
    </Gridd>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
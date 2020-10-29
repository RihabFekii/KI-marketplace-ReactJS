import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// reactstrap components
import { Button } from "reactstrap";

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 460,
    height:300
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5" style={{margin:"20px", marginLeft:"0px"}}>
                {post.title}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary" >
                {post.price}
              </Typography>
              
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph style={{margin:"20px", marginLeft:"0px"}} >
                {post.description}
              </Typography>

              <div className="col ">
                <Button
                  className="btn-round"
                  outline
                  color="danger"
                  href="/flow"
                  size="lg"
                  target="_blank"
                  style = {{ marginRight :"10px"}}
                >
                    <i className="fa fa-shopping-cart mr-2" />
                   Buy Solution
                </Button>

                <Button
                  className="btn-round"
                  outline
                  color="danger"
                  href="/flow"
                  size="lg"
                  target="_blank"
                  style = {{ marginLeft :"10px"}}
                >
                    
                    <i className="fa fa-play mr-2" />
                     Demo
                </Button>

                <Button
                  className="btn-round"
                  outline
                  href="/flow"
                  color="danger"
                  size="lg"
                  target="_blank"
                  style = {{ marginLeft :"10px"}}
                >
                    
                    <i className="fa fa-heart mr-2" />
                     Add to Favorite 
                </Button>

              </div>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
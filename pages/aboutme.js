import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
export default function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
    
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
           About Me
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
          I'm a Full Stack Developer with extensive experience in building high-quality sites and mobile applications. My vast experience building e-commerce websites with woo-commerce, Shopify, and Wordpress to writing applications with the frontend Javascript framework and NodeJS backend, and also developed Android and iOS application using Flutter.  I worked with my clients very closely, understand their requirements, and provide the best services. 
          Looking to do more here. I am constantly improving, analyzing, and presenting findings and recommendations on SEO, website performance, and user behavior. 
          In addition, I make sure that design and usability are of the highest quality. I also have experience with single-page web applications and have a wide set of skills with REST API's applications, performance profiling, and web app performance optimization at scale. If you are looking for a web developer with backend skills then I am the man.
          </Typography>
        
        </Container>
      </div>
     
    </main>
   
  </React.Fragment>
  );
}

import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NextLink from "next/link";
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          <NextLink href="/">
            <Link color="inherit">Home</Link>
          </NextLink>
          {" | "}
          <NextLink href="/aboutme">
            <Link color="inherit">About Me</Link>
          </NextLink>
          {" | "}
          <NextLink href="/work">
            <Link color="inherit">Work</Link>
          </NextLink>
          {" | "}
          <NextLink href="/contactme">
            <Link color="inherit">Contact Me</Link>
          </NextLink>
          {" | "}

          <Link
            color="inherit"
            target="_blank"
            href="https://www.upwork.com/o/profiles/users/~0151f08e97cf39660b/"
          >
            HireMe
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link href="/" color="inherit">
            amarnath.dev
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
};

export default FooterComponent;

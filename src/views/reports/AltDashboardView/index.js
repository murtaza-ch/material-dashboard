import { Container, Grid, makeStyles } from '@material-ui/core';

import ActiveUsers from './ActiveUsers';
import Budget from './Budget';
import FinanceStats from './FinanceStats';
import Page from 'src/components/Page';
import React from 'react';
import Tools from './Tools';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AltDashboardView = () => {
  const classes = useStyles();
  return (
    <Page title="Alternative Dashboard" className={classes.root}>
      <Container maxWidth={false}>
        <Tools />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} xs={12}>
            <ActiveUsers />
          </Grid>
          <Grid item lg={9} xs={12}>
            <FinanceStats />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AltDashboardView;

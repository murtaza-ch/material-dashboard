import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  rounded: {
    borderRadius: 4
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    padding: 24,
    textAlign: 'center'
  },
  litleTitle: {}
}));

const Budget = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={12} sm={6} md={3} className={classes.content}>
          <Typography
            variant="overline"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            TOTAL INCOME
          </Typography>
          <div className={classes.title}>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              gutterBottom
            >
              $854,355.00
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.content}>
          <Typography
            variant="overline"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            TOTAL EXPANSES
          </Typography>
          <div className={classes.title}>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              gutterBottom
            >
              $373,250.50
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.content}>
          <Typography
            variant="overline"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            NET PROFIT
          </Typography>
          <div className={classes.title}>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              gutterBottom
            >
              123,532.00
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.content}>
          <Typography
            variant="overline"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            ACTIVE SUBSCRIPTIONS
          </Typography>
          <div className={classes.title}>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              gutterBottom
            >
              26,000
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;

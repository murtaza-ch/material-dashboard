import {
  Breadcrumbs,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  }
}));

const Tools = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" spacing={3}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/app/dashboard">
            Dashboard
          </Link>
          <Typography color="textPrimary">Reports</Typography>
        </Breadcrumbs>
        <Typography color="textPrimary" component="h3" variant="h3">
          Finance Overview
        </Typography>
      </Grid>
      <Grid item>
        <Button startIcon={<CalendarTodayIcon />} size="medium" variant="text">
          Last 7 days
        </Button>
      </Grid>
    </Grid>
  );
};

Tools.propTypes = {
  className: PropTypes.string
};

export default Tools;

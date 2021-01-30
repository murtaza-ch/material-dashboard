import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  Link,
  SvgIcon,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import VerticalAlignBottomOutlinedIcon from '@material-ui/icons/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@material-ui/icons/VerticalAlignTopOutlined';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" spacing={3}>
        <Grid item>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/app/dashboard">
              Dashboard
            </Link>
            <Link color="inherit" href="/app/dashboard">
              Management
            </Link>
            <Typography color="textPrimary">Customers</Typography>
          </Breadcrumbs>
          <Typography color="textPrimary" component="h3" variant="h3">
            All Customers
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Add customer
          </Button>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-start" paddingTop={2}>
        <Button
          className={classes.importButton}
          startIcon={<VerticalAlignBottomOutlinedIcon />}
        >
          Import
        </Button>
        <Button
          className={classes.exportButton}
          startIcon={<VerticalAlignTopOutlinedIcon />}
        >
          Export
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;

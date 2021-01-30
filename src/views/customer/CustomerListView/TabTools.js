import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Select,
  SvgIcon,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 500
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const TabTools = ({ className, ...rest }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <div className={clsx(className)} {...rest}>
      <Grid container justify="space-between" spacing={3}>
        <Grid item>
          <TextField
            className={classes.root}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder="Search customer"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Sort By
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              label="Sort By"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple'
              }}
            >
              <option aria-label="None" value="" />
              <option value="">Last Update (newest first)</option>
              <option value="">Twenty</option>
              <option value="">Thirty</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

TabTools.propTypes = {
  className: PropTypes.string
};

export default TabTools;

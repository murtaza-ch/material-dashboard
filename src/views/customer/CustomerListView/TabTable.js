import { Card, Divider } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Results from './Results';
import Tab from '@material-ui/core/Tab';
import TabTools from './TabTools';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import data from './data';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function TabTable() {
  const classes = useStyles();
  const [customers] = React.useState(data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Card>
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="ALL" {...a11yProps(0)} />
            <Tab label="ACCEPTS MARKETING" {...a11yProps(1)} />
            <Tab label="PROSPECT" {...a11yProps(2)} />
            <Tab label="RETURNING" {...a11yProps(3)} />
          </Tabs>
          <Divider />
        </AppBar>
        <TabPanel value={value} index={0}>
          <TabTools />
          <Results customers={customers} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabTools />
          <Results customers={customers} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabTools />
          <Results customers={customers} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabTools />
          <Results customers={customers} />
        </TabPanel>
      </Card>
    </div>
  );
}

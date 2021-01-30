import { Box, Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import Page from 'src/components/Page';
import Results from './Results';
import TabTable from './TabTable';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar />
        <TabTable />
      </Container>
    </Page>
  );
};

export default CustomerListView;

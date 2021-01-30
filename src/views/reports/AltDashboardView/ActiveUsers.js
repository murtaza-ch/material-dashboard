import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {},
  action: {
    marginTop: 4,
    marginRight: 4
  }
}));

const ActiveUsers = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'This year'
      },
      {
        backgroundColor: colors.grey[200],
        data: [11, 20, 12, 29, 30, 25, 13],
        label: 'Last year'
      }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        className={classes.action}
        title="Active Users"
        subheader="Page views per second"
        action={
          <Typography variant="h3" color="inherit">
            143
          </Typography>
        }
      />
      <CardContent>
        <Box height={150} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <List>
        <ListItem divider>
          <ListItemText>
            <Typography display="block" variant="body2" color="textSecondary">
              /app/projects
            </Typography>
          </ListItemText>
          <Typography display="block" variant="body1">
            24
          </Typography>
        </ListItem>

        <ListItem divider>
          <ListItemText>
            <Typography display="block" variant="body2" color="textSecondary">
              /app/chat
            </Typography>
          </ListItemText>
          <Typography display="block" variant="body1">
            13
          </Typography>
        </ListItem>
        <ListItem divider>
          <ListItemText>
            <Typography display="block" variant="body2" color="textSecondary">
              /cart
            </Typography>
          </ListItemText>
          <Typography display="block" variant="body1">
            20
          </Typography>
        </ListItem>
        <ListItem divider>
          <ListItemText>
            <Typography display="block" variant="body2" color="textSecondary">
              /cart/checkout
            </Typography>
          </ListItemText>
          <Typography display="block" variant="body1">
            8
          </Typography>
        </ListItem>
      </List>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

ActiveUsers.propTypes = {
  className: PropTypes.string
};

export default ActiveUsers;
